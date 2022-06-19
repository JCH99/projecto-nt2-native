import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { View, Text, StyleSheet, Alert } from "react-native";
import CompraList from "../components/Carrito/CompraList";
import { Button } from "../components/Buttons/Button";
import { comprar } from "../services/productosApi";
import { AuthContext } from "../context/AuthContext";
import jwt_decode from "jwt-decode";

const Carrito = ({ navigation }) => {
  const context = useContext(CartContext);
  const token = useContext(AuthContext).token;

  async function hacerCompra() {
    const decoded = jwt_decode(token);
    const exito = await comprar({
      productos: context.items,
      _id: decoded._id,
    });

    if (exito) {
      context.reset();

      Alert.alert("Compra exitosa", "Gracias, vuelva prontos!", [
        {
          text: "Volver al inicio",
          onPress: () => navigation.navigate("Productos"),
        },
      ]);
    } else {
      Alert.alert(
        "No se pudo realizar la compra",
        "Proba reduciendo las cantidades, no tenemos tanto stock!",
        [{ text: "Ok" }]
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Productos</Text>
      <CompraList data={context.items} />
      <Text>Total: ${context.total}</Text>
      {context.items.length > 0 && (
        <Button title="Comprar" onPress={hacerCompra} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "700",
  },

  section: {
    marginBottom: 48,
  },
});

export default Carrito;

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
    }, token);

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
      <View style={styles.list}>
      <CompraList data={context.items}/>
      </View>
      {/*<View style={{height:2, backgroundColor:'#F1C40F'}} />*/}
      <View style={styles.final}>
      {context.items.length > 0 && (<>
        <Text style={styles.total}>Total: ${context.total}</Text>
        <Button style={styles.button} title="Comprar" onPress={hacerCompra} /></>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //alignItems: "center",
    //justifyContent: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "700",
  },
  total: {
    color: "black",
    padding: 10,
    //borderRadius: 8,
    //marginTop: 10,
    //marginBottom: 5,
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    textAlign: "center",
  },
  list: {
    flex: 1,
    backgroundColor: "white",
  }, 
  final: {
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    height: 20,
    marginLeft: 10,
    paddingRight: 10,
  }
});

export default Carrito;

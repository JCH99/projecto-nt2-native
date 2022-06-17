import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { View, Text, StyleSheet, Alert } from "react-native";
import CompraList from "../components/Carrito/CompraList";
import { Button } from "../components/Buttons/Button";
import {comprar} from "../services/productosApi";

const Carrito = ({navigation}) => {
  const context = useContext(CartContext);

  async function hacerCompra () {
    const exito = await comprar({productos: context.items, _id: "629fd97ef75aed07859b4c1f"});

/* 

 const itemAAgregar = {
      _id: data.item._id,
      titulo: data.item.titulo,
      cantidad: 1,
      precio: data.item.precio,
    };

{"productos": [{
        "_id": "6296af6266dae4f7662bc3d5",
        "titulo": "Stella Artois",
        "precio": 100,
        "cantidad": 8
    },
    {
        "_id": "6296af6266dae4f7662bc3d7",
        "titulo": "Combo Quesos",
        "precio": 520,
        "cantidad": 2
    }],
    "_id": "629fd97ef75aed07859b4c1f"
}
*/

    if(exito){
      context.reset();
      
      Alert.alert(
        "Compra exitosa",
        "Gracias, vuelva prontos!",
        [
          { text: "Volver al inicio", onPress: () => navigation.navigate("Home") }
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Productos</Text>
      <CompraList data={context.items} />
      <Text>Total: ${context.total}</Text>
      <Button title="Comprar" onPress={hacerCompra}/>
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

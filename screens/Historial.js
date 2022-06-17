import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import HistorialList from "../components/Historial/HistorialList";

const compras = [
  {
    _id: "111",
    idUsuario: "222",
    fechaCompra: "21/06/2022 20:50:30",
    productos: [
      {
        _id: "333",
        titulo: "Birra",
        precio: 150,
        cantidad: 4,
      },
      {
        _id: "777",
        titulo: "Queso",
        precio: 50,
        cantidad: 2,
      },
    ],
  },
  {
    _id: "444",
    idUsuario: "555",
    fechaCompra: "25/06/2022 20:04:30",
    productos: [
      {
        _id: "666",
        titulo: "Buena Birra",
        precio: 150,
        cantidad: 5,
      },
      {
        _id: "777",
        titulo: "Queso",
        precio: 50,
        cantidad: 7,
      },
      {
        _id: "777",
        titulo: "Queso",
        precio: 50,
        cantidad: 7,
      },
    ],
  },
];

export default function Historial({ navigation }) {
  const goToDetails = compra => {
    navigation.navigate("Carrito", compra);
  };

  return (
    <View style={styles.container}>
      <HistorialList data={compras} />
      {/*
      <Text style={styles.title}>A carrito</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ir" onPress={goToDetails} color="teal" />
      </View>
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "teal",
    padding: 20,
  },
  description: {
    fontSize: 18,
    color: "gray",
    paddingBottom: "2%",
  },
  buttonContainer: {
    width: "90%",
  },
  image: {
    width: "80%",
    height: "50%",
  },
});

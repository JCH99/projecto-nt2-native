import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import HistorialList from "../components/Historial/HistorialList";
import { useState, useEffect, useContext } from "react";
import getHistorial from "../services/historialApi";
import { AuthContext } from "../context/AuthContext";
import jwt_decode from "jwt-decode";

// [
//   {
//     _id: "62add884df62ca4822dbc26e",
//     userId: "629fd9b3f75aed07859b4c20",
//     productos: [
//       {
//         _id: "6296af6266dae4f7662bc3d5",
//         titulo: "Stella Artois",
//         precio: 100,
//         cantidad: 8,
//       },
//       {
//         _id: "6296af6266dae4f7662bc3d7",
//         titulo: "Combo Quesos",
//         precio: 520,
//         cantidad: 2,
//       },
//     ],
//     fecha: "2022-06-18 13:52:04",
//   },
// ];

export default function Historial() {
  const token = useContext(AuthContext).token;
  const [compras, setCompras] = useState([]);

  useEffect(async () => {
    const decoded = jwt_decode(token);
    const list = await getHistorial(decoded._id);
    setCompras(list);
  }, []);

  return (
    <View style={styles.container}>
      <HistorialList data={compras} />
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

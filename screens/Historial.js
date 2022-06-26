import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import HistorialList from "../components/Historial/HistorialList";
import { useState, useEffect, useContext } from "react";
import getHistorial from "../services/historialApi";
import { AuthContext } from "../context/AuthContext";

export default function Historial({navigation}) {
  const token = useContext(AuthContext).token;
  const [compras, setCompras] = useState([]);

  useEffect(async () => {
    const list = await getHistorial(token);
    setCompras(list);
  }, []);

  return (
    <View style={styles.container}>
      <HistorialList data={compras} navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "space-around",
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

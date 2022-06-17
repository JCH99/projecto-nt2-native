import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Destacados from "../components/Home/Destacados";
import ProductoList from "../components/Home/ProductoList";
import { getProductos } from "../services/productosApi";

const Home = () => {
  const [productosList, setProductos] = useState([]);

  useEffect(async () => {
    const list = await getProductos();
    const productosList = [];
    list.map((item) => productosList.push(item));

    setProductos(productosList);
  }, []);

  return (
    <View style={styles.container}>
      <Destacados/>
      <Text style={styles.header}>Productos</Text>
      <ProductoList data={productosList} />
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

export default Home;

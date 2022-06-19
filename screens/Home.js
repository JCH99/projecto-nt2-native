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
    list.map(item => productosList.push(item));

    setProductos(productosList);
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.containerDestacados}>
        <Destacados  />
      </View>
      <View style={styles.containerProductos}>
        {productosList.length > 0 && (
          <ProductoList style={{ flex: 1 }} data={productosList} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDestacados: {
    backgroundColor: "white"
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "center"
  },
  containerProductos: {
    flex:1,
    marginTop: 10
  },
  header: {
    flex: 1,
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "700",
    backgroundColor: "white"
  },

  section: {
    marginBottom: 48,
  },
});

export default Home;

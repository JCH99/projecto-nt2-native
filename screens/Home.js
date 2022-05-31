import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Destacados from "../components/Home/Destacados";
import ProductoList from "../components/Home/ProductoList";
// 1. ofertas destacadas -- carousel
// 2. lista completa productos
//2.1 title
//2.2 filter bebidas picadas
//2.3 flatlist

const data = [
  {
    id: 1,
    title: "combo papitas con birra",
   // img: "https://images.unsplash.com/photo-1604307078172-9b46710cc5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
  },
  {
    id: 2,
    title: "combo 2",
    img: "https://images.unsplash.com/photo-1627935722051-395636b0d8a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
  {
    id: 3,
    title: "combo 3",
    img: "https://images.unsplash.com/photo-1604634077336-1429372af4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    title: "combo 4",
    img: "https://images.unsplash.com/photo-1600891965483-0a429ebf9076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1082&q=80",
  },
  {
    id: 5,
    title: "combo 5",
    img: "https://images.unsplash.com/photo-1561668048-fe9c092832e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ofertas destacadas</Text>
      <Destacados data={data} />

      <Text style={styles.header}>Productos</Text>
      <ProductoList data={data} />
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

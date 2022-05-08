import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Destacados from "../components/Home/Destacados";

// 1. ofertas destacadas -- carousel
// 2. lista completa productos
//2.1 title
//2.2 filter bebidas picadas
//2.3 flatlist

const data = [
  {
    title: "Item 1",
    text: "Text 1",
  },
  {
    title: "Item 2",
    text: "Text 2",
  },
  {
    title: "Item 3",
    text: "Text 3",
  },
  {
    title: "Item 4",
    text: "Text 4",
  },
  {
    title: "Item 5",
    text: "Text 5",
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Ofertas destacadas</Text>
      <Destacados data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

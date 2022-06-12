import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { View, Text, StyleSheet } from "react-native";
import CompraList from "../components/Carrito/CompraList";

const Carrito = () => {
  const context = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Productos</Text>
      <CompraList data={context.items} />
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

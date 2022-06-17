import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CardProducto from "./CardProducto";

const ProductoList = (props) => {
  console.log(props.data);
  return (
    <FlatList
      styles={styles.listContainer}
      data={props.data}
      renderItem={(producto) => (
        <CardProducto
          style={styles.listItem}
          data={producto}
          keyExtractor={(item) => item._id}
        />
      )}
      // keyExtractor={(item) => data.indexOf(item)}
      numColumns={1}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    // paddingHorizontal: 5,
    // paddingVertical: 10,
  },
  listItem: {
    // width: "100%",
    // padding: 20,
  },
});

// const Carrito = () => {
//   return <CardProducto data={data}></CardProducto>;
// };

export default ProductoList;

//id, titulo, imagen, desc, precio, tipo

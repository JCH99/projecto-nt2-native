import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
// import CardProducto from "./CardProducto";
import { CartContext } from "../../context/CartProvider";
import CustomCard from "../Common/CustomCard";

const ProductoList = (props) => {
  const contexto = useContext(CartContext);
  // console.log(props.data);
  const products = props.data.map((product) => {
    let cantidad = 0;
    // console.log(contexto.items);
    const itemAgregadoIndex = contexto.items.findIndex(
      (item) => item._id === product._id
    );

    if (itemAgregadoIndex !== -1) {
      cantidad = contexto.items[itemAgregadoIndex].cantidad;
    }
    return { ...product, cantidad };
  });
  // console.log(products);
  return (
    <FlatList
      styles={styles.listContainer}
      data={products}
      renderItem={(producto) => (
        <CustomCard
          style={styles.listItem}
          variant="tienda"
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

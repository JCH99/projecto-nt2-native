import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CustomCard from "../Common/CustomCard";

const CompraList = props => {
  return (
    <FlatList
      styles={styles.listContainer}
      data={props.data}
      renderItem={producto => (
        <CustomCard style={styles.listItem} variant="carrito" data={producto} />
      )}
      keyExtractor={(item, index) => index.toString()}
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

export default CompraList;

//id, titulo, imagen, desc, precio, tipo

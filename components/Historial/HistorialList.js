import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

const HistorialList = data => {
  return (
    <FlatList
      styles={styles.listContainer}
      data={data}
      renderItem={compra => <Text>Hola</Text>}
      keyExtractor={item => data.indexOf(item)}
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

export default HistorialList;

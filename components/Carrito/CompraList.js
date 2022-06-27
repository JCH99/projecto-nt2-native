import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import CustomCard from "../Common/CustomCard";

const CompraList = props => {
  return (
    <FlatList
      styles={styles.listContainer}
      data={props.data}
      ItemSeparatorComponent={() => {
        return (<View style={{height:2, backgroundColor:'#F1C40F'}} />);
      }}
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
    //paddingHorizontal: 5,
    //paddingVertical: 10,
  },
  listItem: {
    // width: "100%",
    // padding: 20,
  },
});

export default CompraList;

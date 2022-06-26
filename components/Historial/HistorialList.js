import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const HistorialList = props => {
  const context = useContext(CartContext);
  const products = props.data;

  function recargarCarrito(productos) {
    context.loadCarrito(productos);
    props.navigation.navigate("Carrito");
  }

  return (
    <FlatList
      styles={styles.listContainer}
      data={products}
      renderItem={({ item }) => (
        <Card>
          <Card.Content>
            <View>
              <Title>Fecha: {item.fecha}</Title>
              <Paragraph>
                Cantidad de productos: {item.productos.length}
              </Paragraph>
              <Button title="Volver a comprar" onPress={()=>recargarCarrito(item.productos)} />
            </View>
          </Card.Content>
        </Card>
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

export default HistorialList;

import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const HistorialList = ({ navigation, props }) => {
  const context = useContext(CartContext);
  console.log(props);

  function recargarCarrito() {
    context.loadCarrito({ productos: context.items });
    navigation.navigate("Carrito");
  }

  return (
    <FlatList
      styles={styles.listContainer}
      data={props}
      renderItem={({ item }) => (
        <Card>
          <Card.Content>
            <View>
              <Title>Fecha: {item.data.fecha}</Title>
              <Paragraph>
                Cantidad de productos: {item.data.productos.length}
              </Paragraph>
              <Button title="Volver a comprar" onPress={recargarCarrito} />
            </View>
          </Card.Content>
        </Card>
      )}
      numColumns={1}
      // keyExtractor={item => item._id}
    />
  );
};

// guiarse de screen carrito.
// agregar button con onPress llamando a una funcion definida en HistorialList
// en esta funcion llamar al metodo para llenar carrito del context pasandole SOLO items en el formato adecuado Y hacer el navigate a screen carrito.
// TouchableWithoutFeedback ???????????????????

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

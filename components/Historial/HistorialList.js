import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

const HistorialList = (props) => {
  return (
    <FlatList
      styles={styles.listContainer}
      data={props.data}
      renderItem={({ item }) => (
        <Card>
          <Card.Content>
            <TouchableWithoutFeedback onPress={() => this.actionOnRow(item)}>
              <View>
                <Title>Fecha: {item.fecha}</Title>
                <Paragraph>
                  Cantidad de productos: {item.productos.length}
                </Paragraph>
              </View>
            </TouchableWithoutFeedback>
          </Card.Content>
        </Card>
      )}
      numColumns={1}
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

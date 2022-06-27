import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { Button } from "../Buttons/Button";
import { CartContext } from "../../context/CartProvider";

// variant tienda -> imagen descripcion
// variant carrito -> precio

const CustomCard = props => {
  const { _id, titulo, subtitulo, cantidad, precio, descripcion, imagen } =
    props.data.item;
  const contexto = useContext(CartContext);

  const agregar = () => {
    const itemAAgregar = {
      _id: _id,
      titulo: titulo,
      cantidad: 1,
      precio: precio,
    };
    contexto.addOne(itemAAgregar);
  };
  const restar = () => {
    contexto.removeOne(_id);
  };
  return (
    <Card style={styles.card}>
      <Card.Title titleStyle={styles.title} title={titulo} subtitle={subtitulo} />
      <Card.Content style={styles.title}>
        {props.variant === "tienda" && (
          <>
            <Card.Cover style={styles.image} source={{ uri: imagen }} />
            <Paragraph style={styles.title}>{descripcion}</Paragraph>
          </>
        )}
        {props.variant === "carrito" && (
          <>
            <Paragraph style={styles.title}>{`${cantidad} X $${precio}`}</Paragraph>
            <Paragraph style={styles.title}>{`Total: $${cantidad * precio}`}</Paragraph>
          </>
        )}
      </Card.Content>
      <Card.Actions style={styles.title}>
        {cantidad > 0 && <Button title="-" onPress={restar} />}
        <Button title={cantidad} />
        <Button title="+" onPress={agregar} />
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
  },
  title: {
    alignSelf: "center"
  },
  image: {
    alignSelf: "center",
    backgroundColor: "white",
    height: 180,
    width: 180
  }
});

export default CustomCard;

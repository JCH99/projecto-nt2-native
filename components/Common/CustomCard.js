import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { Button } from "../Buttons/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

// variant tienda -> imagen descripcion
// variant carrito -> precio

const CustomCard = (props) => {
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
  // console.log(props.data.item);
  return (
    <Card>
      <Card.Title title={titulo} subtitle={subtitulo} />
      <Card.Content>
        {props.variant === "tienda" && (
          <>
            <Card.Cover source={{ uri: imagen }} />
            <Paragraph>{descripcion}</Paragraph>
          </>
        )}
        {props.variant === "carrito" && (
          <>
            <Paragraph>{`${cantidad} X $${precio}`}</Paragraph>
            <Paragraph>{`Total: $${cantidad * precio}`}</Paragraph>
          </>
        )}
      </Card.Content>
      <Card.Actions>
        {cantidad > 0 && <Button title="-" onPress={restar} />}
        <Button title={cantidad} />
        <Button title="+" onPress={agregar} />
      </Card.Actions>
    </Card>
  );
};

export default CustomCard;

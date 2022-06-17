import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Button } from "../Buttons/Button";

const CardProdCompra = ({ data }) => {
  const contexto = useContext(CartContext);
  const agregar = () => {
    const itemAAgregar = {
      _id: data.item._id,
    };
    contexto.addOne(itemAAgregar);
  };
  const restar = () => {
    contexto.removeOne(data.item._id);
  };

  return (
    <Card>
      <Card.Title title={data.item.titulo} />
      <Card.Content>
        <Paragraph>{`${data.item.cantidad} X $${data.item.precio}`}</Paragraph>
        <Paragraph>{`Total: $${
          data.item.cantidad * data.item.precio
        }`}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button title="+" onPress={agregar} />
        <Button title={data.item.cantidad} />
        <Button title="-" onPress={restar} />
      </Card.Actions>
    </Card>
  );
};

export default CardProdCompra;

import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Button } from "../Buttons/Button";

const CardProdCompra = ({ data }) => {
  const contexto = useContext(CartContext);
  const agregar = () => {
    const itemAAgregar = {
         id: data.item._id,
         titulo: data.item.titulo,
         cantidad: 1,
         precioUnitario: data.item.precio,
    }
    contexto.addOne(itemAAgregar);
  }
  const restar = () => {
    contexto.removeOne(data.item._id);
  }

  return (
    <Card>
      <Card.Title title={data.item.titulo} />
      <Card.Content>
        <Paragraph>{`${data.item.cantidad} X $${data.item.precio}`}</Paragraph>
        <Paragraph>{`Total: $${data.item.cantidad * data.item.precio}`}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button title="+" onPress={agregar}/>
        <Text>{data.item.cantidad}</Text>
        <Button title="-" onPress={restar}/>
      </Card.Actions>
    </Card>
  );
};

export default CardProdCompra;
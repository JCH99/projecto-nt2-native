import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { Button } from "../Buttons/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

// ***********VER FUNCIONALIDAD BOTONES************
const CardProducto = ({ data }) => {
const contexto = useContext(CartContext);
let cantidad = 0;
const itemAgregadoIndex = contexto.items.findIndex(item => item._id === data.item._id);
if(itemAgregadoIndex !== -1){
  cantidad = contexto.items[itemAgregadoIndex].cantidad;
}
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
      <Card.Title title={data.item.titulo} subtitle={data.item.tipo} />
      <Card.Content>
        <Card.Cover source={{ uri: data.item.img }} />
        <Paragraph>{data.item.descripcion}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button title="+" onPress={agregar}/>
        <Text>{cantidad}</Text>
        <Button title="-" onPress={restar}/>
        {/* Ver de agregar un boton de "Comprar" */}
      </Card.Actions>
    </Card>
  );
};

export default CardProducto;

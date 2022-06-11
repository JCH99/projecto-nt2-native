import React from "react";
import { Card, Paragraph } from "react-native-paper";
import RnIncrementDecrementBtn from "./IncrementDecrementButton";

const CardProducto = ({ data }) => {
  // console.log(data);
  return (
    <Card>
      <Card.Title title={data.item.titulo} />
      <Card.Content>
        <Paragraph>{`Cantidad elegida por ${data.item.precio}`}</Paragraph>
        <Paragraph>{`Total (cantidad por precio)`}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <RnIncrementDecrementBtn minVal={0} minreq={3} max={10} val={data.item.stock} />
      </Card.Actions>
    </Card>
  );
};

export default CardProducto;
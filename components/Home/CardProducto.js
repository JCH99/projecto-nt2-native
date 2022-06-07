import React from "react";
import { Card, Paragraph } from "react-native-paper";
import { Button } from "../Buttons/Button";
import RnIncrementDecrementBtn from "./IncrementDecrementButton";

// ***********VER FUNCIONALIDAD BOTONES************
const CardProducto = ({ data }) => {
  // console.log(data);
  return (
    <Card>
      <Card.Title title={data.item.titulo} subtitle="Las mejores" />
      <Card.Content>
        <Card.Cover source={{ uri: data.item.img }} />
        <Paragraph>Las mas mas mas mejores.</Paragraph>
      </Card.Content>
      <Card.Actions>
        <RnIncrementDecrementBtn minVal={0} minreq={3} max={10} val={3} />
      <Button
        onPress={()=>{}}
        title="Comprar"
        disabled
        inverted
      />
      <Button
        onPress={()=>{}}
        title="No me gustan las papash"
        disabled
        inverted
      />
      </Card.Actions>
    </Card>
  );
};

export default CardProducto;

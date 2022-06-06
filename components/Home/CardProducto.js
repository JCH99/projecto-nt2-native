import React from "react";
import { Card, Paragraph } from "react-native-paper";
// ***********VER FUNCIONALIDAD BOTONES************
const CardProducto = ({ data }) => {
  // console.log(data);
  return (
    <Card>
      <Card.Title title={data.item.title} subtitle="Las mejores" />
      <Card.Content>
        <Card.Cover source={{ uri: data.item.img }} />
        <Paragraph>Las mas mas mas mejores.</Paragraph>
      </Card.Content>
      <Card.Actions></Card.Actions>
    </Card>
  );
};

export default CardProducto;

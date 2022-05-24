import React from "react";
import { View, Text, Image } from "react-native";
// import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { Home } from "../../screens/Home/";

// ***********VER FUNCIONALIDAD BOTONES************
const CardProducto = ({ data }) => {
  // console.log(data);
  return (
    <Card>
      <Card.Title title={data.item.title} subtitle="Las mejores" />
      <Card.Content>
        <Card.Cover source={{ uri: data.item.img }} />
        <Paragraph>
          Las mas mas mas mejores.djjdjd hjdhkajdhakDJAlkdjaaDJALKdjadja
          jahdAJDHAjdbajdhaDHAdjakdj.
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={Home}>No me gustan las papash</Button>
        <Button onPress={Home}>Comprar</Button>
      </Card.Actions>
    </Card>
  );
};

export default CardProducto;

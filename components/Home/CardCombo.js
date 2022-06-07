import React from "react";
import { View, Text, Title, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Paragraph, Title, Cover } from 'react-native-elements';

const CardCombo = () => {
    <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle"/>
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
  </Card>
};

export default CardCombo;

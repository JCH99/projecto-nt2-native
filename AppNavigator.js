import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
const Tab = createBottomTabNavigator();

const TEST = () => {
  return <Text>OLA</Text>;
};

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={TEST} />
      <Tab.Screen name="Carrito" component={TEST} />
      <Tab.Screen name="Perfil" component={TEST} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

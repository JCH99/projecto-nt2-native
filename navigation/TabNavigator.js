import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Carrito from "../screens/Carrito";
import Historial from "../screens/Historial";
import { AuthContext } from "../context/AuthContext";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Productos"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <Button
              onPress={signOut}
              title="Cerrar sesion"
              color="#F1C40F"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Historial"
        component={Historial}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

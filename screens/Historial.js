/* import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";

export default function Historial({ navigation }) {
  const goToDetails = () => {
    navigation.navigate("Carrito");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>A carrito</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ir" onPress={goToDetails} color="teal" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "teal",
    padding: 20,
  },
  description: {
    fontSize: 18,
    color: "gray",
    paddingBottom: "2%",
  },
  buttonContainer: {
    width: "90%",
  },
  image: {
    width: "80%",
    height: "50%",
  },
}); */
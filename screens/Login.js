import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Alert, ActivityIndicator, Image, ScrollView } from "react-native";
import { Button } from "../components/Buttons/Button";
import Input from "../components/Input";
import { AuthContext } from "../context/AuthContext";
import icon from "../assets/icon.png";

export function LoginForm({ setIsLoading }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isIncompleteData = !email || !password;

  const onSubmit = async () => {
    if (isIncompleteData) {
      Alert.alert("Acceso inválido", "Todos los campos son obligatorios");
      return;
    }

    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (err) {
      Alert.alert(
        "Acceso inválido",
        "Correo electrónico y/o contraseña incorrecta"
      );
      setIsLoading(false);
      return;
    }
  };

  return (
    <ScrollView>
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType={"email-address"}
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={text => setPassword(text)}
        isPassword
      />
      <Button
        onPress={onSubmit}
        title="Iniciar sesión"
        disabled={isIncompleteData}
        inverted
      />
    </View>
    </ScrollView>
  );
}

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <View style={styles.formView}>
          <Image style={styles.image} source={icon} />
          <LoginForm setIsLoading={setIsLoading} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: "30%",
    paddingHorizontal: "10%",
  },
  formView: {
    alignContent: "center",
  },
  title: {
    fontSize: 30,
    alignContent: "center",
    textAlign: "center",
    color: "#000",
    margin: 30,
  },
  image: {
    alignSelf: "center",
    height: 230,
    width: 230
  }
});

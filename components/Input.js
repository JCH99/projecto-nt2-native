import React, { useState } from "react";
import { StyleSheet, Pressable, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";

export default function Input(props) {
  const { placeholder, value, onChangeText, keyboardType, isPassword } = props;
  const [inputStyle, setInputStyle] = useState(styles.inputContainerBlur);

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  return (
    <View style={inputStyle}>
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setInputStyle(styles.inputContainerFocus)}
        onBlur={() => setInputStyle(styles.inputContainerBlur)}
        keyboardType={keyboardType}
        blurOnSubmit={false}
        secureTextEntry={isPassword ? passwordVisibility : false}
        returnKeyType="done"
      />
      {isPassword && (
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#000" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainerBlur: {
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    marginVertical: 20,
    backgroundColor: "white",
    borderColor: "#F1C40F",
  },
  inputContainerFocus: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#F1C40F",
    marginVertical: 20,
  },
  inputField: {
    padding: 14,
    fontSize: 20,
    width: "90%",
    color: "#000",
  },
});

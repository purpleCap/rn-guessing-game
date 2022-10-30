import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "#0d1423",
    borderBottomWidth: 1,
    marginVertical: 10,
    // color: "#0d1423",
  },
});

export default Input;

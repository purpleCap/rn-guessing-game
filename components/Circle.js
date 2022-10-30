import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Circle = (props) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderColor: "#0d1423",
    borderWidth: 1,
    borderRadius: 27,
    backgroundColor: "#d2d2d2",
  },
  text: {
    fontSize: 12,
    paddingHorizontal: 4.3,
    margin: 8,
  },
});
export default Circle;

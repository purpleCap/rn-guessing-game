import React from "react";
import { View, StyleSheet, Text } from "react-native";

const NumberContainer = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>{props.selectedVal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    color: "grey",
    fontWeight: "bold",
  },
});
export default NumberContainer;

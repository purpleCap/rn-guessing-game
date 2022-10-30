import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? "#0d1423" : "#d2d2d2",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
    borderBottomColor: Platform.OS === "ios" ? "#0d1423" : "transparent",
  },
  headerTitle: {
    color: Platform.OS === "android" ? "#d2d2d2" : "#0d1423",
    fontSize: 18,
  },
});
export default Header;

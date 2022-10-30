import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.btnWrapper}>
      <ButtonComponent activeOpacity={0.5} onPress={props.onPress}>
        <View style={styles.styleBtn}>
          <Text style={{ ...styles.textBtn, ...props }}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    borderRadius: 10,
    overflow: "hidden",
  },
  styleBtn: {
    // backgroundColor: "#0d1423",
    backgroundColor: "#d2d2d2",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#0d1423",
    borderWidth: 1.5,

    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.36,
    elevation: 4,
  },
  textBtn: {
    color: "#0d1423",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default MainButton;

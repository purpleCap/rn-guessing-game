import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "./../components/NumberContainer";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [entVal, setEntVal] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedVal, setSelectedVal] = useState(0);
  const [layoutWidth, setLayoutWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateLayoutWidth = () => {
      setLayoutWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayoutWidth);
    // return () => {
    //   Dimensions.removeEventListener("change", updateLayoutWidth);
    // };
  });

  const validateEntVal = (val) => {
    if (val * 1 >= 0 && val * 1 <= 99) setEntVal(val);
    else setEntVal("");
  };

  const confirmEnteredVal = () => {
    const choosenNum = parseInt(entVal);
    if (isNaN(choosenNum) || choosenNum <= 0 || choosenNum > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetEnteredVal },
      ]);
      return;
    }
    setConfirm(true);
    setSelectedVal(choosenNum);
    setEntVal("");
    Keyboard.dismiss();
  };

  const resetEnteredVal = () => {
    setEntVal("");
    setConfirm(false);
  };

  let confirmedOutput;
  if (confirm) {
    confirmedOutput = (
      <Card style={styles.summaryCard}>
        <Text style={styles.textStyle}>You choose</Text>
        <NumberContainer selectedVal={selectedVal} />
        <View style={styles.startGameBtn}>
          <MainButton
            onPress={() => {
              props.onStartGame(selectedVal);
            }}
          >
            START GAME
          </MainButton>
        </View>
      </Card>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
            <View style={{ ...styles.screen, width: layoutWidth }}>
              <Text style={styles.startGameTitle}>Start a New Game</Text>
              <Card style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.selectNum}>Select a Number</Text>
                  <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    value={entVal}
                    onChangeText={validateEntVal}
                  />
                  <View style={styles.btnContainer}>
                    <View style={styles.btnWrapper}>
                      <MainButton
                        fontSize={13}
                        onPress={() => {
                          resetEnteredVal();
                        }}
                        fsize={14}
                      >
                        RESET
                      </MainButton>
                    </View>
                    <View style={styles.btnWrapper}>
                      <MainButton
                        fontSize={13}
                        onPress={() => {
                          confirmEnteredVal();
                        }}
                        fsize={14}
                      >
                        CONFIRM
                      </MainButton>
                    </View>
                  </View>
                </View>
              </Card>
              {confirmedOutput}
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: StatusBar.currentHeight * 0.1,
    paddingVertical: Dimensions.get("window").height * 0.05,
    backgroundColor: "#d2d2d2",
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#d2d2d2",
  },
  startGameTitle: {
    fontSize: 20,
    marginVertical: 15,
    textTransform: "uppercase",
    fontWeight: "300",
    letterSpacing: 1.0,
    marginTop: 40,
  },
  inputContainer: {
    width: "80%",
    minWidth: 200,
    alignItems: "center",
  },
  selectNum: {
    textTransform: "uppercase",
    letterSpacing: 1.4,
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 3,
  },
  btnWrapper: {
    width: "45%",
    // width: Dimensions.get("window").width / 4 - 8,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryCard: {
    width: "70%",
    marginTop: 20,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 1.0,
  },
  startGameBtn: {
    width: "100%",
    paddingHorizontal: 12,
    marginTop: 10,
  },
});
export default StartGameScreen;

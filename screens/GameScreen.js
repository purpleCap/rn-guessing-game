import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import Circle from "../components/Circle";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  // state
  const initialGuess = generateRandomBetween(1, 100, props.selectedNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { selectedNum, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === selectedNum) {
      onGameOver(pastGuesses.length, selectedNum);
    }
  }, [currentGuess, selectedNum]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.selectedNum) ||
      (direction === "greater" && currentGuess > props.selectedNum)
    ) {
      Alert.alert("Wrong direction", "kindly give proper direction", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setPastGuesses([nextNumber, ...pastGuesses]);
    setCurrentGuess(nextNumber);
    // setRounds(rounds + 1);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.gameScreenText}>Opponent's Guess</Text>
      <NumberContainer selectedVal={currentGuess} />
      <Card style={styles.btnContainer}>
        <MainButton
          onPress={() => {
            nextGuessHandler("lower");
          }}
        >
          <Ionicons name="md-remove" size={24} color="#0d1423" />
        </MainButton>
        <MainButton
          onPress={() => {
            nextGuessHandler("greater");
          }}
        >
          <Ionicons name="md-add" size={24} color="#0d1423" />
        </MainButton>
      </Card>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {pastGuesses.map((guess, index) => {
            return (
              <View style={styles.itemContainer} key={guess}>
                <Text>
                  <Circle>{pastGuesses.length - index}</Circle>
                </Text>
                <Text>{guess}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#d2d2d2",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    width: "75%",
    maxWidth: "80%",
  },
  gameScreenText: {
    fontSize: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderColor: "##0d1423",
    borderWidth: 1,
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#d2d2d2",
    // width: "45%",
    width: Dimensions.get("window").width > 350 ? "50%" : "45%",
    alignSelf: "center",
    paddingHorizontal: 14,
  },
});

export default GameScreen;

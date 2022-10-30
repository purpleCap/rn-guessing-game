import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  const [layoutWidth, setLayoutWidth] = useState(
    Dimensions.get("window").width
  );
  useEffect(() => {
    const updateLayoutWidth = () => {
      setLayoutWidth(Dimensions.get("window").width);
      // console.log(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayoutWidth);
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ ...styles.screen }}>
          <View
            style={{
              ...styles.imageContainer,
              width: layoutWidth * 0.4,
              height: layoutWidth * 0.4,
              borderRadius: layoutWidth * 0.2,
            }}
          >
            <Image
              style={styles.image}
              resizeMode="cover"
              // source={require("../assets/success.png")}
              source={{
                uri: "https://image.pbs.org/video-assets/YjO6Mcw-asset-mezzanine-16x9-ABhAbdo.jpg",
              }}
            />
          </View>
          <Card style={styles.gameOverCard}>
            <Text style={styles.gameover}>Game Is Over! 😈</Text>
            <Text style={styles.gameoverText}>
              It took this computer {props.totalRounds} rounds to reach the
              correct number! The number was {props.originalNumber}.
            </Text>
          </Card>
          <View style={{ width: 150, paddingVertical: 5, marginTop: 100 }}>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
          </View>
        </View>
      </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // height: 150,
    // width: 150,
    height: Dimensions.get("window").width * 0.4,
    width: Dimensions.get("window").width * 0.4,
    borderRadius: Dimensions.get("window").width * 0.2,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gameoverText: {
    fontSize: 18,
    color: "#d2d2d2",
  },
  gameover: {
    fontSize: 18,
    color: "#d2d2d2",
    fontWeight: "bold",
  },
  gameOverCard: {
    backgroundColor: "#0d1423",
    // marginBottom: 30,
  },
});

export default GameOverScreen;

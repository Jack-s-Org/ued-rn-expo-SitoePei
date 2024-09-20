import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import SwipeDetector from "@/components/SwipeDetector";

const OnBoardingScreen02 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bgcolor}>
      <SwipeDetector
        onSwipe={(direction) => {
          if (direction === "left") {
            navigation.replace("OnBoarding03", { screen: "Home" });
          }
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.container3}>
            <Image
              source={require("@/assets/pics/OnBoardingPic02.png")}
              resizeMode="stretch"
              style={{ width: 356, height: 410 }}
            />
          </View>

          <Text style={styles.container2}>Live Instrument Recorder</Text>

          <View style={{ width: "70%" }}>
            <Text style={styles.container4}>
              High-quality audio recording device designed for capturing live
              performances of musical instruments
            </Text>
          </View>

          <Image
            source={require("@/assets/pics/OnBoardingSwipe01.png")}
            style={{
              // opacity: pressed ? 0.8 : 1,
              marginTop: 20,
            }}
          />
        </View>
      </SwipeDetector>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgcolor: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E9EDF0",
  },

  container3: {
    alignItems: "right",
    marginLeft: 74,
    marginTop: 135,
  },

  container2: {
    marginTop: 30,
    fontFamily: "SFUIText-Bold",
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "bold",
    textAlign: "center",
  },

  container4: {
    marginTop: 30,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "center",
  },
});

export default OnBoardingScreen02;

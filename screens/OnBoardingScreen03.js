import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import SwipeDetector from "@/components/SwipeDetector";

const OnBoardingScreen03 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bgcolor}>
      <SwipeDetector
        onSwipe={(direction) => {
          if (direction === "left") {
            navigation.replace("OnBoarding04", { screen: "Home" });
          }
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.container3}>
            <Image
              source={require("@/assets/pics/OnBoardingPic03.png")}
              resizeMode="stretch"
              style={{ width: 275, height: 260 }}
            />
          </View>

          <Text style={styles.container2}>
            Smart Glasses pair with your device
          </Text>

          <Text style={styles.container4}>
            Allowing you to access information and notifications right in front
            of your eyes
          </Text>

          <Pressable
            onPress={() => {
              navigation.replace("OnBoarding04", { screen: "Home" });
            }}
          >
            <Image
              source={require("@/assets/pics/OnBoardingSwipe02.png")}
              style={{
                // opacity: pressed ? 0.8 : 1,
                marginTop: 20,
              }}
            />
          </Pressable>
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
    alignItems: "center",
    marginTop: 230,
  },

  container2: {
    marginTop: 80,
    textAlign: "center",
    fontFamily: "SFUIText-Bold",
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "bold",
  },

  container4: {
    marginTop: 30,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "center",
    width: "60%",
  },
});

export default OnBoardingScreen03;

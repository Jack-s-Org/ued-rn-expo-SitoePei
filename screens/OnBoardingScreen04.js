import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import SwipeDetector from "@/components/SwipeDetector";

const OnBoardingScreen04 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bgcolor}>
      <SwipeDetector
        onSwipe={(direction) => {
          if (direction === "left") {
            navigation.replace("OnBoarding05", { screen: "Home" });
          }
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.container3}>
            <Image source={require("@/assets/pics/OnBoardingPic04.png")} />
          </View>

          {/* <Image
        source={require("../pics/OnBoardingPic01.png")}
        styles={{ width: 381.82, height: 477.06 }}
      /> */}

          <Text style={styles.container2}>Assignment Score</Text>

          <Text style={styles.container4}>
            Can help students track their progress and performance on various
            assignments
          </Text>

          <Pressable
            onPress={() => {
              navigation.replace("OnBoarding05", { screen: "Home" });
            }}
          >
            <Image
              source={require("@/assets/pics/OnBoardingSwipe03.png")}
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
    marginTop: 120,
  },

  container2: {
    marginTop: 20,
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
    width: "70%",
  },
});

export default OnBoardingScreen04;

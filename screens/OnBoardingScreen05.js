import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const OnBoardingScreen05 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bgcolor}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.container3}>
          <Image
            source={require("@/assets/pics/OnBoardingPic05.png")}
            resizeMode="stretch"
            style={{ width: 430, height: 580 }}
          />
        </View>

        {/* <Image
        source={require("../pics/OnBoardingPic01.png")}
        styles={{ width: 381.82, height: 477.06 }}
      /> */}

        <Text style={styles.container2}>Collaborate with other artists</Text>

        <Text style={styles.container4}>
          Share ideas, exchange feedback, and work together seamlessly to
          produce high-quality music that reflects the diversity of talent
          within the music industry
        </Text>

        <Pressable
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        >
          <Image
            source={require("@/assets/pics/get-started-button.png")}
            style={{
              // opacity: pressed ? 0.8 : 1,
              marginTop: 0,
            }}
          />
        </Pressable>
      </View>
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
    marginTop: 50,
  },

  container2: {
    marginTop: -135,
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

export default OnBoardingScreen05;

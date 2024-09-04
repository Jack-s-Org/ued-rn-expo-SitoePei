import {
  Text,
  // Button,
  StyleSheet,
  Image,
  View,
  Pressable,
  // Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bgcolor}>
      {/* <SafeAreaView style={styles.container}></SafeAreaView> */}

      <Text style={styles.container}>Welcome to</Text>
      <Text style={styles.container2}>GarageBand</Text>

      <View style={styles.container3}>
        <Image source={require("@/assets/pics/OnBoardingPic01.png")} />
      </View>

      {/* <Image
        source={require("../pics/OnBoardingPic01.png")}
        styles={{ width: 381.82, height: 477.06 }}
      /> */}

      <Text style={styles.container4}>
        Music is not a piece of paper where you just put down the notes. It's an
        expression of your soul, your emotions.
      </Text>

      <Pressable
        onPress={() => {
          // Alert.alert("I'm impressed!");
          navigation.replace("OnBoarding02", { screen: "Home" });
        }}
      >
        <Image
          source={require("@/assets/pics/get-started-button.png")}
          style={{
            // opacity: pressed ? 0.8 : 1,
            marginTop: 20,
            marginLeft: 110,
          }}
        />
      </Pressable>

      {/* <Button
        title="Sign In"
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgcolor: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E9EDF0",
  },

  container: {
    alignItems: "left",
    marginLeft: 30,
    marginTop: 30,
    fontFamily: "SFUIText-Regular",
    fontSize: 24,
    color: "#5A5A5A",
  },

  container2: {
    alignItems: "left",
    marginLeft: 30,
    fontFamily: "SFUIText-Bold",
    fontSize: 24,
    color: "#FF9500",
    fontWeight: "bold",
  },

  container3: {
    alignItems: "right",
    marginLeft: 74,
    marginTop: 80,
  },

  container4: {
    alignItems: "center",
    marginLeft: 62,
    marginTop: 30,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "center",
    width: "72%",
  },
});

export default SignInScreen;

import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyCameraView from "@/components/MyCameraView";
import React, { useRef, useEffect, useState } from "react";

const CameraScreen = ({ navigation }) => {
  const slideAnim = useRef(new Animated.Value(300)).current; // Starts off-screen (300 is arbitrary)
  const [isVisible, setIsVisible] = useState("auto");

  const slideUp = () => {
    setIsVisible(true); // Make it visible before sliding up
    Animated.timing(slideAnim, {
      toValue: 50, // Slide to the bottom of the screen (view's final position)
      duration: 500, // Adjust duration to make it smoother or faster
      useNativeDriver: true, // Better performance
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slideAnim, {
      toValue: 500, // Move it back off-screen
      duration: 500,
      useNativeDriver: true,
    }).start(() => setIsVisible(false)); // Hide it after sliding down
  };

  useEffect(() => {
    slideUp(); // Automatically slide up when the component mounts
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MyCameraView />
      <Pressable
        onPress={() => {
          navigation.replace("Main");
        }}
      >
        <View style={styles.backButton}>
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode="stretch"
            source={require("@/assets/pics/BackButton.png")}
          />
        </View>
      </Pressable>
      <View style={styles.flash}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
          source={require("@/assets/pics/FlashIcon.png")}
        />
      </View>

      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 620,
            width: 250,
            marginLeft: 90,
          },
        ]}
      >
        <Text style={styles.text1}>TIC</Text>
        <Text style={styles.text2}>VIDEO</Text>
        <TouchableOpacity onPress={slideUp}>
          <Text style={styles.text3}>LIVE RECORD</Text>
        </TouchableOpacity>
        <Text style={styles.text4}>PHOTO</Text>
      </View>

      {isVisible && (
        <Animated.View
          style={[
            styles.messageBox,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={styles.smartGlassesText}>
            Pair your Smart Glasses to start the brand new experience.
          </Text>

          <Text style={styles.smartGlassesTextNumber2}>1.</Text>
          <Text style={styles.smartGlassesText2}>
            First of all, make sure your smart glasses are charged and turned
            on.
          </Text>

          <Text style={styles.smartGlassesTextNumber3}>2.</Text>
          <Text style={styles.smartGlassesText3}>
            Secondly, make sure your phone device have Bluetooth on for pairing
            the smart device.
          </Text>

          <Text style={styles.smartGlassesTextNumber4}>3.</Text>
          <Text style={styles.smartGlassesText4}>
            Tap ‘Done’ once you’ve completed the steps above.
          </Text>
          <TouchableOpacity onPress={slideDown}>
            <Image
              source={require("@/assets/pics/DoneButton.png")}
              style={{
                width: 100,
                height: 80,
                marginTop: 10,
              }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  backButton: {
    marginLeft: 30,
    width: 40,
    height: 40,
  },
  flash: {
    marginLeft: 375,
    marginTop: -30,
    width: 20,
    height: 26,
  },
  text1: {
    fontFamily: "SFUIText-Light",
    fontSize: 12,
    color: "#FBFBFC",
    fontStyle: "light",
    fontWeight: "300",
  },
  text2: {
    fontFamily: "SFUIText-Light",
    fontSize: 12,
    color: "#FBFBFC",
    fontStyle: "light",
    fontWeight: "300",
  },
  text3: {
    fontFamily: "SFUIText-Light",
    fontSize: 12,
    color: "#FBFBFC",
    fontStyle: "light",
    fontWeight: "300",
  },
  text4: {
    fontFamily: "SFUIText-Light",
    fontSize: 12,
    color: "#FBFBFC",
    fontStyle: "light",
    fontWeight: "300",
  },
  smartGlassesText: {
    marginTop: -10,
    textAlign: "center",
    fontFamily: "SFUIText-Bold",
    fontSize: 18,
    color: "#5A5A5A",
    fontWeight: "bold",
    width: 300,
  },
  smartGlassesText2: {
    fontFamily: "SFUIText-Regular",
    fontSize: 16,
    color: "#5A5A5A",
    marginTop: -20,
    width: "75%",
    marginLeft: 40,
  },
  smartGlassesText3: {
    fontFamily: "SFUIText-Regular",
    fontSize: 16,
    color: "#5A5A5A",
    marginTop: -20,
    width: "75%",
    marginLeft: 40,
  },
  smartGlassesText4: {
    fontFamily: "SFUIText-Regular",
    fontSize: 16,
    color: "#5A5A5A",
    marginTop: -20,
    width: "75%",
    marginLeft: 40,
  },
  smartGlassesTextNumber2: {
    fontFamily: "SFUIText-Regular",
    fontSize: 16,
    color: "#5A5A5A",
    marginTop: 20,
    width: "75%",
  },
  smartGlassesTextNumber3: {
    fontFamily: "SFUIText-Regular",
    fontSize: 16,
    color: "#5A5A5A",
    marginTop: 20,
    width: "75%",
  },
  smartGlassesTextNumber4: {
    fontFamily: "SFUIText-Regular",
    fontSize: 16,
    color: "#5A5A5A",
    marginTop: 20,
    width: "75%",
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 450,
    backgroundColor: "#ECF0F1",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default CameraScreen;

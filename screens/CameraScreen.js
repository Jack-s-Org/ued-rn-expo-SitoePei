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
  const slideAnim2 = useRef(new Animated.Value(500)).current; // Starts off-screen (300 is arbitrary)
  const [isVisible, setIsVisible] = useState("auto");

  const [bluetooth, setBluetooth] = useState(false);

  const slideUp = () => {
    setIsVisible(true); // Make it visible before sliding up
    Animated.timing(slideAnim, {
      toValue: 10, // Slide to the bottom of the screen (view's final position)
      duration: 500, // Adjust duration to make it smoother or faster
      useNativeDriver: true, // Better performance
    }).start();
  };

  const slideUp2 = () => {
    console.log("hello");
    setIsVisible(true); // Make it visible before sliding up
    Animated.timing(slideAnim2, {
      toValue: 10, // Slide to the bottom of the screen (view's final position)
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

  const slideDown2 = () => {
    Animated.timing(slideAnim2, {
      toValue: 500, // Move it back off-screen
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setBluetooth(true);
    }); // Hide it after sliding down
  };

  useEffect(() => {
    slideUp(); // Automatically slide up when the component mounts
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MyCameraView />

      <View style={styles.backButton}>
        <Pressable
          onPress={() => {
            navigation.replace("Main");
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            resizeMode="stretch"
            source={require("@/assets/pics/BackButton.png")}
          />
        </Pressable>
        <Image
          style={{ width: 25, height: 35 }}
          resizeMode="stretch"
          source={require("@/assets/pics/FlashIcon.png")}
        />
      </View>

      {bluetooth ? (
        <View
          style={{
            width: 180,
            height: 60,
            alignSelf: "center",
            marginTop: 360,
            opacity: 0,
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode="stretch"
            source={require("@/assets/pics/SmartGlassesButton.png")}
          />
        </View>
      ) : (
        <Pressable onPress={slideUp2}>
          <View
            style={{
              width: 180,
              height: 60,
              alignSelf: "center",
              marginTop: 360,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="stretch"
              source={require("@/assets/pics/SmartGlassesButton.png")}
            />
          </View>
        </Pressable>
      )}

      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 200,
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
            styles.messageBox2,
            { transform: [{ translateY: slideAnim2 }] },
          ]}
        >
          <View style={{ justifyContent: "space-between", height: "75%" }}>
            <View
              style={{
                alignItems: "center",
                rowGap: 28,
              }}
            >
              <Image
                style={{ width: 35, height: 50 }}
                resizeMode="stretch"
                source={require("@/assets/pics/SmartDeviceIcon.png")}
              />

              <View>
                <Text style={styles.bluetoothText}>
                  Choose a device to be managed by
                  <Text style={styles.bluetoothText2}> GarageBand</Text>
                </Text>

                <TouchableOpacity onPress={slideDown2}>
                  <View
                    style={{
                      flexDirection: "row",
                      columnGap: 12,
                      marginLeft: 10,
                    }}
                  >
                    <Image
                      style={{ width: 14, height: 24 }}
                      resizeMode="stretch"
                      source={require("@/assets/pics/Bluetooth.png")}
                    />
                    <Text style={styles.bluetoothText3}>RB Meta 0010</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={slideDown2}>
              <Text style={styles.bluetoothText4}> Don't allow</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
      <Animated.View
        style={[styles.messageBox, { transform: [{ translateY: slideAnim }] }]}
      >
        <Text style={styles.smartGlassesText}>
          Pair your Smart Glasses to start the brand new experience.
        </Text>

        <Text style={styles.smartGlassesTextNumber2}>1.</Text>
        <Text style={styles.smartGlassesText2}>
          First of all, make sure your smart glasses are charged and turned on.
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  backButton: {
    width: 358,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "auto",
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
  bluetoothText: {
    textAlign: "left",
    fontFamily: "SFUIText-Regular",
    fontSize: 16,
    color: "#5A5A5A",
    marginBottom: 50,
    width: 250,
  },
  bluetoothText2: {
    textAlign: "left",
    fontFamily: "SFUIText-Bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF9500",
    marginBottom: 50,
    width: 250,
  },
  bluetoothText3: {
    fontFamily: "SFUIText-Regular",
    fontSize: 16,
    color: "#5A5A5A",
  },
  bluetoothText4: {
    textAlign: "center",
    fontFamily: "SFUIText-Bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF9500",
    width: 250,
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

  messageBox2: {
    position: "absolute",
    bottom: 0,
    left: 18,
    right: 0,
    height: 450,
    backgroundColor: "#ECF0F1",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: 394,
  },
});

export default CameraScreen;

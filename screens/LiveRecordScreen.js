import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LiveRecordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bgcolor}>
      <Pressable
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      >
        <View style={styles.backButton}>
          <Image source={require("@/assets/pics/BackButton.png")} />
        </View>
      </Pressable>

      <Text style={styles.container}>Live Instruments Recorder</Text>
      <Text style={styles.container2}>
        Tap and record the audio and it will auto categorize the tracks after
        using it
      </Text>

      <View style={styles.container3}>
        <Image source={require("@/assets/pics/OnBoardingPic03.png")} />
      </View>

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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgcolor: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E9EDF0",
  },

  backButton: {
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: -28,
  },

  container: {
    alignItems: "left",
    marginLeft: 30,
    marginTop: 30,
    fontFamily: "SFUIText-Bold",
    fontWeight: "bold",
    fontSize: 16,
    color: "#5A5A5A",
  },

  container2: {
    alignItems: "left",
    marginTop: 12,
    marginLeft: 30,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    width: "72%",
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

export default LiveRecordScreen;

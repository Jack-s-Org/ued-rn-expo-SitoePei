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
          <Image
            source={require("@/assets/pics/BackButton.png")}
            resizeMode="stretch"
            style={{ width: 40, height: 40 }}
          />
        </View>
      </Pressable>

      <Text style={styles.container}>Live Instruments Recorder</Text>
      <Text style={styles.container2}>
        Tap and record the audio and it will auto categorize the tracks after
        using it
      </Text>

      <View style={styles.container3}>
        <Image source={require("@/assets/pics/SoundWave.png")} />
      </View>

      <Text style={styles.container4}>2 : 16</Text>

      <Pressable
        onPress={() => {
          // navigation.replace("OnBoarding02", { screen: "Home" });
        }}
      >
        <Image
          source={require("@/assets/pics/PlayButton.png")}
          style={{
            marginLeft: 155,
          }}
        />
      </Pressable>

      <View style={styles.bin}>
        <Image source={require("@/assets/pics/RubbishButton.png")} />
      </View>
      <View style={styles.stopButton}>
        <Image source={require("@/assets/pics/StopButton.png")} />
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

  backButton: {
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 45,
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
    alignItems: "center",
    marginTop: 110,
  },

  container4: {
    alignItems: "center",
    marginTop: 142,
    fontFamily: "SFUIText-Bold",
    fontWeight: "bold",
    fontSize: 40,
    color: "#5A5A5A",
    textAlign: "center",
  },

  bin: {
    marginTop: 30,
    marginLeft: 75,
    marginBottom: 2,
  },

  stopButton: {
    marginTop: -65,
    marginLeft: 305,
    marginBottom: 40,
  },
});

export default LiveRecordScreen;

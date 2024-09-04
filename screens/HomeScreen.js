import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  const [activeLane, setActiveLane] = useState("lane1");
  return (
    <ImageBackground
      source={require("@/assets/pics/HomeBg.png")}
      style={styles.image}
    >
      <View style={styles.header}>
        <Image source={require("@/assets/pics/BgHeader.png")} />
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <Image source={require("@/assets/pics/MenuIcon.png")} />
        </View>
        <View style={styles.icon}>
          <Image source={require("@/assets/pics/ToolsIcon.png")} />
        </View>
        <View style={styles.icon}>
          <Image source={require("@/assets/pics/RecordIcon.png")} />
        </View>
        <View style={styles.icon}>
          <Image source={require("@/assets/pics/BackwardIcon.png")} />
        </View>
        <View style={styles.icon}>
          <Image source={require("@/assets/pics/PlayIcon.png")} />
        </View>
        <View style={styles.icon}>
          <Image source={require("@/assets/pics/BackIcon.png")} />
        </View>
        <View style={styles.icon}>
          <Image source={require("@/assets/pics/NextIcon.png")} />
        </View>
      </View>

      <View style={styles.timeline}>
        <Image source={require("@/assets/pics/Timeline.png")} />
      </View>
      <View style={styles.timeline}>
        <Image source={require("@/assets/pics/SliderBar.png")} />
      </View>

      <View style={styles.musicContainer}>
        <Image source={require("@/assets/pics/YellowContainer.png")} />
      </View>
      <View style={styles.musicContainer2}>
        <Image source={require("@/assets/pics/RedContainer.png")} />
      </View>
      <View style={styles.musicContainer3}>
        <Image source={require("@/assets/pics/BlueContainer.png")} />
      </View>

      <Pressable
        onPress={() => {
          setActiveLane("lane1");
        }}
      >
        <View style={styles.pianoSelection}>
          <Image
            source={
              activeLane === "lane1"
                ? require("@/assets/pics/PianoSelection.png")
                : require("@/assets/pics/PianoSelectionOff.png")
            }
          />
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          setActiveLane("lane2");
        }}
      >
        <View style={styles.violinSelection}>
          <Image
            source={
              activeLane === "lane2"
                ? require("@/assets/pics/ViolinSelectionOn.png")
                : require("@/assets/pics/ViolinSelection.png")
            }
          />
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          setActiveLane("lane3");
        }}
      >
        <View style={styles.drumSelection}>
          <Image
            source={
              activeLane === "lane3"
                ? require("@/assets/pics/DrumSelectionOn.png")
                : require("@/assets/pics/DrumSelection.png")
            }
          />
        </View>
      </Pressable>

      <View style={styles.string}>
        <Image source={require("@/assets/pics/TrackString.png")} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    resizeMode: "cover",
    width: 432,
    height: 932,
  },
  text: {
    color: "white",
    fontSize: 42,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-start",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginRight: 40,
    marginLeft: 0,
    marginTop: -15,
  },
  icon: {
    width: 62,
    borderRadius: 12,
    marginTop: -90,
    marginRight: -20,
  },
  timeline: {
    marginTop: 2,
    marginLeft: 77,
  },
  musicContainer: {
    marginTop: 36,
    marginLeft: 77,
  },
  musicContainer2: {
    marginTop: 1,
    marginLeft: 197,
  },
  musicContainer3: {
    marginTop: 1,
    marginLeft: 77,
  },
  pianoSelection: {
    marginTop: -218,
  },
  violinSelection: {
    marginTop: -145,
  },
  drumSelection: {
    marginTop: -72,
  },
  string: {
    marginTop: -290,
    marginLeft: 194,
  },
});

export default HomeScreen;

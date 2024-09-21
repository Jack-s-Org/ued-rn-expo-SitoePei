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
          <Image
            source={require("@/assets/pics/MenuIcon.png")}
            resizeMode="stretch"
            style={styles.ImgeButton}
          />
          <Image
            source={require("@/assets/pics/ToolsIcon.png")}
            resizeMode="stretch"
            style={styles.ImgeButton}
          />
          <Image
            source={require("@/assets/pics/RecordIcon.png")}
            resizeMode="stretch"
            style={styles.ImgeButton}
          />
          <Image
            source={require("@/assets/pics/BackwardIcon.png")}
            resizeMode="stretch"
            style={styles.ImgeButton}
          />
          <Image
            source={require("@/assets/pics/BackwardIcon.png")}
            resizeMode="stretch"
            style={styles.ImgeButton}
          />
          <Image
            source={require("@/assets/pics/PlayIcon.png")}
            resizeMode="stretch"
            style={styles.ImgeButton}
          />
          <Image
            source={require("@/assets/pics/BackIcon.png")}
            resizeMode="stretch"
            style={styles.ImgeButton}
          />
          <Image
            source={require("@/assets/pics/NextIcon.png")}
            resizeMode="stretch"
            style={styles.ImgeButton}
          />
        </View>
      </View>

      <View style={styles.timeline}>
        <Image
          source={require("@/assets/pics/Timeline.png")}
          style={{
            width: 353,
            height: 17,
          }}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.timeline}>
        <Image
          source={require("@/assets/pics/SliderBar.png")}
          style={{
            width: 241,
            height: 10,
          }}
          resizeMode="stretch"
        />
      </View>

      <View style={styles.musicContainer}>
        <Image
          source={require("@/assets/pics/YellowContainer.png")}
          style={{
            width: 120,
            height: 72,
          }}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.musicContainer2}>
        <Image
          source={require("@/assets/pics/RedContainer.png")}
          style={{
            width: 123,
            height: 72,
          }}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.musicContainer3}>
        <Image
          source={require("@/assets/pics/BlueContainer.png")}
          style={{
            width: 71,
            height: 72,
          }}
          resizeMode="stretch"
        />
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
            style={{
              width: 77,
              height: 72,
            }}
            resizeMode="stretch"
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
            style={{
              width: 77,
              height: 72,
            }}
            resizeMode="stretch"
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
            style={{
              width: 77,
              height: 72,
            }}
            resizeMode="stretch"
          />
        </View>
      </Pressable>

      <View style={styles.string}>
        <Image
          source={require("@/assets/pics/TrackString.png")}
          style={{
            width: 7,
            height: 800,
          }}
          resizeMode="stretch"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ImgeButton: {
    width: "22%",
    aspectRatio: 1,
    marginHorizontal: 0,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
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
    marginLeft: 0,
    marginTop: -15,
  },
  icon: {
    width: "100%",
    borderRadius: 12,
    marginTop: -90,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-evenly",
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

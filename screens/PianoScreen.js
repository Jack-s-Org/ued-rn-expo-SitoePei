import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Piano from "../components/Piano";

const PianoScreen = ({ navigation }) => {
  const [activeLane, setActiveLane] = useState("lane4");
  return (
    <ImageBackground
      source={require("@/assets/pics/HomeBg02.png")}
      style={styles.image}
    >
      <View style={styles.header}>
        <Image source={require("@/assets/pics/BgHeader.png")} />

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
      </View>

      <View style={styles.timeline}>
        <Image
          source={require("@/assets/pics/Timeline.png")}
          resizeMode="stretch"
          style={{ width: 351, height: 17 }}
        />
      </View>
      <View style={styles.timeline}>
        <Image
          source={require("@/assets/pics/SliderBar.png")}
          resizeMode="stretch"
          style={{ width: 241, height: 10 }}
        />
      </View>

      <View style={styles.musicContainer}>
        <Image
          source={require("@/assets/pics/YellowContainer.png")}
          resizeMode="stretch"
          style={{ width: 120, height: 72 }}
        />
      </View>
      <View style={styles.musicContainer2}>
        <Image
          source={require("@/assets/pics/RedContainer.png")}
          resizeMode="stretch"
          style={{ width: 123, height: 72 }}
        />
      </View>
      <View style={styles.musicContainer3}>
        <Image
          source={require("@/assets/pics/BlueContainer.png")}
          resizeMode="stretch"
          style={{ width: 71, height: 72 }}
        />
      </View>
      <View style={styles.musicContainer4}>
        <Image source={require("@/assets/pics/PurpleContainer.png")} />
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
            resizeMode="stretch"
            style={{ width: 77, height: 72 }}
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
            resizeMode="stretch"
            style={{ width: 77, height: 72 }}
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
            resizeMode="stretch"
            style={{ width: 77, height: 72 }}
          />
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          setActiveLane("lane4");
        }}
      >
        <View style={styles.pianoSelection02}>
          <Image
            source={
              activeLane === "lane4"
                ? require("@/assets/pics/PianoSelection.png")
                : require("@/assets/pics/PianoSelectionOff.png")
            }
            resizeMode="stretch"
            style={{ width: 77, height: 72 }}
          />
        </View>
      </Pressable>

      <View style={styles.string}>
        <Image
          source={require("@/assets/pics/TrackString.png")}
          resizeMode="stretch"
          style={{ width: 7, height: 800 }}
        />
      </View>

      <View style={styles.piano}>
        <Piano></Piano>
      </View>

      <View
        style={{
          width: "100%",
          height: 95,
          backgroundColor: "#FF9500",
          position: "absolute",
          bottom: 255,
          rowGap: 16,
          paddingVertical: 16,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        >
          <View style={styles.whiteCloseButton}>
            <Image source={require("@/assets/pics/WhiteCloseButton.png")} />
          </View>
        </Pressable>

        <View style={styles.menuBar}>
          <View style={styles.instrumentType}>
            <Image source={require("@/assets/pics/InstrumentType.png")} />
            <Image source={require("@/assets/pics/LeftArrow.png")} />
            <Image source={require("@/assets/pics/RightArrow.png")} />
          </View>

          <View>
            <Image source={require("@/assets/pics/EffectsButton.png")} />
          </View>
        </View>
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
  musicContainer4: {
    marginTop: 1,
    marginLeft: 250,
  },
  pianoSelection: {
    marginTop: -291,
  },
  violinSelection: {
    marginTop: -218,
  },
  drumSelection: {
    marginTop: -145,
  },
  pianoSelection02: {
    marginTop: -71,
  },
  string: {
    marginTop: -364,
    marginLeft: 247,
  },
  piano: {
    marginTop: -256,
    height: 1,
  },
  pianoBox: {
    marginTop: -93,
  },
  instrumentType: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 16,
  },
  menuBar: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 25,
    width: "100%",
    alignItems: "center",
  },
  whiteCloseButton: {
    marginLeft: 22,
  },
});

export default PianoScreen;

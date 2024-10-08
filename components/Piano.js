import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import A_Note from "@/assets/audio/A.mp3";
import As_Note from "@/assets/audio/As.mp3";
import B_Note from "@/assets/audio/B.mp3";
import C_Note from "@/assets/audio/C.mp3";
import Cs_Note from "@/assets/audio/Cs.mp3";
import D_Note from "@/assets/audio/D.mp3";
import Ds_Note from "@/assets/audio/Ds.mp3";
import E_Note from "@/assets/audio/E.mp3";
import F_Note from "@/assets/audio/F.mp3";
import Fs_Note from "@/assets/audio/Fs.mp3";
import G_Note from "@/assets/audio/G.mp3";
import Gs_Note from "@/assets/audio/Gs.mp3";
import { Audio } from "expo-av";

// import Sound from 'react-native-sound';
const playSound = async (snd) => {
  const { sound } = await Audio.Sound.createAsync(snd);
  await sound.playAsync();
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // backgroundColor
    this.state = {
      colorC: "white",
      colorCs: "black",
      colorD: "white",
      colorDs: "black",
      colorE: "white",
      colorF: "white",
      colorFs: "black",
      colorG: "white",
      colorGs: "black",
      colorA: "white",
      colorAs: "black",
      colorB: "white",
    };

    // // preload sounds
    // this.sound = {};
    // const soundList = [ "C", "Cs", "D", "Ds", "E", "F", "Fs", "G", "Gs", "A", "As", "B" ]
    // soundList.forEach(note => {
    //   this.sound[note] = new Sound( note + ".mp3", Sound.MAIN_BUNDLE, error => {
    //     if ( error ) {
    //       console.log("failed to load the sound.", error);
    //     }
    //   })
    // });
  }

  stroke(note) {
    // change backgroundColor
    switch (note) {
      case "C":
        this.setState({ colorC: "rgba(1, 1, 1, 0.1)" });
        playSound(C_Note);
        break;
      case "Cs":
        this.setState({ colorCs: "rgba(0, 0, 0, 0.5)" });
        playSound(Cs_Note);
        break;
      case "D":
        this.setState({ colorD: "rgba(1, 1, 1, 0.1)" });
        playSound(D_Note);
        break;
      case "Ds":
        this.setState({ colorDs: "rgba(0, 0, 0, 0.5)" });
        playSound(Ds_Note);
        break;
      case "E":
        this.setState({ colorE: "rgba(1, 1, 1, 0.1)" });
        playSound(E_Note);
        break;
      case "F":
        this.setState({ colorF: "rgba(1, 1, 1, 0.1)" });
        playSound(F_Note);
        break;
      case "Fs":
        this.setState({ colorFs: "rgba(0, 0, 0, 0.5)" });
        playSound(Fs_Note);
        break;
      case "G":
        this.setState({ colorG: "rgba(1, 1, 1, 0.1)" });
        playSound(G_Note);
        break;
      case "Gs":
        this.setState({ colorGs: "rgba(0, 0, 0, 0.5)" });
        playSound(Gs_Note);
        break;
      case "A":
        this.setState({ colorA: "rgba(1, 1, 1, 0.1)" });
        playSound(A_Note);
        break;
      case "As":
        this.setState({ colorAs: "rgba(0, 0, 0, 0.5)" });
        playSound(As_Note);
        break;
      case "B":
        this.setState({ colorB: "rgba(1, 1, 1, 0.1)" });
        playSound(B_Note);
        break;
    }

    // // play sound
    // setTimeout( () => {
    //   this.sound[note].play(success => {
    //     if ( success ) {
    //       console.log("successfully finished playing.");
    //     } else {
    //       console.log("failed to play the sound.");
    //     }
    //   });
    // }, 1);
  }
  stop(note) {
    // change backgroundColor
    switch (note) {
      case "C":
        this.setState({ colorC: "white" });
        break;
      case "Cs":
        this.setState({ colorCs: "black" });
        break;
      case "D":
        this.setState({ colorD: "white" });
        break;
      case "Ds":
        this.setState({ colorDs: "black" });
        break;
      case "E":
        this.setState({ colorE: "white" });
        break;
      case "F":
        this.setState({ colorF: "white" });
        break;
      case "Fs":
        this.setState({ colorFs: "black" });
        break;
      case "G":
        this.setState({ colorG: "white" });
        break;
      case "Gs":
        this.setState({ colorGs: "black" });
        break;
      case "A":
        this.setState({ colorA: "white" });
        break;
      case "As":
        this.setState({ colorAs: "black" });
        break;
      case "B":
        this.setState({ colorB: "white" });
        break;
    }

    // // stop sound
    // setTimeout( () => {
    //   // gradually decrease the volume
    //   for (let i=0; i<2000; i++) {
    //     this.sound[note].setVolume( 1.0-i/2000. );
    //   }
    //   this.sound[note].stop();
    //   this.sound[note].setVolume( 1.0 );
    // }, 1 )
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View
              onTouchStart={() => this.stroke("C")}
              onTouchEnd={() => this.stop("C")}
              style={styles.pianoWhiteKey}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/pics/CBottomWhiteKey.png")}
                resizeMode="stretch"
              />
            </View>

            <View
              onTouchStart={() => this.stroke("D")}
              onTouchEnd={() => this.stop("D")}
              style={styles.pianoWhiteKey}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/pics/DBottomWhiteKey.png")}
                resizeMode="stretch"
              />
            </View>
            <View
              onTouchStart={() => this.stroke("E")}
              onTouchEnd={() => this.stop("E")}
              style={styles.pianoWhiteKey}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/pics/EBottomWhiteKey.png")}
                resizeMode="stretch"
              />
            </View>
            <View
              onTouchStart={() => this.stroke("F")}
              onTouchEnd={() => this.stop("F")}
              style={styles.pianoWhiteKey}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/pics/FBottomWhiteKey.png")}
                resizeMode="stretch"
              />
            </View>
            <View
              onTouchStart={() => this.stroke("G")}
              onTouchEnd={() => this.stop("G")}
              style={styles.pianoWhiteKey}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/pics/GBottomWhiteKey.png")}
                resizeMode="stretch"
              />
            </View>
            <View
              onTouchStart={() => this.stroke("A")}
              onTouchEnd={() => this.stop("A")}
              style={styles.pianoWhiteKey}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/pics/ABottomWhiteKey.png")}
                resizeMode="stretch"
              />
            </View>
            <View
              onTouchStart={() => this.stroke("B")}
              onTouchEnd={() => this.stop("B")}
              style={styles.pianoWhiteKey}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/pics/BBottomWhiteKey.png")}
                resizeMode="stretch"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              paddingHorizontal: "5.2%",
              position: "absolute",
            }}
          >
            <View
              onTouchStart={() => this.stroke("Cs")}
              onTouchEnd={() => this.stop("Cs")}
              style={
                {
                  // backgroundColor: this.state.colorCs,
                  // height: 100,
                  // width: 32,
                  // borderTopWidth: 1,
                  // borderLeftWidth: 1,
                }
              }
            >
              <Image source={require("@/assets/pics/PianoSharpKey.png")} />
            </View>

            <View
              onTouchStart={() => this.stroke("Ds")}
              onTouchEnd={() => this.stop("Ds")}
              style={
                {
                  // backgroundColor: this.state.colorDs,
                  // height: 100,
                  // width: 32,
                  // borderTopWidth: 1,
                  // borderLeftWidth: 1,
                }
              }
            >
              <Image source={require("@/assets/pics/PianoSharpKey.png")} />
            </View>

            <View
              onTouchStart={() => this.stroke("Ds")}
              onTouchEnd={() => this.stop("Ds")}
              style={{
                opacity: 0,
              }}
            >
              <Image source={require("@/assets/pics/PianoSharpKey.png")} />
            </View>

            <View
              onTouchStart={() => this.stroke("Fs")}
              onTouchEnd={() => this.stop("Fs")}
              style={
                {
                  // backgroundColor: this.state.colorFs,
                  // height: 100,
                  // width: 32,
                  // borderTopWidth: 1,
                }
              }
            >
              <Image source={require("@/assets/pics/PianoSharpKey.png")} />
            </View>

            <View
              onTouchStart={() => this.stroke("Gs")}
              onTouchEnd={() => this.stop("Gs")}
              style={
                {
                  // backgroundColor: this.state.colorGs,
                  // height: 100,
                  // width: 32,
                  // borderTopWidth: 1,
                }
              }
            >
              <Image source={require("@/assets/pics/PianoSharpKey.png")} />
            </View>

            <View
              onTouchStart={() => this.stroke("As")}
              onTouchEnd={() => this.stop("As")}
              style={
                {
                  // backgroundColor: this.state.colorAs,
                  // height: 100,
                  // width: 32,
                  // borderTopWidth: 1,
                }
              }
            >
              <Image source={require("@/assets/pics/PianoSharpKey.png")} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 258,
  },
  pianoWhiteKey: {
    width: "14.285%",
    height: "100%",
  },
});

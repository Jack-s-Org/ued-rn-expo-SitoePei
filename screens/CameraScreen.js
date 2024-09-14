import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyCameraView from "@/components/MyCameraView";

const CameraScreen = ({ navigation }) => {
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
      <Text style={styles.container1}>TIC VIDEO LIVE RECORD PHOTO</Text>
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
  container1: {
    marginTop: 620,
    fontFamily: "SFUIText-Light",
    fontSize: 12,
    color: "#FBFBFC",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "center",
  },
});

export default CameraScreen;

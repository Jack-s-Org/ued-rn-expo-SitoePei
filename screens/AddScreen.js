import { Text, Pressable, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      >
        <View style={styles.closeIcon}>
          <Image
            source={require("@/assets/pics/CloseButtonIcon.png")}
            style={{
              width: 24,
              height: 24,
            }}
            resizeMode="stretch"
          />
        </View>
      </Pressable>

      <Text style={styles.container1}>Instruments</Text>
      <Text style={styles.container2}>
        Merge several tracks to compose a song.
      </Text>

      <View style={styles.container3}>
        <Pressable
          onPress={() => {
            navigation.replace("LiveRecordScreen");
          }}
        >
          <Image
            source={require("@/assets/pics/LiveInstrumentRecord.png")}
            style={{ width: 205, height: 125, marginLeft: 18 }}
          />
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.replace("KeyboardScreen");
          }}
        >
          <Image
            source={require("@/assets/pics/Keyboard.png")}
            style={{ width: 205, height: 125, marginLeft: -18 }}
          />
        </Pressable>

        <Image
          source={require("@/assets/pics/Drums.png")}
          style={styles.image}
        />
        <Image source={require("@/assets/pics/Amp.png")} style={styles.image} />
        <Image
          source={require("@/assets/pics/Strings.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/pics/Bass.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/pics/Guitar.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/pics/World.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/pics/External.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/pics/SoundLibrary.png")}
          style={styles.image}
        />
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

  closeIcon: {
    alignItems: "flex-end",
    marginRight: 30,
    marginTop: -10,
  },

  container1: {
    textAlign: "center",
    fontFamily: "SFUIText-Bold",
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginTop: 30,
  },

  container2: {
    marginTop: 10,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "center",
  },

  container3: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: -20,
    marginTop: 25,
  },

  image: {
    width: "46%", // Slightly less than 50% to reduce spacing
    height: 125,
    marginBottom: -2, // Space between rows
    marginRight: -20,
  },
});
export default AddScreen;

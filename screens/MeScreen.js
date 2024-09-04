import { StyleSheet, Text, Pressable, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bgcolor}>
      <Pressable
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      >
        <View style={styles.container2}>
          <Image source={require("@/assets/pics/CloseButtonIcon.png")} />
        </View>
      </Pressable>

      <Text style={styles.container3}>Collaborators</Text>

      <View style={styles.container4}>
        <Image
          source={require("@/assets/pics/InviteUserIcon01.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/pics/InviteUserIcon02.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/pics/InviteUserIcon03.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.container5}>
        <Image source={require("@/assets/pics/InvitePagePic01.png")} />
      </View>

      <Text style={styles.container6}>Collaborate with other artists</Text>
      <Text style={styles.container7}>
        Feel free to invite anyone to join your projects, because two people can
        work together more harmoniously, making it twice as enjoyable!
      </Text>

      <Pressable
        onPress={() => {
          navigation.replace("InvitePage", { screen: "Home" });
        }}
      >
        <Image
          source={require("@/assets/pics/PlusInviteButton.png")}
          style={{
            marginTop: 20,
            marginLeft: 160,
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

  container2: {
    alignItems: "flex-end",
    marginRight: 30,
    marginTop: -200,
  },

  container3: {
    textAlign: "left",
    fontFamily: "SFUIText-Bold",
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: -140,
  },

  container4: {
    flexDirection: "row", // Aligns images in a row
    justifyContent: "flex-start", // Aligns images tightly to the start
    alignItems: "center", // Aligns images vertically in the center
  },

  image: {
    width: 100, // Image width
    height: 100, // Image height
    marginRight: -24, // Reduce space between images
  },

  container5: {
    alignItems: "center",
    marginTop: 20,
  },

  container6: {
    textAlign: "center",
    fontFamily: "SFUIText-Bold",
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginTop: 40,
  },

  container7: {
    marginTop: 30,
    marginLeft: 98,
    fontFamily: "SFUIText-Light",
    fontSize: 12,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "center",
    width: "55%",
  },
});

export default MeScreen;

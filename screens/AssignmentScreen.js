import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AssignmentScreen = ({ navigation }) => {
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

      <Text style={styles.container2}>Assignment Score</Text>
      <Text style={styles.container3}>
        View your score and check how similarly it is with your teacher
      </Text>

      <ImageBackground
        source={require("@/assets/pics/AssignmentPageContainer01.png")}
        style={styles.assignmentScore}
        imageStyle={{ borderRadius: 10 }}
      >
        <Text style={styles.sectionTitle}>Weekly Assignment Score</Text>
        <View style={styles.scoreContainer}>
          <View style={styles.bar}>
            <Image source={require("@/assets/pics/Bar01.png")} />
          </View>
          <View style={styles.bar}>
            <Image source={require("@/assets/pics/Bar02.png")} />
          </View>
          <View style={styles.bar}>
            <Image source={require("@/assets/pics/Bar03.png")} />
          </View>
          <View style={styles.bar}>
            <Image source={require("@/assets/pics/Bar04.png")} />
          </View>
          <View style={styles.bar}>
            <Image source={require("@/assets/pics/Bar05.png")} />
          </View>
        </View>
        <View style={styles.scoreDate}>
          <View style={styles.barDate}>
            <Text style={styles.barText}>14/6</Text>
          </View>
          <View style={styles.barDate}>
            <Text style={styles.barText}>15/6</Text>
          </View>
          <View style={styles.barDate}>
            <Text style={styles.barText}>16/6</Text>
          </View>
          <View style={styles.barDate}>
            <Text style={styles.barText}>17/6</Text>
          </View>
          <View style={styles.barDate}>
            <Text style={styles.barText}>Today</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Videos and Problem */}
      <View style={styles.row}>
        <ImageBackground
          source={require("@/assets/pics/AssignmentPageContainer02.png")}
          style={styles.box}
          imageStyle={{ borderRadius: 10 }}
        >
          <Image
            source={require("@/assets/pics/PlayingPiano.png")}
            style={styles.thumbnail}
          />
          <Text style={styles.boxTitle02}>Videos</Text>
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/pics/AssignmentPageContainer03.png")}
          style={styles.box}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.boxTitle03}>Problem</Text>
          <View style={styles.verticalContainer}>
            <View style={styles.bar02}>
              <Image
                source={require("@/assets/pics/ProblemBar01.png")}
                style={{ width: 170, height: 68 }}
              />
            </View>
            <View style={styles.bar02}>
              <Image
                source={require("@/assets/pics/ProblemBar02.png")}
                style={{ width: 170, height: 68 }}
              />
            </View>
          </View>

          <Text style={styles.problemText}>The piano part is quite low</Text>
          <Text style={styles.problemText02}>
            The tempo of the music is off a little
          </Text>
        </ImageBackground>
      </View>

      {/* Skills and Recent Project */}
      <View style={styles.row}>
        <ImageBackground
          source={require("@/assets/pics/AssignmentPageContainer04.png")}
          style={styles.box}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.skills}>
            <Image source={require("@/assets/pics/Skills.png")} />
          </View>
          <Text style={styles.skillsText}>60%</Text>
          <Text style={styles.boxTitle}>Skills</Text>
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/pics/AssignmentPageContainer05.png")}
          style={styles.box}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.boxTitle04}>Recent Project</Text>
          <View style={styles.verticalContainer02}>
            <View style={styles.bar03}>
              <Image
                source={require("@/assets/pics/ProblemBar03.png")}
                style={{ width: 170, height: 68 }}
              />
            </View>
            <View style={styles.bar03}>
              <Image
                source={require("@/assets/pics/ProblemBar04.png")}
                style={{ width: 170, height: 68 }}
              />
            </View>
          </View>
          <Text style={styles.projectText}>Making Ringtone</Text>
          <Text style={styles.projectText02}>BGM</Text>
        </ImageBackground>
      </View>

      {/* <ScrollView style={styles.container}>
      </ScrollView> */}
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
  },

  container2: {
    textAlign: "left",
    fontFamily: "SFUIText-Bold",
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 20,
  },

  container3: {
    marginTop: 10,
    marginLeft: 30,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "left",
    width: "70%",
  },

  container: {
    flex: 1,
    backgroundColor: "#E9EDF0",
    padding: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "SFUIText-Bold",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#5A5A5A", // To make sure the text is visible on the image background
    marginTop: 20,
    marginLeft: 30,
  },
  assignmentScore: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 0,
    height: 260,
    marginTop: 10,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginRight: 30,
    marginLeft: 20,
  },
  scoreDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginRight: 40,
    marginLeft: -6,
    marginTop: 8,
  },
  verticalContainer: {
    flexDirection: "column", // Change from "row" to "column" to stack vertically
    justifyContent: "space-between",
    alignItems: "center", // Align the bars to the center
    marginRight: 25,
    marginLeft: -65,
    marginTop: 45,
  },

  verticalContainer02: {
    flexDirection: "column", // Change from "row" to "column" to stack vertically
    justifyContent: "space-between",
    alignItems: "center", // Align the bars to the center
    marginRight: 25,
    marginLeft: -110,
    marginTop: 45,
  },

  bar: {
    width: 62,
    borderRadius: 12,
    marginTop: -10,
  },
  barDate: {
    marginTop: -10,
  },
  bar02: {
    width: 62,
    borderRadius: 12,
    marginTop: -4,
  },
  bar03: {
    width: 62,
    borderRadius: 12,
    marginTop: -4,
  },
  row: {
    flexDirection: "row",
    marginBottom: -4,
    marginTop: -6,
  },
  box: {
    borderRadius: 10,
    padding: 4,
    flexDirection: "row", // Aligns images in a row
    justifyContent: "flex-start", // Aligns images tightly to the start
    alignItems: "center", // Aligns images vertically in the center
    width: 228, // Image width
    height: 205, // Image height
    marginRight: -27, // Reduce space between images
  },
  thumbnail: {
    width: "75%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 40,
    marginLeft: 27,
  },
  boxTitle: {
    fontFamily: "SFUIText-Bold",
    fontSize: 14,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginTop: 100,
    marginLeft: -43,
  },
  boxTitle02: {
    fontFamily: "SFUIText-Bold",
    fontSize: 14,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginTop: -130,
    marginLeft: -150,
  },
  boxTitle03: {
    fontFamily: "SFUIText-Bold",
    fontSize: 14,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginTop: -125,
    marginLeft: 30,
  },
  boxTitle04: {
    fontFamily: "SFUIText-Bold",
    fontSize: 14,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginTop: -125,
    marginLeft: 33,
  },
  skills: {
    marginLeft: 20,
  },
  skillsText: {
    fontFamily: "SFUIText-Bold",
    fontSize: 20,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginLeft: -105,
  },
  problemText: {
    fontFamily: "SFUIText-Regular",
    fontSize: 12,
    color: "#fff",
    marginTop: -30,
    marginLeft: -75,
    width: "60%",
  },
  problemText02: {
    fontFamily: "SFUIText-Regular",
    fontSize: 12,
    color: "#fff",
    marginTop: 95,
    marginLeft: -125,
    width: "60%",
  },
  projectText: {
    fontFamily: "SFUIText-Regular",
    fontSize: 12,
    color: "#fff",
    marginTop: -45,
    marginLeft: -73,
  },
  projectText02: {
    fontFamily: "SFUIText-Regular",
    fontSize: 12,
    color: "#fff",
    marginTop: 85,
    marginLeft: -96,
  },

  barText: {
    marginTop: -8,
    marginLeft: 50,
    fontFamily: "SFUIText-Regular",
    fontSize: 10,
    color: "#5A5A5A",
  },
  barText02: {
    marginTop: -12,
    marginLeft: 120,
    fontFamily: "SFUIText-Regular",
    fontSize: 10,
    color: "#5A5A5A",
  },
  barText03: {
    marginTop: -12,
    marginLeft: 190,
    fontFamily: "SFUIText-Regular",
    fontSize: 10,
    color: "#5A5A5A",
  },
  barText04: {
    marginTop: -12,
    marginLeft: 260,
    fontFamily: "SFUIText-Regular",
    fontSize: 10,
    color: "#5A5A5A",
  },
  barText05: {
    marginTop: -12,
    marginLeft: 330,
    fontFamily: "SFUIText-Regular",
    fontSize: 10,
    color: "#5A5A5A",
  },
});

export default AssignmentScreen;

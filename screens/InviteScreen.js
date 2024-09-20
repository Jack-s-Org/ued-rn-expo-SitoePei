import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

const InviteScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.bgcolor}>
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

      <Text style={styles.container1}>Share via link</Text>

      <Text style={styles.container2}>
        Anyone with this link can instantly join and edit your project.
      </Text>

      <Pressable
        onPress={() => {
          // navigation.replace("Main", { screen: "Home" });
        }}
      >
        <Image
          source={require("@/assets/pics/CopyLinkButton.png")}
          style={{
            marginTop: 0,
            marginLeft: 10,
            width: 145,
            height: 80,
          }}
          resizeMode="stretch"
        />
      </Pressable>

      <Text style={styles.container3}>Add people</Text>

      <Text style={styles.container4}>
        These individuals can participate and modify your project.
      </Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter names or email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <Pressable
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      >
        <Image
          source={require("@/assets/pics/TickInviteLinkButton.png")}
          style={{
            marginTop: 0,
            marginLeft: 10,
            width: 134,
            height: 80,
          }}
          resizeMode="stretch"
        />
      </Pressable>

      <View style={styles.container5}>
        <Image
          source={require("@/assets/pics/InvitePagePic02.png")}
          style={{
            width: 333,
            height: 400,
          }}
          resizeMode="stretch"
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
    marginTop: 55,
  },

  container1: {
    marginTop: 60,
    textAlign: "left",
    fontFamily: "SFUIText-Bold",
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginLeft: 30,
  },

  container2: {
    marginTop: 20,
    marginLeft: 30,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "left",
    width: "70%",
  },

  container3: {
    marginTop: 40,
    textAlign: "left",
    fontFamily: "SFUIText-Bold",
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "bold",
    marginLeft: 30,
  },

  container4: {
    marginTop: 20,
    marginLeft: 30,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#5A5A5A",
    fontStyle: "light",
    fontWeight: "300",
    textAlign: "left",
    width: "80%",
  },

  container5: {
    lignItems: "right",
    marginLeft: 97,
    marginBottom: 35,
  },

  input: {
    height: 29,
    width: 314,
    borderColor: "#7F7F7F",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#E9EDF0",
    marginLeft: 30,
    marginTop: 20,
    fontFamily: "SFUIText-Light",
    fontSize: 14,
    color: "#7F7F7F",
    fontStyle: "light",
    fontWeight: "300",
  },
});

export default InviteScreen;

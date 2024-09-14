import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  StatusBar,
} from "react-native";
export default function App() {
  const [facing, setFacing] = useState("back");
  const [picture, setPicture] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    await cameraRef.current.takePictureAsync({
      onPictureSaved: (picture) => {
        setPicture(picture);
      },
    });
  }

  return (
    <View style={styles.bg}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        {/* Whatever in here will be overlay on top of the camera view */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleCameraFacing}>
            <Image
              style={styles.button}
              resizeMode="contain"
              source={require("@/assets/pics/FlipCamera.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <Image
              style={styles.button02}
              resizeMode="contain"
              source={require("@/assets/pics/SnapButton.png")}
            />
          </TouchableOpacity>
        </View>
        {/* Remove the following if you don't need to show photo taken */}
        {picture && (
          <Image
            source={{ uri: picture.uri }}
            style={{
              position: "absolute",
              bottom: 63,
              left: 45,
              width: 55,
              height: 55,
              borderRadius: 1000,
            }}
          />
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#2F2F30",
    paddingHorizontal: 18,
    paddingTop: 85,
    width: "100%",
    height: "120%",
    position: "absolute",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    position: "relative",
    height: 780,
    marginTop: 30,
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    position: "absolute",
    marginLeft: 236,
    marginTop: 599,
    width: 55,
    height: 55,
  },
  button02: {
    flex: 1,
    // alignSelf: "flex-end",
    alignItems: "center",
    marginTop: 580,
    position: "absolute",
    marginLeft: 92,
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

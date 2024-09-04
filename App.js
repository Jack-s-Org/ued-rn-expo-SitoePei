import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";
import SwipeDetector from "./components/SwipeDetector";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Icon = createIconSetFromIcoMoon(
  require("./assets/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon.ttf"),
    "SFUIText-Regular": require("./assets/font/SFUIText-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // return <OnBoarding />;
  // return <RootNavigator />;

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );

  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView>
  //       {/* <Icon name="back-button" size={50} color="orange" />
  //       <Text style={{ fontFamily: "icomoon", fontSize: 36 }}>Hello</Text> */}
  //       {/* <VideoPlayer /> */}
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}

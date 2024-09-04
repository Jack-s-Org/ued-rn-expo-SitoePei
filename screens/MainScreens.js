import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./AssignmentScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import { Image } from "react-native";
import AddTrackNavigator from "./AddTrackNavigator";
import AssignmentScreen from "./AssignmentScreen";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF9500",
        tabBarInactiveTintColor: "#FF9500",
        tabBarBackground: () => (
          <Image
            source={require("@/assets/pics/NavBar.png")}
            resizeMode="cover"
            style={{ width: "100%", marginTop: -40 }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("@/assets/pics/HomeIcon.png")
                  : require("@/assets/pics/HomeOutlineIcon.png")
              }
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "HOME",
        }}
      />

      <Tab.Screen
        name="Assignment"
        component={AssignmentScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("@/assets/pics/AssignmentIcon.png")
                  : require("@/assets/pics/AssignmentOutlineIcon.png")
              }
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "ASSIGNMENT",
        }}
      />

      <Tab.Screen
        name="AddTab"
        component={AddTrackNavigator} // this is a workaround to show a full screen when this tab is pressed
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/pics/AddIcon.png")}
              size={36}
              color={color}
            />
            // <Ionicons name="add" size={36} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("@/assets/pics/CameraIcon.png")
                  : require("@/assets/pics/CameraOutlineIcon.png")
              }
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "CAMERA",
          // tabBarBadge: unreadCount,
        }}
        listeners={{
          tabPress: () => {
            setUnreadCount(null);
          },
        }}
      />

      <Tab.Screen
        name="SettingsDrawer"
        component={MeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("@/assets/pics/InviteIcon.png")
                  : require("@/assets/pics/InviteOutlineIcon.png")
              }
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "INVITE",
        }}
      />
    </Tab.Navigator>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;

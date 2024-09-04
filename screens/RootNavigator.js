import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import OnBoardingScreen02 from "./OnBoardingScreen02";
import OnBoardingScreen03 from "./OnBoardingScreen03";
import OnBoardingScreen04 from "./OnBoardingScreen04";
import OnBoardingScreen05 from "./OnBoardingScreen05";
import InviteScreen from "./InviteScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="OnBoarding02" component={OnBoardingScreen02} />
        <Stack.Screen name="OnBoarding03" component={OnBoardingScreen03} />
        <Stack.Screen name="OnBoarding04" component={OnBoardingScreen04} />
        <Stack.Screen name="OnBoarding05" component={OnBoardingScreen05} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="InvitePage" component={InviteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddScreen from "./AddScreen";
import LiveRecordScreen from "./LiveRecordScreen";

const Stack = createNativeStackNavigator();

const AddTrackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddScreen" component={AddScreen} />
      <Stack.Screen name="LiveRecordScreen" component={LiveRecordScreen} />
    </Stack.Navigator>
  );
};

export default AddTrackNavigator;

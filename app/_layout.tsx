import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { RootStackParamList } from "src/core/types/Types";
import DevicesScreen from "./devices";
import HomeScreen from "./index";
import LightingScreen from "./lighting";
import CreateLightSceneScreen from "./setting_screens/create_lightscene";
import EditSceneScreen from "./setting_screens/edit_lightscene";
import OptionsScreen from "./setting_screens/options";

const Stack = createStackNavigator<RootStackParamList>();

export default function Layout() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // remove default headers
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter, // slide-from-right animation
        transitionSpec: {
          open: { animation: "timing", config: { duration: 250 } },  // push duration 500ms
          close: { animation: "timing", config: { duration: 250 } }, // pop duration 500ms
        },
        gestureEnabled: false, // swipe back gestures
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lighting" component={LightingScreen} />
      <Stack.Screen name="Devices" component={DevicesScreen} />

      {/* Settings / create screens */}
      <Stack.Screen name="Options" component={OptionsScreen} />
      <Stack.Screen name="CreateScene" component={CreateLightSceneScreen}/>
      <Stack.Screen name="EditScene" component={EditSceneScreen}/>
    </Stack.Navigator>
  );
}
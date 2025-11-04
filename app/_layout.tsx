import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { RootStackParamList } from "src/core/types/types";
import DevicesScreen from "./devices";
import HomeScreen from "./index";
import LightingScreen from "./lighting";
import CreateLightSceneScreen from "./setting_screens/create_lightscene";
import OptionsScreen from "./setting_screens/options";

const Stack = createStackNavigator<RootStackParamList>();

export default function Layout() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // remove default headers
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // slide-from-right animation
        transitionSpec: {
          open: { animation: "timing", config: { duration: 200 } },  // push duration 500ms
          close: { animation: "timing", config: { duration: 200 } }, // pop duration 500ms
        },
        gestureEnabled: true, // swipe back gestures
      }}
    >
      {/* Main screens */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Lighting" component={LightingScreen} />
      <Stack.Screen name="Devices" component={DevicesScreen} />

      {/* Settings / create screens */}
      <Stack.Screen name="Options" component={OptionsScreen} />
      <Stack.Screen
        name="CreateScene"
        component={CreateLightSceneScreen}
      />
    </Stack.Navigator>
  );
}
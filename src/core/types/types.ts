import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";

export type RootStackParamList = {
  Home: undefined;
  Lighting: undefined;
  Devices: undefined;
  Options: undefined;
  CreateScene: undefined;
};

export type WeightedScreen = FC & {
    weight?: number;
}

export type NavigationProp = StackNavigationProp<RootStackParamList>;

export type LightScenePayload = {
    brightness: number;
    color: string;
}

export type LightSceneTileWithLoad = {
    id: string;
    title: string;
    devices?: number;
    icon: React.ElementType;
    onPress: () => void;
    payload?: LightScenePayload;
    blank: boolean;
}

export type MainMenuTile = {
    id: string,
    title: string;
    icon: React.ElementType;
    onPress: () => void;
    blank: boolean;
}
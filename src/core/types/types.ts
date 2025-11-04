import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";
import { ViewStyle } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Lighting: undefined;
  Devices: undefined;
  Options: undefined;
  CreateScene: undefined;
};

export type TileCardT = {
    id: string;
    title: string;
    icon: React.ElementType;
    devices?: number;
    onPress?: () => void;
    style?: ViewStyle | ViewStyle[];
    blank: boolean;
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
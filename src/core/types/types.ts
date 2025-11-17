import { StackNavigationProp } from "@react-navigation/stack";
import { FC } from "react";
import { ViewStyle } from "react-native";

export type RootStackParamList = {
    Home: undefined;
    Lighting: undefined;
    Devices: undefined;
    Options: undefined;
    CreateScene: undefined;
    EditScene: { tile: LightSceneTileWithLoad };
};

export type TileCardT = {
    id: string;
    title: string;
    icon: string;
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

export type FancyTextBoxT = {
    onTextChange: (text: string) => void;
    title: string;
}

export type LightSceneTileWithLoad = {
    id: string;
    title: string;
    devices?: number;
    onPress?: () => void;
    icon: string;
    payload?: LightScenePayload;
    style?: ViewStyle | ViewStyle[];
    blank: boolean;
}
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";

export type RootStackParamList = {
  Home: undefined;
  Lighting: undefined;
  Devices: undefined;
  Options: undefined;
  CreateScene: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
export const navigation = useNavigation<NavigationProp>();

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
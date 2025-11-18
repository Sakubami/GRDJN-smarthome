import { useNavigation } from "@react-navigation/native";
import * as Icons from "lucide-react-native";
import { LightSceneTileWithLoad, NavigationProp } from "./types/Types";

export function iconToString(icon: React.ElementType) {   
    const name = (icon as any).displayName ?? (icon as any).name ?? "home";
    return name;
}

export function iconFromString(icon: string) {
  const key = Object.keys(Icons).find(
    (k) => k.toLowerCase() === icon.toLowerCase()
  );
  return key ? (Icons as any)[key] : Icons.HelpCircle;
}

export function editScene(scene: LightSceneTileWithLoad) {
    const navigation = useNavigation<NavigationProp>();

    navigation.navigate("CreateScene")
    const stuff = scene.title;
}
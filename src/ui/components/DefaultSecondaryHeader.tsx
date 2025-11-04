import { useNavigation } from "@react-navigation/native";
import { usePathname } from "expo-router";
import { Home, Lightbulb, SatelliteDish } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { NavigationProp, RootStackParamList } from "src/core/types/types";
import MenuButton from "./MenuButton";

export default function DefaultSecondaryHeader() {
    const pathname = usePathname();
    const navigation = useNavigation<NavigationProp>();
    const handleChangeScreen = (path: keyof RootStackParamList) => {
        if (path in ({} as RootStackParamList)) return;
        navigation.navigate(path)
    }

    return (
        <View style={Styles.header} pointerEvents="box-none">
            <MenuButton onPress={() => {handleChangeScreen("Home"); console.log(pathname)}} icon={Home}/>
            <MenuButton onPress={() => handleChangeScreen("Lighting")} icon={Lightbulb}/>
            <MenuButton onPress={() => handleChangeScreen("Devices")} icon={SatelliteDish}/>
        </View>
    );
}

const Styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: "#fff",
  },
})
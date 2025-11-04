import { navigation, RootStackParamList } from "@/core/types/types";
import CLickIcon from "@/ui/components/ClickIcon";
import { usePathname } from "expo-router";
import { Home, Lightbulb, SatelliteDish } from "lucide-react-native";
import { StyleSheet, View } from "react-native";

export default function DefaultSecondaryHeader() {
    const pathname = usePathname();
  
    const handleChangeScreen = (path: keyof RootStackParamList) => {
        if (path in ({} as RootStackParamList)) return;
        navigation.navigate(path)
    }

    return (
        <View style={Styles.header} pointerEvents="box-none">
            <CLickIcon onPress={() => handleChangeScreen("Home")} icon={Home}/>
            <CLickIcon onPress={() => handleChangeScreen("Lighting")} icon={Lightbulb}/>
            <CLickIcon onPress={() => handleChangeScreen("Devices")} icon={SatelliteDish}/>
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
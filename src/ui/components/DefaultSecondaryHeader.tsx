import { useNavigation, usePathname } from "expo-router";
import { Home, Lightbulb, SatelliteDish } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { NavigationProp, RootStackParamList } from "src/core/types/types";
import CLickIcon from "src/ui/components/ClickIcon";

export default function DefaultSecondaryHeader() {
    const pathname = usePathname();
    const navigation = useNavigation<NavigationProp>();
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
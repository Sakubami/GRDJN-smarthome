import CLickIcon from "@/ui/components/ClickIcon";
import { router, usePathname } from "expo-router";
import { Home, Lightbulb, SatelliteDish } from "lucide-react-native";
import { StyleSheet, View } from "react-native";

export default function DefaultSecondaryHeader() {
    const pathname = usePathname();

    const handleChangeScreen = (path: string) => {
        if (pathname === path) return;
        router.push(path);
    }

    return (
        <View style={Styles.header} pointerEvents="box-none">
            <CLickIcon onPress={() => handleChangeScreen("/")} icon={Home}/>
            <CLickIcon onPress={() => handleChangeScreen("/lighting")} icon={Lightbulb}/>
            <CLickIcon onPress={() => handleChangeScreen("/devices")} icon={SatelliteDish}/>
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
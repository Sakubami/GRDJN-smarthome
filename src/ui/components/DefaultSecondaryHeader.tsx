import { useNavigation, useRoute } from "@react-navigation/native";
import { Home, Lightbulb, SatelliteDish } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { NavigationProp } from "src/core/types/Types";
import MenuButton from "./MenuButton";

export default function DefaultSecondaryHeader() {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute();

    return (
        <View style={Styles.header} pointerEvents="box-none">
            <MenuButton onPress={() => {route.name !== "Home" && navigation.replace("Home")}} icon={Home}/>
            <MenuButton onPress={() => {route.name !== "Lighting" && navigation.replace("Lighting")}} icon={Lightbulb}/>
            <MenuButton onPress={() => {route.name !== "Devices" && navigation.replace("Devices")}} icon={SatelliteDish}/>
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
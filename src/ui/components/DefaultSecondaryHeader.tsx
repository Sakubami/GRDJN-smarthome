import MenuButton from "@/ui/components/ClickIcon";
import { Home } from "lucide-react-native";
import { StyleSheet, View } from "react-native";

type Props = {
}

export default function DefaultSecondaryHeader() {
    return (
        <View style={Styles.header} pointerEvents="box-none">
            <MenuButton onPress={() => console.log("stuff made here")} icon={Home}/>
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
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
})
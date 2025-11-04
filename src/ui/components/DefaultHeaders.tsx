import { useNavigation } from "@react-navigation/native";
import { usePathname } from "expo-router";
import { ArrowBigLeft } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationProp } from "src/core/types/types";
import CLickIcon from "src/ui/components/ClickIcon";

type Props = {
    headerTitle?: string;
    createSeparation: boolean;
}

export default function DefaultHeader({ headerTitle, createSeparation } : Props ) {
  const pathname = usePathname();
  const list = ["/Home", "/Devices", "/Lighting", "/"]
  const isDefaultScreen = list.includes(pathname);
  const navigation = useNavigation<NavigationProp>();

    return(
        <View style={Styles.header} pointerEvents="box-none">
            <Text style={Styles.headerTitle} pointerEvents="none">{headerTitle}</Text>
            {!isDefaultScreen && <CLickIcon onPress={() => navigation.goBack()} icon={ArrowBigLeft}/>}
            {createSeparation && <View style={[Styles.divider, {position: "relative", bottom: -29}]}/>}
        </View>
    );
}

const Styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 58,
    backgroundColor: "#fff"
  },
  headerTitle: { fontSize: 20, fontWeight: "600", textAlign: "center", left: 0, right: 0, position: "absolute"},
  divider: {
    height: 1.5,
    backgroundColor: "#000",
    width: "100%",
    marginVertical: 2,
    alignSelf: "center",
    opacity: 0.2
  }
})
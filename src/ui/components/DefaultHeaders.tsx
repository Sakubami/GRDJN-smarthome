import CLickIcon from "@/ui/components/ClickIcon";
import { useNavigation, usePathname } from "expo-router";
import { ArrowBigLeft } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    headerTitle?: string;
}

export default function DefaultHeader({ headerTitle } : Props ) {
  const pathname = usePathname();
  const navigation = useNavigation();
  const isHomeScreen = pathname === "/";

    return(
        <View style={Styles.header} pointerEvents="box-none">
            <Text style={Styles.headerTitle} pointerEvents="none">{headerTitle}</Text>
            {!isHomeScreen && <CLickIcon onPress={() => navigation.goBack} icon={ArrowBigLeft}/>}
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
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  headerTitle: { fontSize: 20, fontWeight: "600", textAlign: "center", left: 0, right: 0, position: "absolute"}
})
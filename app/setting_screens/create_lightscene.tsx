import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pen, Rocket } from "lucide-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addHomeTile } from "src/core/lighting/StorageManager";
import { TileCardT } from "src/core/types/Types";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import MenuButton from "src/ui/components/MenuButton";

export default function Options() {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Lichtszene Erstellen" createSeparation={false}/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <View style={Styles.tilesGrid}>
                    <MenuButton icon={Pen} onPress={async () => {
                        const newTile: Omit<TileCardT, "id"> = {
                            title: "new tile",
                            icon: Rocket,
                            blank: false
                        }
                        await addHomeTile(newTile);
                            const before = await AsyncStorage.getItem("home");
                            console.log("Before:", before);

                            // add tile manually
                            const test = { id: "1", title: "new tile", blank: false, icon: Rocket };
                            const current = before ? JSON.parse(before) : [];
                            await AsyncStorage.setItem("home", JSON.stringify([...current, test]));

                            // read again
                            const after = await AsyncStorage.getItem("home");
                            console.log("After:", after);
                    }}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
  tilesContainer: { padding: 12 },
  tilesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
})
import { Pen, Rocket } from "lucide-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addHomeTile } from "src/core/lighting/StorageManager";
import { TileCardT } from "src/core/types/types";
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
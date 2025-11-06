import { Pen } from "lucide-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addSceneTile } from "src/core/lighting/StorageManager";
import { LightSceneTileWithLoad } from "src/core/types/Types";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import MenuButton from "src/ui/components/MenuButton";

export default function CreateScene() {
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Lichtszene Erstellen" createSeparation={false}/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <View style={Styles.tilesGrid}>
                    <MenuButton icon={Pen} onPress={async () => {
                        const newTile: Omit<LightSceneTileWithLoad, "id"> = {
                            title: "test",
                            icon: "Rocket",
                            blank: false,
                            onPress: () => console.log("IM BEING PRESSED!!!")
                        }
                        await addSceneTile(newTile);
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
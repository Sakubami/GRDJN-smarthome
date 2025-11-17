import { RouteProp, useRoute } from "@react-navigation/native";
import { Pen } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { updateSceneTile } from "src/core/lighting/StorageManager";
import { LightSceneTileWithLoad, RootStackParamList } from "src/core/types/Types";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import FancyTextBox from "src/ui/components/FancyTextBox";
import MenuButton from "src/ui/components/MenuButton";
import Toast from "src/ui/components/Toast";

type EditSceneRouteProp = RouteProp<RootStackParamList, 'EditScene'>;

export default function EditScene() {
    const [tileTitle, setTileTitle] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [showToast1, setShowToast1] = useState(false);
    const route = useRoute<EditSceneRouteProp>();
    const { tile } = route.params;

    const handleSave = async () => {
        if(!tileTitle.trim()) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
            return;
        }

        const newTile: LightSceneTileWithLoad = {
          title: tileTitle,
          icon: tile.icon,
          blank: tile.blank,
          id: tile.id
        }
        await updateSceneTile(newTile);

        setTileTitle("");

        setShowToast1(true);
        setTimeout(() => setShowToast1(false), 2000);
    }

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Lichtszene Erstellen" createSeparation={false}/>
            {showToast && <Toast message={"Der Name kann nicht leer sein"}/>}
            {showToast1 && <Toast message={"Lichtszene gespeichert!"}/>}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
              <FancyTextBox onTextChange={setTileTitle} title={"this is a test"} placeholder={tile.title}/>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignContent: "center", padding: 10}}>
                    <MenuButton icon={Pen} onPress={handleSave}/>
                    <Text style={{color: "#000", margin: 3}}>Lichtszene speichern</Text>
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
  text: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    borderRadius: 8,
  },
  container: {
    marginVertical: 8
  }
})
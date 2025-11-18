import { FilePlusCorner } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { addSceneTile } from "src/core/lighting/StorageManager";
import { LightSceneTileWithLoad } from "src/core/types/Types";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import FancyTextBox from "src/ui/components/FancyTextBox";
import MenuButton from "src/ui/components/MenuButton";
import Toast from "src/ui/components/Toast";

export default function CreateScene() {
    const [tileIcon, setTileIcon] = useState("Rocket")
    const [tileTitle, setTileTitle] = useState("");
    const [isBlank, setIsBlank] = useState(false)
    const [showToast, setShowToast] = useState(false);
    const [showToast1, setShowToast1] = useState(false);

    const handleSave = async () => {
        if(!tileTitle.trim()) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
            return;
        }

        const newTile: Omit<LightSceneTileWithLoad, "id"> = {
          title: tileTitle,
          icon: tileIcon,
          blank: isBlank
        }

        await addSceneTile(newTile);

        setTileTitle("");

        setShowToast1(true);
        setTimeout(() => setShowToast1(false), 2000);
    }

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Lichtszene Erstellen" createSeparation={false}/>
            {showToast && <Toast message={"Der Name kann nicht leer sein"}/>}
            {showToast1 && <Toast message={"Lichtszene erstellt!"}/>}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <FancyTextBox onTextChange={setTileTitle} title={"Name"} placeholder={"Scene"}/>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignContent: "center", padding: 10}}>
                    <MenuButton icon={FilePlusCorner} onPress={handleSave}/>
                    <Text style={{color: "#000", margin: 3, fontWeight: 600}}>Lichtszene erstellen</Text>
                    <Text style={{color: "#000", marginRight: 132}}></Text>
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
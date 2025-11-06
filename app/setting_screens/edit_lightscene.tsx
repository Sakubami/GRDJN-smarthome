import { Pen } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { addHomeTile } from "src/core/lighting/StorageManager";
import { TileCardT } from "src/core/types/Types";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import MenuButton from "src/ui/components/MenuButton";
import Toast from "src/ui/components/Toast";

export default function EditScene() {
    const [tileTitle, setTileTitle] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [showToast1, setShowToast1] = useState(false);

    const handleSave = async () => {
        if(!tileTitle.trim()) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
            return;
        }

        const newTile: Omit<TileCardT, "id"> = {
            title: tileTitle,
            icon: "Paperclip",
            blank: false
        }
        await addHomeTile(newTile);

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
                <TextInput
                    value={tileTitle}
                    onChangeText={setTileTitle}
                    placeholder="Enter tile title"
                    style={Styles.text} />
                <MenuButton icon={Pen} onPress={handleSave}/>
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
  }
})
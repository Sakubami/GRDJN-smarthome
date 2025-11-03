import { DeviceStatus } from "@/core/devices/DeviceManager";
import DefaultHeader from "@/ui/components/DefaultHeaders";
import DefaultSecondaryHeader from "@/ui/components/DefaultSecondaryHeader";
import { router } from "expo-router";
import { Edit, Paperclip } from "lucide-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TileCard from "../src/ui/components/TileCard";

type Tile = {
    id: string;
    title: string;
    icon: React.ElementType;
    devices?: number;
    onPress: () => void;
    blank: boolean;
}

export default function Lighting() {
    const tiles: Tile[] = [
        {id: "1", title: "Erstellen", icon: Edit, onPress: () => router.push("/setting_screens/create_lightscene"), blank: true},
        {id: "2", title: "Server", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("2"), blank: false},
        {id: "3", title: "test 1", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("3"), blank: false},
        {id: "4", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("4"), blank: false},
        {id: "5", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("5"), blank: false},
    ]
     return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Light Scenes"/>
            <DefaultSecondaryHeader/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <View style={Styles.tilesGrid}>
                    {tiles.map((tile) => <TileCard key={tile.id} title={tile.title} icon={tile.icon} devices={tile.devices} style={{ width: "48%", marginBottom: 8 }} onPress={tile.onPress} blank={tile.blank}/> )}
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
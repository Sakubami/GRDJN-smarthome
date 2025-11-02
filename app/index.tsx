import { DeviceStatus } from "@/core/devices/DeviceManager";
import DefaultHeader from "@/ui/components/DefaultHeaders";
import { router } from "expo-router";
import { Home, Paperclip } from "lucide-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TileCard from "../src/ui/components/TileCard";

type Tile = {
    id: string;
    title: string;
    icon: React.ElementType;
    devices: number;
    onPress: () => void;
}

export default function Index() {
    const tiles: Tile[] = [
        {id: "1", title: "Lichter", icon: Home, devices: 3, onPress: () => router.push("/options")},
        {id: "2", title: "Server", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("2")},
        {id: "3", title: "test 1", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("3")},
        {id: "4", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("4")},
        {id: "5", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("5")},
        {id: "6", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("6")},
        {id: "7", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("7")},
        {id: "8", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("8")},
        {id: "9", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("9")},
        {id: "10", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("10")},
        
    ]
     return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#c0c0c0"}}>
            <DefaultHeader onPress={() => console.log("test1")} headerTitle="Home"/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <View style={Styles.tilesGrid}>
                    {tiles.map((tile) => <TileCard key={tile.id} title={tile.title} icon={tile.icon} devices={tile.devices} style={{ width: "48%", marginBottom: 8 }} onPress={tile.onPress} /> )}
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
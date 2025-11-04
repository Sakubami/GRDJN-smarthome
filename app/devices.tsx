import { useNavigation } from "expo-router";
import { Home, Paperclip } from "lucide-react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DeviceStatus } from "src/core/devices/DeviceManager";
import { NavigationProp } from "src/core/types/types";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import DefaultSecondaryHeader from "src/ui/components/DefaultSecondaryHeader";
import TileCard from "../src/ui/components/TileCard";

type Tile = {
    id: string;
    title: string;
    icon: React.ElementType;
    devices: number;
    onPress: () => void;
}

export default function Devices() {
    const tiles: Tile[] = [
        {id: "1", title: "Lichter", icon: Home, devices: 3, onPress: () => navigation.navigate("Options")},
        {id: "2", title: "Server", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("2")},
        {id: "3", title: "test 1", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("3")},
        {id: "4", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("4")},
        {id: "5", title: "test", icon: Paperclip, devices: 1, onPress: () => DeviceStatus("5")},
    ]
    const navigation = useNavigation<NavigationProp>();
     return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Geräte" createSeparation={true}/>
            <DefaultSecondaryHeader/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <View style={Styles.tilesGrid}>
                    {tiles.map((tile) => <TileCard key={tile.id} title={tile.title} icon={tile.icon} devices={tile.devices} style={{ width: "48%", marginBottom: 8 }} onPress={tile.onPress} blank={false}/> )}
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

import { useNavigation } from "@react-navigation/native";
import { Edit } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loadHomeTiles } from "src/core/lighting/StorageManager";
import { useBaseScreenControls } from "src/core/navigation/NavManager";
import { NavigationProp, TileCardT } from "src/core/types/types";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import DefaultSecondaryHeader from "src/ui/components/DefaultSecondaryHeader";
import { v4 as uuidv4 } from 'uuid';
import TileCard from "../src/ui/components/TileCard";

export default function Index() {
    useBaseScreenControls();
    
    const [tiles, setTiles] = useState<TileCardT[]>([]);
    const navigation = useNavigation<NavigationProp>();
    
    useEffect(() => {
        (async () => {
            const savedTiles = await loadHomeTiles();

            const tile_create: TileCardT = {
                id: uuidv4(),
                title: "Erstellen",
                icon: Edit,
                onPress: () => {
                    navigation.navigate("CreateScene");
                    console.log("testbecauseiwanttoseehowmuchicanexecutelol");
                },
                blank: true
            };

            setTiles([...savedTiles, tile_create]) 
        })();
    }, []);

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Home" createSeparation={true}/>
            <DefaultSecondaryHeader/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <View style={Styles.tilesGrid}>
                    {tiles.map((tile) => 
                        <TileCard 
                        id={tile.id}
                        key={tile.id}
                        title={tile.title} 
                        icon={tile.icon} 
                        devices={tile.devices} 
                        style={{ width: "48%", marginBottom: 8 }}
                        blank = {tile.blank}
                        onPress={tile.onPress}/> )}
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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from 'react-native-uuid';
import { loadScenes } from "src/core/lighting/StorageManager";
import { useBaseScreenControls } from "src/core/navigation/NavManager";
import { LightSceneTileWithLoad, NavigationProp } from "src/core/types/Types";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import DefaultSecondaryHeader from "src/ui/components/DefaultSecondaryHeader";
import TileCard from "src/ui/components/LightSceneTile";

export default function Lighting() {
    useBaseScreenControls();
    
    const [tiles, setTiles] = useState<LightSceneTileWithLoad[] | null >(null);
    const navigation = useNavigation<NavigationProp>();
    const [activeId, setActiveId] = useState<string | null>(null);

    const loadTiles = useCallback(async () => {
        const savedTiles = await loadScenes();
        const tilesWithOnPress = savedTiles.map(tile => ({...tile,
            onPress: () => {
                console.log("editing scene now");
                navigation.navigate("EditScene", { tile });
            }
        }));

        const tile_create: LightSceneTileWithLoad = {
            id: uuid.v4() as string,
            title: "Erstellen",
            icon: "Edit",
            onPress: () => {
                navigation.navigate("CreateScene");
                console.log("testbecauseiwanttoseehowmuchicanexecutelol");
            },
            blank: true
        };
        setTiles([...tilesWithOnPress, tile_create]);
    }, [navigation]);
    
    useFocusEffect(
        useCallback(() => {
            loadTiles();
        }, [loadTiles])
    );

    if (!tiles) return <View style={{ flex: 1, backgroundColor: "#e6e6e6" }} />;
    
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Lichtszenen" createSeparation={true}/>
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
                        onPress={tile.onPress}
                        isActive={activeId === tile.id}
                        onToggle={() => {
                            setActiveId(tile.id);
                            console.log("test");
                        }}/> )}
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
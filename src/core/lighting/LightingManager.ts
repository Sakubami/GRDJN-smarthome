import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuid } from "uuid";
import { LightSceneTileWithLoad } from "../types/types";

const KEY = "light_scenes"

export async function saveTiles( tiles: LightSceneTileWithLoad[]) {
    await AsyncStorage.setItem(KEY, JSON.stringify(tiles));
}

export async function loadTiles(): Promise<LightSceneTileWithLoad[]> {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
}

export async function addScene(newScene : Omit<LightSceneTileWithLoad, "id">) {
    const current = await loadTiles();
    const sceneWithId: LightSceneTileWithLoad = { id: uuid(), ...newScene }
    const updated = [...current, ]
}
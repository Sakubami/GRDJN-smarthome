import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import { LightSceneTileWithLoad, TileCardT } from "../types/Types";

const SCENE_KEY = "scenes"
const HOME_KEY = "home";

export async function saveScenes( tiles: LightSceneTileWithLoad[]) {
    await AsyncStorage.setItem(SCENE_KEY, JSON.stringify(tiles));
}

export async function saveHomeTiles( tiles: TileCardT[]) {
    await AsyncStorage.setItem(HOME_KEY, JSON.stringify(tiles));
}

export async function loadScenes(): Promise<LightSceneTileWithLoad[]> {
    const data = await AsyncStorage.getItem(SCENE_KEY);
    return data ? JSON.parse(data) : [];
}

export async function loadHomeTiles(): Promise<TileCardT[]> {
    const data = await AsyncStorage.getItem(HOME_KEY);
    return data ? JSON.parse(data) : [];
}

export async function addScene(newScene : Omit<LightSceneTileWithLoad, "id">) {
    const current = await loadScenes();
    const tileWithID: LightSceneTileWithLoad = {id: uuid.v4() as string, ...newScene }
    const updated = [...current, tileWithID];
    await saveScenes(updated);
}

export async function addHomeTile(tile: Omit<TileCardT, "id">) {
    const current = await loadHomeTiles();
    const tileWithID: TileCardT = {id: uuid.v4() as string, ...tile}
    const updated = [...current, tileWithID];
    await saveHomeTiles(updated);
}
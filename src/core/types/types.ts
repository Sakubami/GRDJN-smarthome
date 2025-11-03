export type LightScenePayload = {
    brightness: number;
    color: string;
}

export type LightSceneTileWithLoad = {
    id: string;
    title: string;
    devices: number;
    icon: React.ElementType;
    onPress: () => void;
    payload?: LightScenePayload;
    blank: boolean;
}
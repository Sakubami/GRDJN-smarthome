import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { iconFromString } from "src/core/Helpers";
import { LightSceneTileWithLoad, NavigationProp } from "src/core/types/Types";

export default function TileCard({ id, payload, title, icon, devices, onPress, style, blank}: LightSceneTileWithLoad) {
const Icon1 = iconFromString(icon);
const navigation = useNavigation<NavigationProp>();
const handlePress = !onPress || typeof onPress !== "function"
  ? () => {
      console.log("something")
    }
  : onPress;

  return (
    <Pressable style={[Styles.card, style]} onPress={handlePress}>
      <View style={Styles.cardHeader}>
        <Icon1 size={24} strokeWidth={1.5} margin={8}/>
        <Text style={Styles.title}>{title}</Text>
      </View>
        {!blank && (<View style={[Styles.divider, {position: "relative", top: 0}]}/>)}
        {devices !== undefined && <Text style={Styles.devices}>{devices} devices</Text>}
        {!blank && (<View style={[Styles.divider, {position: "relative", bottom: -5}]}/>)}
    </Pressable>
  );
}

const Styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff"
  },
  card: {
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    margin: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: "600", margin: 8 },
  devices: { fontSize: 12, color: "#888", marginTop: 4 },
  tileContainer: { position: "absolute", left: 8, top: 8},
  divider: {
    height: 1.5,
    backgroundColor: "#000",
    width: "100%",
    marginVertical: 2,
    alignSelf: "center",
    opacity: 0.2
  }
});
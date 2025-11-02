import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  title: string;
  icon: React.ElementType;
  devices?: number;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

export default function TileCard({ title, icon: Icon, devices, onPress, style}: Props) {
  return (
    <Pressable style={[Styles.card, style]} onPress={onPress}>
      <View style={Styles.cardHeader}>
        <Icon size={24} strokeWidth={1.5} margin={8}/>
        <Text style={Styles.title}>{title}</Text>
      </View>
        <View style={[Styles.divider, {position: "relative", top: 0}]}></View>
        {devices !== undefined && <Text style={Styles.devices}>{devices} devices</Text>}
        <View style={[Styles.divider, {position: "relative", bottom: -5}]}></View>
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
import DefaultHeader from "@/ui/components/DefaultHeaders";
import { NavigationContainer } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Options() {
    return (
        <NavigationContainer>
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Lichtszene Erstellen" createSeparation={false}/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <View style={Styles.tilesGrid}>
                    <Text> dustin ist cool lol</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        </NavigationContainer>
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
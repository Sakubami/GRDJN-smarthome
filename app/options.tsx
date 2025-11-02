import DefaultHeader from "@/ui/components/DefaultHeaders";
import DefaultSecondaryHeader from "@/ui/components/DefaultSecondaryHeader";
import { useNavigation } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Options() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex:1, backgroundColor:"#c0c0c0"}}>
            <DefaultHeader onPress={() => navigation.goBack} headerTitle="GeräteOptionen"/>
            <DefaultSecondaryHeader/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: 16}}>
                <View style={Styles.tilesGrid}>
                    <Text> dustin ist cool lol</Text>
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
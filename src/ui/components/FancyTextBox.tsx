import { StyleSheet, Text, TextInput, View } from "react-native";
import { FancyTextBoxT } from "src/core/types/Types";

export default function FancyTextBox({title, onTextChange, placeholder} : FancyTextBoxT) {
    return (
        <View style={{marginVertical: 8}}>
            <Text style={Styles.label}>{title}</Text>
            <TextInput
                style={Styles.input}
                placeholder={placeholder}
                placeholderTextColor="#000"
                onChangeText={onTextChange}
      />
        </View>
    );
}

const Styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
        marginBottom: 4,
        marginLeft: 11
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
});
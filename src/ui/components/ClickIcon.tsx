import { Pressable, StyleSheet } from "react-native";

type Props = {
    onPress?: () => void;
    icon: React.ElementType;
}

export default function MenuButton({ onPress, icon: Icon }: Props) {
    return(
        <Pressable style={Styles.button} onPress={onPress} hitSlop={10}>
            <Icon size={26} strokeWidth={1.5} />
        </Pressable>
    );
}

const Styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center"
    }
})
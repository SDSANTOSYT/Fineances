import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableHighlight } from "react-native";


export function KeyCap({ label, onPress }: { label: string, onPress: (text: string) => void }) {
    return (
        <TouchableHighlight style={style.container} onPress={() => { onPress(label) }}>
            <Text style={style.text}>{label}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["buttons2"],
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: "center"
    },
    text: {
        color: Colors["plainText"],
        fontSize: 64,
        fontWeight: "bold",
        textAlign: "center",
    }
})

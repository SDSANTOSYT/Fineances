import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TextInput, View } from "react-native";


export function CustomTextInput({ label, onEndEditing }: { label: string, onEndEditing: () => void }) {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={style.title}> {label}</Text>
            <View style={style.container}>
                <TextInput style={style.descriptionInput} onEndEditing={onEndEditing} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["highlights3"],
        borderRadius: 15,
        width: 370,
        height: 79,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: Colors["highlights1"],
        fontFamily: "Roboto Condensed",
        fontWeight: "bold",
        fontSize: 20
    },
    descriptionInput: {
        width: 300,
        borderBottomColor: Colors["plainText"],
        borderBottomWidth: 1,
        textAlign: "center",
        color: Colors["plainText"],
        fontSize: 20,
        borderRadius: 5

    }
})

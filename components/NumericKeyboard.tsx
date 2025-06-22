import { DeleteKeyCap } from "@/components/DeleteKeyCap"
import { KeyCap } from "@/components/KeyCap"
import { StyleSheet, View } from "react-native"


export function NumericKeyboard({ typeOnPress, deleteOnPress }: { typeOnPress: (key: string) => void, deleteOnPress: () => void }) {
    return (
        <View style={style.container}>
            <KeyCap label="1" onPress={typeOnPress}></KeyCap>
            <KeyCap label="2" onPress={typeOnPress}></KeyCap>
            <KeyCap label="3" onPress={typeOnPress}></KeyCap>
            <KeyCap label="4" onPress={typeOnPress}></KeyCap>
            <KeyCap label="5" onPress={typeOnPress}></KeyCap>
            <KeyCap label="6" onPress={typeOnPress}></KeyCap>
            <KeyCap label="7" onPress={typeOnPress}></KeyCap>
            <KeyCap label="8" onPress={typeOnPress}></KeyCap>
            <KeyCap label="9" onPress={typeOnPress}></KeyCap>
            <KeyCap label="." onPress={typeOnPress}></KeyCap>
            <KeyCap label="0" onPress={typeOnPress}></KeyCap>
            <DeleteKeyCap onPress={deleteOnPress}></DeleteKeyCap>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 20,
        justifyContent: "center"
    }
})

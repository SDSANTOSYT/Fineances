import { Image, StyleSheet, TouchableHighlight } from "react-native";


export function ExpensesButton({ onPress }: { onPress: () => void }) {
    return (
        <TouchableHighlight onPress={onPress} style={style.buttonContainer}>
            <Image source={require("@/assets/images/expenses-icon.png")}></Image>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    buttonContainer: {
        width: 81,
        height: 81,
        borderRadius: 100
    }
})

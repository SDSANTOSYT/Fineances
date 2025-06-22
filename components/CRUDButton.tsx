import { Image, StyleSheet, TouchableHighlight } from "react-native";

const iconButton = {
    done: require("@/assets/images/done-icon.png"),
    calendar: require("@/assets/images/calendar-icon.png"),
    delete: require("@/assets/images/delete-icon.png"),
    cancel: require("@/assets/images/cancel-icon.png"),
}


export function CRUDButton({ typeOfButton, onPress }: { typeOfButton: "done" | "calendar" | "delete" | "cancel", onPress: () => void }) {
    return (
        <TouchableHighlight onPress={onPress} style={style.container}>
            <Image source={iconButton[typeOfButton]} />
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderRadius: 10
    }
})

import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, TouchableHighlight } from "react-native";


export function DeleteKeyCap({ onPress }: { onPress: () => void }) {
    return (
        <TouchableHighlight style={style.container} onPress={onPress}>
            <Image source={require("@/assets/images/delete-key-icon.png")} />
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["buttons2"],
        width: 100,
        height: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

})

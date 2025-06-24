import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";


export function CreateButton({ type, onPress }: { type: "category" | "account" | string, onPress: () => void }) {
    return (
        <TouchableHighlight onPress={onPress} style={style.container}>
            <View style={style.container}>
                <Image source={require("@/assets/images/create-icon.png")} style={style.icon} />
                <Text style={style.text}>CREA UNA {type === "category" ? "CATEGORIA" : "CUENTA"}</Text>
            </View>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["highlights3"],
        borderRadius: 15,
        width: 360,
        height: 50,
        flexDirection: "row",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        position: 'absolute',
        left: 6,
        top: '50%',
        transform: [{ translateY: -24 }],
        width: 48,
        height: 48,
        resizeMode: 'contain',
    },
    text: {
        textAlign: "center",
        color: Colors["plainText"],
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",

    }
})

import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";


export function AmountCard({ amount }: { amount: string }) {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={style.title}>CANTIDAD</Text>
            <View style={style.container}>
                <Text style={style.amount}>$ {Number(amount).toLocaleString()}</Text>
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
    amount: {
        color: Colors["plainText"],
        fontSize: 36
    }

})

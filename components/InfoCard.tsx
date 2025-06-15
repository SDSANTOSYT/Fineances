import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export function InfoCard({label, num}: {label:string, num:number}){
    const text = label;
    const balance = num;

    return (
        <View style = {style.container}>
            <Text style = {style.title}>{text.toUpperCase()}</Text>
            <Text style = {style.balance}>$ {balance.toLocaleString()}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor:Colors["highlights3"],
        borderRadius : 30,
        width: 116,
        height: 66,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        color: Colors["highlights1"],
        fontFamily: "Roboto Condensed",
        fontWeight: "bold",
        fontSize: 14
    },
    balance:{
        color: Colors["plainText"],
        fontSize: 16
    }

})
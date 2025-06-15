import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";


export function BalanceCard({balance}: {balance:number}){
    return(
        <View style = {{alignItems:"center"}}>
            <Text style = {style.title}>SALDO</Text>
            <View style = {style.container}>
                <Text style = {style.balance}>$ {balance.toLocaleString()}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor:Colors["highlights3"],
        borderRadius : 30,
        width: 245,
        height: 61,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        color: Colors["highlights1"],
        fontFamily: "Roboto Condensed",
        fontWeight: "bold",
        fontSize:20
    },
    balance:{
        color: Colors["plainText"],
        fontSize: 24
    }

})
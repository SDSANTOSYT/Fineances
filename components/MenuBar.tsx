import { Colors } from "@/constants/Colors"
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"

export function MenuBar({funcTransactionBtn}:{funcTransactionBtn: ()=> void}){

    return(
        <View style = {style.container}>
            <TouchableHighlight style = {style.menuButton} onPress={() => alert('Pressed!')}>
                <Image source={require("@/assets/images/menu-icon.png")} ></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={funcTransactionBtn}>
                <Text style = {style.transactionButton}>MOVIMIENTOS</Text>
            </TouchableHighlight>
            <TouchableHighlight style = {style.exchangeButton}>
                <Image source={require("@/assets/images/exchange-icon.png")} ></Image>
            </TouchableHighlight>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: Colors["buttons1"],
        width: 386,
        height: 61,
        borderRadius: 30,
        alignItems: "center",
        flexDirection:"row",
        justifyContent: "space-between",
        padding: 10
        
    },
    transactionButton:{
        color: Colors["highlights1"],
        fontSize:20,
        fontWeight:"bold",
        
    },
    exchangeButton:{
        width:49,
        height:49,
        
    },
    menuButton:{
        width:49,
        height:49,
        
    }
})
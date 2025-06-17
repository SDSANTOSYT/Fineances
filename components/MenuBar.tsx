import { Colors } from "@/constants/Colors"
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"

export function MenuBar({transactionOnPress,menuOnPress,exchangeOnPress}:{transactionOnPress: ()=> void,menuOnPress:()=>void,exchangeOnPress:()=>void}){

    return(
        <View style = {style.container}>
            <TouchableHighlight style = {style.menuButton} onPress={menuOnPress}>
                <Image source={require("@/assets/images/menu-icon.png")} ></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={transactionOnPress} style={style.transactionContainer}>
                <Text style = {style.transactionButton}>MOVIMIENTOS</Text>
            </TouchableHighlight>
            <TouchableHighlight style = {style.exchangeButton} onPress={exchangeOnPress}>
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
    transactionContainer:{
        padding:6,
        borderRadius:30,
    },
    exchangeButton:{
        width:49,
        height:49,
        borderRadius:100
        
    },
    menuButton:{
        width:49,
        height:49,
        borderRadius:100
    }
})

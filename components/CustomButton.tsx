import { Colors } from "@/constants/Colors"
import { StyleSheet, Text, TouchableHighlight } from "react-native"

export function CustomButton({functionOnPressed, label}: {functionOnPressed: () => void, label:string}){

    return(
        <TouchableHighlight onPress={functionOnPressed} style={style.container}>
                <Text style = {style.text}>{label}</Text>
        </TouchableHighlight>
    )
}



const style = StyleSheet.create({
    container:{
        backgroundColor: Colors["buttons1"],
        width: 245,
        height: 61,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
        
    },
    text:{
        color: Colors["plainText"],
        fontSize: 24,
        fontWeight: "bold"
    }
})
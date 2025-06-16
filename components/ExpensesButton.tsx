import { Image, TouchableHighlight } from "react-native";


export function ExpensesButton({functionOnPressed}: {functionOnPressed: () => void}){
    return(
        <TouchableHighlight onPress={functionOnPressed}style={{width:81, height:81}}>
            <Image source={require("@/assets/images/expenses-icon.png")}></Image>
        </TouchableHighlight>
    )
}
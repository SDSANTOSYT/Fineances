import { Selector } from "@/components/Selector";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Category = {
    name: string,
    color: string
};
type Account = {
    name: string,
    icon: "bank" | "cash" | "card",
    balance: number
};


export default function selectorScreen() {
    const { type, report } = useLocalSearchParams();

    const items = [
        { name: "Cuenta Corriente", icon: "bank", balance: 2500 },
        { name: "Efectivo", icon: "cash", balance: 300 },
        { name: "Tarjeta de Crédito", icon: "card", balance: -1200 },
        { name: "Ahorros", icon: "bank", balance: 5000 },
        { name: "Billetera", icon: "cash", balance: 150 },
        { name: "Tarjeta Débito", icon: "card", balance: 800 },
    ]
    const itemOnPress = () => {
        alert("pilla")
    }
    const createOnPress = () => {
        alert("pilla")
    }
    const backgroundOnPress = () => {
        useRouter().back()
    }

    return (
        <GestureHandlerRootView>
            <Pressable style={style.background} onPress={backgroundOnPress}>
                <Pressable>
                    <Selector items={items as Category[] | Account[]} createOnPress={createOnPress} itemOnPress={itemOnPress} type={type as "account" | "category"} report={report === "true"} ></Selector>
                </Pressable>
            </Pressable>
        </GestureHandlerRootView>
    )
}

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

import { Colors } from "@/constants/Colors"
import { Image, StyleSheet, Text, View } from "react-native"

const iconSource = {
    bank: require("@/assets/images/bank-icon.png"),
    cash: require("@/assets/images/cash-icon.png"),
    card: require("@/assets/images/card-icon.png"),
    all_accounts: require("@/assets/images/all-accounts-icon.png")
}


export function AccountItem({ name, icon, balance }: { name: string, icon: "bank" | "cash" | "card", balance: number }) {
    return (
        <View style={style.container}>
            <Image source={iconSource[name === "Todo" ? "all_accounts" : icon]}></Image>
            <Text style={[name === "Todo" ? style.all_color : style.account_color, style.name]}>{name}</Text>
            <Text style={style.balance}>$ {balance.toLocaleString()}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: 386,
        height: 58,
        borderBottomColor: Colors["plainText"],
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        alignSelf: "center"
    },
    name: {
        fontWeight: "bold",
        fontSize: 36

    },
    all_color: {
        color: Colors["backgroundPage"],
    },
    account_color: {
        color: Colors["goodText"],
    },
    balance: {
        color: Colors["plainText"],
        fontSize: 20,
        textAlign: "right"
    }
})

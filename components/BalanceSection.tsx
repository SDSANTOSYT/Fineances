import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { ExpensesButton } from "./ExpensesButton";
import { IncomeButton } from "./IncomeButton";


export function BalanceSection({ balance, expensesOnPress, incomeOnPress }: { balance: number, expensesOnPress: () => void, incomeOnPress: () => void }) {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={style.title}>SALDO</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ExpensesButton onPress={expensesOnPress} />
                <View style={style.container}>
                    <Text style={style.balance}>$ {balance.toLocaleString()}</Text>
                </View>
                <IncomeButton onPress={incomeOnPress} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["highlights3"],
        borderRadius: 30,
        width: 245,
        height: 61,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: Colors["highlights1"],
        fontFamily: "Roboto Condensed",
        fontWeight: "bold",
        fontSize: 20
    },
    balance: {
        color: Colors["plainText"],
        fontSize: 24
    }

})

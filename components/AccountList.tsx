import { AccountItem } from "@/components/AccountItem";
import { StyleSheet, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type Account = {
    name: string,
    icon: "bank" | "cash" | "card",
    balance: number
};


export function AccountList({ items, itemOnPress, report }: { items: Account[], itemOnPress: () => void, report?: boolean }) {
    return (
        <ScrollView style={style.container}>
            {!report && <TouchableHighlight onPress={itemOnPress} key={"Todo"}>
                <AccountItem name={"Todo"} icon={"cash"} balance={items.reduce((sum, account) => sum + account.balance, 0)} />
            </TouchableHighlight>}

            {items.map(item => (
                <TouchableHighlight onPress={itemOnPress} key={item.name}>
                    <AccountItem name={item.name} icon={item.icon} balance={item.balance} />
                </TouchableHighlight>
            ))}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        overflow: "hidden"
    }
})

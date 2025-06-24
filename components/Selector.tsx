import { AccountList } from "@/components/AccountList";
import { CategoryList } from "@/components/CategoryList";
import { CreateButton } from "@/components/CreateButton";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

type Category = {
    name: string,
    color: string
};
type Account = {
    name: string,
    icon: "bank" | "cash" | "card",
    balance: number
};


export function Selector({ items, type, createOnPress, itemOnPress, report }: { items: Category[] | Account[], type: "category" | "account", createOnPress: () => void, itemOnPress: () => void, report?: boolean }) {
    return (
        <View style={style.container}>
            <View style={style.label_container}>
                <Text style={style.label_text}>SELECCIONA UNA {type === "category" ? "CATEGORIA" : "CUENTA"}</Text>
            </View>
            <CreateButton type={type} onPress={createOnPress} />
            {type === "category" ? (<CategoryList items={items as Category[]} itemOnPress={itemOnPress} />) : (<AccountList items={items as Account[]} itemOnPress={itemOnPress} report={report} />)}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["buttons2"],
        borderRadius: 30,
        width: 386,
        height: 471,
        alignItems: "center",
        gap: 5,
        overflow: "hidden"
    },
    label_container: {
        backgroundColor: Colors["buttons1"],
        borderRadius: 30,
        width: 386,
        height: 65,
        justifyContent: "center",
        alignItems: "center"
    },
    label_text: {
        color: Colors["badText"],
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }
})

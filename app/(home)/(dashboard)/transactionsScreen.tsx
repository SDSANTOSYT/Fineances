import { TransactionItem } from "@/components/TransactionItem";
import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet, View } from "react-native";


export default function transactionsScreen() {
    return (
        <View style={style.container}>
            <ScrollView >
                <TransactionItem color="#FAFAFA" description="bus" money={10000} />
            </ScrollView>
        </View>
    )
}

// Stylesheet for the Screen
const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["buttons2"],
        height: 580,
    }
})
import { AmountCard } from "@/components/AmountCard";
import { CRUDButton } from "@/components/CRUDButton";
import { CustomButton } from "@/components/CustomButton";
import { NumericKeyboard } from "@/components/NumericKeyboard";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";


export default function CRUDTransactionScreen() {
    const { typeOfTransaction } = useLocalSearchParams<{ typeOfTransaction: string }>();
    const navigator = useNavigation();
    const router = useRouter()

    const [amount, setAmount] = useState("0");

    const cancelOnPress = () => {
        navigator.goBack();
        setAmount("0");
    }
    const deleteOnPress = () => {

    }
    const calendarOnPress = () => {

    }
    const doneOnPress = () => {
        router.navigate("/(home)/(dashboard)")
    }
    const typeOnPress = (key: string) => {
        if (key === ".") {
            if (!amount.includes(".")) {
                setAmount((amount + key))
            }
        } else {
            if (!amount.includes(".") || amount.split(".")[1].length < 2) {
                setAmount((amount) + key)
            }
        }
    }
    const deleteKeyOnPress = () => {
        setAmount(amount.substring(0, amount.length - 1))
    }
    const button1OnPress = () => {
        alert("se presionó el boton 1")
    }
    const button2OnPress = () => {
        alert("se presionó el boton 2")
    }

    return (
        <View style={style.container}>
            <View style={style.CRUD_container}>
                <CRUDButton typeOfButton="cancel" onPress={cancelOnPress} />
                <CRUDButton typeOfButton="delete" onPress={deleteOnPress} />
                <CRUDButton typeOfButton="calendar" onPress={calendarOnPress} />
                <CRUDButton typeOfButton="done" onPress={doneOnPress} />
            </View>
            <AmountCard amount={amount} />
            <CustomButton label={typeOfTransaction === "transfer" ? "Desde" : "Categoria"} onPress={button1OnPress} />
            <CustomButton label={typeOfTransaction === "transfer" ? "Hasta" : "Cuenta"} onPress={button2OnPress} />
            <TextInput style={style.descriptionInput} placeholder="Descripción" placeholderTextColor={"gray"} />
            <NumericKeyboard typeOnPress={typeOnPress} deleteOnPress={deleteKeyOnPress}></NumericKeyboard>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["backgroundPage"],
        flex: 1,
        gap: 15,
        alignItems: "center"
    },
    CRUD_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 45,
        alignSelf: "stretch",
    },
    descriptionInput: {
        width: 300,
        borderBottomColor: Colors["plainText"],
        borderBottomWidth: 1,
        textAlign: "center",
        color: Colors["plainText"],
        fontSize: 15,
        borderRadius: 5

    }
})

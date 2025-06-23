import { CRUDButton } from "@/components/CRUDButton";
import { CustomButton } from "@/components/CustomButton";
import { CustomTextInput } from "@/components/CustomTextInput";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";


export default function CRUDCategoryScreen() {
    const navigator = useNavigation();
    const router = useRouter()

    const [amount, setAmount] = useState("0");
    const [name, setName] = useState("");

    const cancelOnPress = () => {
        navigator.goBack();
        setAmount("0");
        setName("");
    }
    const deleteOnPress = () => {

    }
    const doneOnPress = () => {
        router.navigate("/(home)/(dashboard)")
        setAmount("0");
    }
    const onEndEditing = () => {
        alert("se terminó de editar")
    }
    const colorOnPress = () => {
        alert("escoge un color cole")
    }

    return (
        <View style={style.container}>
            <View style={style.CRUD_container}>
                <CRUDButton typeOfButton="cancel" onPress={cancelOnPress} />
                <CRUDButton typeOfButton="delete" onPress={deleteOnPress} />
                <CRUDButton typeOfButton="done" onPress={doneOnPress} />
            </View>
            <CustomTextInput label="NOMBRE" onEndEditing={onEndEditing} />
            <CustomButton label="Color" onPress={colorOnPress} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["backgroundPage"],
        flex: 1,
        gap: 25,
        alignItems: "center",
    },
    CRUD_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 45,
        alignSelf: "stretch",
        marginBottom: 165

    },
})
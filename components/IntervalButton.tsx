import { Colors } from "@/constants/Colors";
import { DrawerItem } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";


export default function IntervalButton({ interval, onPress }: { interval: string, onPress: () => void }) {

    return (
        <DrawerItem label={interval} onPress={onPress} style={style.container} labelStyle={style.text} />


    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["buttons2"],
        width: 150,
        height: 52,
        borderRadius: 10,
        alignContent: "center",
    },
    text: {
        fontSize: 24,
        color: Colors["plainText"],
        textAlign: "center",
        marginEnd: -12

    }
})

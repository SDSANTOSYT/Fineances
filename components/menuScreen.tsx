import CustomButton from "@/components/CustomButton";
import IntervalButton from "@/components/IntervalButton";
import { Colors } from "@/constants/Colors";
import { DrawerContentScrollView } from "@react-navigation/drawer";

import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

export default function MenuScreen(props: any) {
    const drawer = props.navigation;

    const menuOnPress = () => {
        drawer.closeDrawer();
    }
    const transfersOnPress = () => {

    }
    const syncOnPress = () => {

    }
    const allOnPress = () => {

    }
    const yearOnPress = () => {

    }
    const monthOnPress = () => {

    }
    const weekOnPress = () => {

    }
    const dayOnPress = () => {

    }

    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props} style={{ flex: 1, backgroundColor: Colors["backgroundPage"] }}>
                <View style={style.container}>
                    <TouchableHighlight style={style.menuButton} onPress={menuOnPress}>
                        <Image source={require("@/assets/images/menu-icon.png")} ></Image>
                    </TouchableHighlight>
                    <CustomButton label="Transferencias" onPress={transfersOnPress} />
                    <CustomButton label="Sincronización" onPress={syncOnPress} />
                    <IntervalButton interval="Todo" onPress={allOnPress} />
                    <IntervalButton interval="Año" onPress={yearOnPress} />
                    <IntervalButton interval="Mes" onPress={monthOnPress} />
                    <IntervalButton interval="Semana" onPress={weekOnPress} />
                    <IntervalButton interval="Dia" onPress={dayOnPress} />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["backgroundPage"],
        flex: 1,
        gap: 27,
        alignItems: "center"
    },
    menuButton: {
        width: 49,
        height: 49,
        borderRadius: 100,
        alignSelf: "flex-start",
    },
});

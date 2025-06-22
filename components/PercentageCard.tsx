import { Colors } from "@/constants/Colors";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";


export function PercentageCard({ percentage }: { percentage: number }) {
    const percent = percentage;
    const progressAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: percent,
            duration: 250,
            useNativeDriver: false, // Necesario para el ancho
        }).start();
    }, [percent]);

    const widthPercentage = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, style.progressBar.width]
    });

    return (
        <View style={style.container}>
            <Text style={style.message}>Haz usado un {(percent * 100).toLocaleString("en-US", { maximumFractionDigits: 2 })}% de tu presupuesto </Text>
            <View style={style.progressBar}>
                <Animated.View style={[style.progress, { width: widthPercentage }]}  ></Animated.View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors["buttons1"],
        width: 370,
        height: 108,
        padding: 20,
        borderRadius: 15,
        display: "flex",
        gap: 10
    },
    message: {
        color: Colors["highlights1"],
        fontWeight: "bold"
    },
    progressBar: {
        backgroundColor: Colors["buttons2"],
        width: 330,
        height: 28,
        borderRadius: 15
    },
    progress: {
        backgroundColor: Colors["highlights1"],
        height: 28,
        borderRadius: 15
    }
})

import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { Polygon, Svg } from "react-native-svg";


export function TransactionItem({ color, description, money }: { color: string, description: string, money: number }) {
    return (
        <View style={style.container}>
            <Hexagon size={30} x={15} y={15} fill={color} />
            <Text style={style.description}>{description}</Text>
            <Text style={style.money} adjustsFontSizeToFit={true} numberOfLines={1}>$ {money.toLocaleString()}</Text>
        </View>
    )
}

// Hexagon Icon for the category of the transaction
const Hexagon = ({ size, x, y, fill }: { size: number, x: number, y: number, fill: string }) => {
    const radius = size / 2;
    const points = [];
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const px = x + radius * Math.cos(angle);
        const py = y + radius * Math.sin(angle);
        points.push(`${px},${py}`);
    }

    return (
        <Svg height={size} width={size} rotation={90}>
            <Polygon points={points.join(' ')} fill={fill} stroke={"#FAFAFA"} strokeWidth={2} />
        </Svg>
    );
};

// StyleSheet for the component
const style = StyleSheet.create({
    container: {
        width: 386,
        height: 58,
        borderBottomColor: Colors["plainText"],
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center"

    },
    description: {
        color: Colors["highlights1"],
        fontWeight: "bold",
        fontSize: 20,
        flexDirection: "row",
        margin: "auto",
        textAlign: "center"
    },
    money: {
        color: Colors["plainText"],
        fontSize: 20,
        textAlign: "right",
        width: 65,
    }
})

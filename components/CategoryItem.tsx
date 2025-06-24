import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { Polygon, Svg } from "react-native-svg";


export function CategoryItem({ color, name }: { color: string, name: string }) {
    return (
        <View style={style.container}>
            <Hexagon size={30} x={15} y={15} fill={color} />
            <Text style={style.name}>{name}</Text>
        </View>
    )
}

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
    name: {
        color: Colors["plainText"],
        fontWeight: "bold",
        fontSize: 36,
        flexDirection: "row",
        margin: "auto",
        textAlign: "center"
    },
})

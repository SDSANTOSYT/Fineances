import { Dimensions, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
const screenWidth = Dimensions.get("window").width;

export function PieChartPreview({transactions}:{transactions: any}){
    

    return (
        <View>
            <PieChart data={transactions}/>
        </View>
    )
}
import { PieChart } from "react-native-gifted-charts";


export function PieChartPreview({ transactions, onPress }: { transactions: any, onPress: () => void }) {
    return (
        <PieChart data={transactions} onPress={onPress} />
    )
}

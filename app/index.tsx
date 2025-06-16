import { ExpensesButton } from "@/components/ExpensesButton";
import { PieChartPreview } from "@/components/PieChartPreview";
import { View } from "react-native";

export default function Index() {

    const data=[
                {value: 30, color: 'rgb(84,219,234)'},
                {value: 40, color: 'lightgreen'},
                {value: 20, color: 'orange'},
              ];
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
    <PieChartPreview transactions={data}/>
    <ExpensesButton functionOnPressed={()=>{alert("Pressed!")}}/>
    </View>
  );
}

import { PercentageCard } from "@/components/PercentageCard";
import { PieChartPreview } from "@/components/PieChartPreview";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter()


    const dummyData=[
                {value: 30, color: 'rgb(84,219,234)'},
                {value: 40, color: 'lightgreen'},
                {value: 20, color: 'orange'},
              ];
    const [expendedPercentage, setExpended] = useState(0.2);

    const pieChartOnPress = ()=>{
      router.push({ pathname: "/pieChartScreen", params: { dummyData: JSON.stringify(dummyData)} });
    }
    

  return (
    <View style={style.container}>
      <PercentageCard percentage={expendedPercentage}/>
      <PieChartPreview transactions={dummyData} onPress={pieChartOnPress}></PieChartPreview>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    gap:50
  },
})

import { BalanceSection } from "@/components/BalanceSection";
import { InfoCard } from "@/components/InfoCard";
import { MenuBar } from "@/components/MenuBar";
import { PercentageCard } from "@/components/PercentageCard";
import { PieChartPreview } from "@/components/PieChartPreview";
import { Colors } from "@/constants/Colors";
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
    
    const [inicialBalance, setInicial] = useState(57024.5);
    const [incomeBalance, setIncome] = useState(1000000);
    const [expensesBalance, setExpenses] = useState(100000);
    const [balance, setBalance] = useState(957024.5);
    const [expendedPercentage, setExpended] = useState(0.2);

    const menuOnPress = ()=>{
      alert("boton de menu")
    };
    const transactionOnPress = ()=>{
      alert("boton de movimientos")
    };
    const exchangeOnPress = ()=>{
      alert("boton de cambio de cuentas")
    };
    const incomeOnPress = ()=>{
      alert("boton de ingresos")
    }
    const expensesOnPress = ()=>{
      alert("boton de egresos")
    }
    const pieChartOnPress = ()=>{
      router.push({ pathname: "/pieChartScreen", params: { dummyData: JSON.stringify(dummyData), inicialBalance, incomeBalance, expensesBalance, balance } });
    }
    



  return (
    <View style={style.container}>
      <View style={style.infoContainer}>
        <InfoCard label="INICIAL" num={inicialBalance}/>
        <InfoCard label="INGRESOS" num={incomeBalance}/>
        <InfoCard label="EGRESOS" num={expensesBalance}/>
      </View>
      <PercentageCard percentage={expendedPercentage}/>
      <PieChartPreview transactions={dummyData} onPress={pieChartOnPress}></PieChartPreview>
      <View style={{alignItems:"center", gap:15}}>
        <View style={style.sectionSeparator}/>
        <BalanceSection balance={balance} expensesOnPress={expensesOnPress} incomeOnPress={incomeOnPress}/>  
      </View>
      <MenuBar transactionOnPress={transactionOnPress} exchangeOnPress={exchangeOnPress} menuOnPress={menuOnPress}/>

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    backgroundColor: Colors["backgroundPage"],
    flex: 1,
    alignItems: "center",
    gap:50
  },
  infoContainer:{
    //backgroundColor: "red",
    flexDirection:"row",
    alignSelf:"stretch",
    marginTop:60,
    justifyContent:"space-evenly"
  },
  sectionSeparator:{
    backgroundColor:"#FAFAFA",
    width:300,
    height:1
  }
})

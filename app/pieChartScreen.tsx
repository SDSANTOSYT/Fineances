import { BalanceSection } from "@/components/BalanceSection";
import { InfoCard } from "@/components/InfoCard";
import { MenuBar } from "@/components/MenuBar";
import { PieChartPreview } from "@/components/PieChartPreview";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";


export default function pieChartScreen(){
    const params = useLocalSearchParams();
    const dummyData= JSON.parse(params.dummyData.toString());
        
        const [inicialBalance, setInicial] = useState(Number(params.inicialBalance));
        const [incomeBalance, setIncome] = useState(Number(params.incomeBalance));
        const [expensesBalance, setExpenses] = useState(Number(params.expensesBalance));
        const [balance, setBalance] = useState(Number(params.balance));

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
          alert("boton de grafico")
        }
        
    
      return (
        <View style={style.container}>
          <View style={style.infoContainer}>
            <InfoCard label="INICIAL" num={inicialBalance}/>
            <InfoCard label="INGRESOS" num={incomeBalance}/>
            <InfoCard label="EGRESOS" num={expensesBalance}/>
          </View>
          <View style={style.chartContainer}>
            <PieChartPreview transactions={dummyData} onPress={pieChartOnPress}></PieChartPreview>
          </View>
          <View style={{alignItems:"center", gap:15, flex:5}}>
            <View style={style.sectionSeparator}/>
            <BalanceSection balance={balance} expensesOnPress={expensesOnPress} incomeOnPress={incomeOnPress}/>  
          <MenuBar transactionOnPress={transactionOnPress} exchangeOnPress={exchangeOnPress} menuOnPress={menuOnPress}/>
          </View>
    
        </View>
      );
}

const style = StyleSheet.create({
  container:{
    backgroundColor: Colors["backgroundPage"],
    flex: 1,
    alignItems: "center",
    gap:30
  },
  infoContainer:{
    //backgroundColor: "red",
    flex:1,
    flexDirection:"row",
    alignSelf:"stretch",
    marginTop:60,
    justifyContent:"space-evenly"
  },
  chartContainer:{
    flex:10
  },
  sectionSeparator:{
    backgroundColor:"#FAFAFA",
    width:300,
    height:1
  }
})

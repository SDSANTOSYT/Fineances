import { BalanceSection } from "@/components/BalanceSection";
import { InfoCard } from "@/components/InfoCard";
import { MenuBar } from "@/components/MenuBar";
import { Colors } from "@/constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { Slot, useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function DashboardLayout() {
  const router = useRouter();
  const drawer = useNavigation();

  const [inicialBalance, setInicial] = useState(57024.5);
  const [incomeBalance, setIncome] = useState(1000000);
  const [expensesBalance, setExpenses] = useState(100000);
  const [balance, setBalance] = useState(957024.5);

  const menuOnPress = () => {
    //alert("boton de menu")
    drawer.dispatch(DrawerActions.toggleDrawer())
  };
  const transactionOnPress = () => {
    alert("boton de movimientos")
  };
  const exchangeOnPress = () => {
    alert("boton de cambio de cuentas")
  };
  const incomeOnPress = () => {
    alert("boton de ingresos")
  }
  const expensesOnPress = () => {
    alert("boton de egresos")
  }

  return (
    <View style={style.container}>
      <View style={style.infoContainer}>
        <InfoCard label="INICIAL" num={inicialBalance} />
        <InfoCard label="INGRESOS" num={incomeBalance} />
        <InfoCard label="EGRESOS" num={expensesBalance} />
      </View>
      <Slot initialRouteName="index"></Slot>
      <View style={{ alignItems: "center", gap: 15 }}>
        <View style={style.sectionSeparator} />
        <BalanceSection balance={balance} expensesOnPress={expensesOnPress} incomeOnPress={incomeOnPress} />
      </View>
      <View style={{ marginBottom: 50 }}>
        <MenuBar transactionOnPress={transactionOnPress} exchangeOnPress={exchangeOnPress} menuOnPress={menuOnPress} />

      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors["backgroundPage"],
    flex: 1,
    alignItems: "center",
    gap: 50
  },
  infoContainer: {
    //backgroundColor: "red",
    flexDirection: "row",
    alignSelf: "stretch",
    marginTop: 60,
    justifyContent: "space-evenly"
  },
  sectionSeparator: {
    backgroundColor: "#FAFAFA",
    width: 300,
    height: 1
  }
})

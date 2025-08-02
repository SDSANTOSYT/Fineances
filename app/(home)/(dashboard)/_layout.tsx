import { BalanceSection } from "@/components/BalanceSection";
import { InfoCard } from "@/components/InfoCard";
import { MenuBar } from "@/components/MenuBar";
import { Colors } from "@/constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { Slot, useNavigation, usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { LinearTransition, SlideInDown, SlideInUp, SlideOutDown, SlideOutUp } from "react-native-reanimated";


export default function DashboardLayout() {
  // Variables for navigation
  const router = useRouter();
  const drawer = useNavigation();
  const pathname = usePathname();

  // Variable to know if we're in the transactionsScreen
  const isTransactionsScreen = pathname.includes("transactionsScreen")

  // Props for animatedView
  const getAnimatedProps = (direction: "up" | "down") => ({
    layout: LinearTransition.springify(),
    entering: direction === "up" ? SlideInUp.duration(300) : SlideInDown.duration(300),
    exiting: direction === "up" ? SlideOutUp.duration(300) : SlideOutDown.duration(300),
  })

  // Variables for text on infocards
  const [inicialBalance, setInicial] = useState(57024.5);
  const [incomeBalance, setIncome] = useState(1000000);
  const [expensesBalance, setExpenses] = useState(100000);
  const [balance, setBalance] = useState(957024.5);

  // Functions for the buttons when pressed
  const menuOnPress = () => {
    //alert("boton de menu")
    drawer.dispatch(DrawerActions.toggleDrawer())
  };
  const transactionOnPress = () => {
    //alert("boton de movimientos")
    router.navigate('/transactionsScreen')
  };
  const exchangeOnPress = () => {
    //alert("boton de cambio de cuentas")
    router.navigate({ pathname: "/selectorScreen", params: { type: "account", report: String(false) } })

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
      {isTransactionsScreen ? (
        <>
          <Animated.View style={{ marginTop: -40 }} {...getAnimatedProps("down")}>
            <MenuBar transactionOnPress={transactionOnPress} exchangeOnPress={exchangeOnPress} menuOnPress={menuOnPress} />
          </Animated.View>
          <Animated.View {...getAnimatedProps("up")}>
            <Slot initialRouteName="index"></Slot>
          </Animated.View>
          <Animated.View style={{ alignItems: "center", gap: 15 }} {...getAnimatedProps("up")}>
            <BalanceSection balance={balance} expensesOnPress={expensesOnPress} incomeOnPress={incomeOnPress} />
          </Animated.View>
        </>
      ) : (
        <>
          <Animated.ScrollView {...getAnimatedProps("down")}>
            <Slot initialRouteName="index"></Slot>
          </Animated.ScrollView>
          <Animated.View style={{ alignItems: "center", gap: 15 }} {...getAnimatedProps("down")}>
            <View style={style.sectionSeparator} />
            <BalanceSection balance={balance} expensesOnPress={expensesOnPress} incomeOnPress={incomeOnPress} />
          </Animated.View>
          <Animated.View style={{ marginBottom: 50 }} {...getAnimatedProps("up")}>
            <MenuBar transactionOnPress={transactionOnPress} exchangeOnPress={exchangeOnPress} menuOnPress={menuOnPress} />
          </Animated.View>
        </>
      )}
    </View>
  );
}

// StyleSheet for the layout
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

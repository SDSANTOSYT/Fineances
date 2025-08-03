import { BalanceSection } from "@/components/BalanceSection";
import { InfoCard } from "@/components/InfoCard";
import { MenuBar } from "@/components/MenuBar";
import { Colors } from "@/constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { Slot, useNavigation, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { LinearTransition, SlideInDown, SlideInUp, SlideOutDown, SlideOutUp, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


export default function DashboardLayout() {
  // Variables for navigation
  const router = useRouter();
  const drawer = useNavigation();
  const pathname = usePathname();

  // Variable to know if we're in the transactionsScreen
  const [showTransactionsLayout, setShowTransactionsLayout] = useState(false)
  const isTransactionsScreen = pathname.includes("transactionsScreen")

  useEffect(() => {
    if (!isTransactionsScreen) {
      slotHeightTransactions.value = 0; // Por si regresa
      slotHeightOriginal.value = 0
      setShowTransactionsLayout(false);
      const timeout = setTimeout(() => {
        slotHeightOriginal.value = 1;
      }, 300); // espera a que se reorganice

      return () => clearTimeout(timeout);

    }
  }, [pathname]);

  useEffect(() => {
    if (showTransactionsLayout) {
      // Espera 300ms para permitir la animación de reorganización
      const timeout = setTimeout(() => {
        slotHeightTransactions.value = 1; // Muestra el nuevo Slot
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      slotHeightTransactions.value = 0; // Por si regresa

    }
  }, [showTransactionsLayout]);



  // Props for animatedView and animations
  const getAnimatedProps = (direction: "up" | "down") => ({
    layout: LinearTransition.springify(),
    entering: direction === "up" ? SlideInUp.duration(300) : SlideInDown.duration(300),
    exiting: direction === "up" ? SlideOutUp.duration(300) : SlideOutDown.duration(300),
  });


  const slotHeightOriginal = useSharedValue(1);  // Slot del layout original
  const slotHeightTransactions = useSharedValue(0); // Slot del layout transacciones


  const slotAnimatedStyleOriginal = useAnimatedStyle(() => ({
    height: withTiming(slotHeightOriginal.value === 1 ? 'auto' : 0, { duration: 300 }),
    opacity: withTiming(slotHeightOriginal.value, { duration: 300 }),
    overflow: 'hidden',
  }));

  const slotAnimatedStyleTransactions = useAnimatedStyle(() => ({
    height: slotHeightTransactions.value === 1 ? 'auto' : 0,
    opacity: withTiming(slotHeightTransactions.value, { duration: 300 }),
    overflow: 'hidden',
  }));




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
    slotHeightOriginal.value = 0; // Oculta Slot del layout original
    setShowTransactionsLayout(true);

    setTimeout(() => {
      router.push('/transactionsScreen');
    }, 300); // Espera a que termine la animación
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
      {showTransactionsLayout ? (
        <>
          <Animated.View style={style.transactionContainer} {...getAnimatedProps("down")}>
            <MenuBar transactionOnPress={transactionOnPress} exchangeOnPress={exchangeOnPress} menuOnPress={menuOnPress} />

            <Animated.View style={slotAnimatedStyleTransactions}>
              <Slot initialRouteName="index" />
            </Animated.View>


          </Animated.View>
          <Animated.View style={{ alignItems: "center", gap: 15 }} {...getAnimatedProps("up")}>
            <BalanceSection balance={balance} expensesOnPress={expensesOnPress} incomeOnPress={incomeOnPress} />
          </Animated.View>
        </>
      ) : (
        <>
          <Animated.ScrollView {...getAnimatedProps("down")}>
            <Animated.View style={slotAnimatedStyleOriginal}>
              <Slot initialRouteName="index" router={router} />
            </Animated.View>
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
  },
  transactionContainer: {
    backgroundColor: Colors["buttons2"],
    marginTop: -40,
    borderRadius: 30,
    overflow: "hidden",
  }
})

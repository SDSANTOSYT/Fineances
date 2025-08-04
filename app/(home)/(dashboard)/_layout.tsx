import { BalanceSection } from "@/components/BalanceSection";
import { InfoCard } from "@/components/InfoCard";
import { MenuBar } from "@/components/MenuBar";
import { Colors } from "@/constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { Slot, useFocusEffect, useNavigation, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { BackHandler, StyleSheet, View } from "react-native";
import Animated, { LinearTransition, SlideInDown, SlideInUp, SlideOutDown, SlideOutUp, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


export default function DashboardLayout() {
  // Variables for navigation
  const router = useRouter();
  const drawer = useNavigation();
  const pathname = usePathname();

  // Variables for the transision between transactionsScreen and the rest
  type TransitionState = "idle" | "toTransactions" | "fromTransactions";
  const [transitionState, setTransitionState] = useState<TransitionState>("idle");

  const isTransactionsScreen = pathname.includes("transactionsScreen");
  const showTransactionsLayout = transitionState !== "idle" || isTransactionsScreen;

  // listeners to start the transition animations
  useEffect(() => {
    if (transitionState === "toTransactions") {
      slotHeightOriginal.value = 0;

      const timeout = setTimeout(() => {
        router.navigate("/transactionsScreen");
      }, 50);

      return () => clearTimeout(timeout);
    }

    if (transitionState === "fromTransactions") {
      slotHeightTransactions.value = 0;

      const timeout = setTimeout(() => {
        router.back()
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [transitionState]);

  useEffect(() => {
    if (isTransactionsScreen && transitionState === "toTransactions") {
      const timeout = setTimeout(() => {
        slotHeightTransactions.value = 1;
        setTransitionState("idle");
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (!isTransactionsScreen && transitionState === "fromTransactions") {
      const timeout = setTimeout(() => {
        slotHeightOriginal.value = 1;
        setTransitionState("idle");
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [pathname, transitionState]);

  // Listener for when the app goes back from the transactionsScreen
  useFocusEffect(() => {
    if (!isTransactionsScreen || transitionState !== "idle") return;

    const onBackPress = () => {
      setTransitionState("fromTransactions");
      return true; // Evita el comportamiento predeterminado
    };

    const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => {
      subscription.remove(); // ✅ Esta es la forma correcta
    };
  });

  // Props for animatedView and animations
  const getAnimatedProps = (direction: "up" | "down") => ({
    layout: LinearTransition.springify(),
    entering: direction === "up" ? SlideInUp.duration(300) : SlideInDown.duration(300),
    exiting: direction === "up" ? SlideOutUp.duration(300) : SlideOutDown.duration(300),
  });

  const slotHeightOriginal = useSharedValue(1);
  const slotHeightTransactions = useSharedValue(0);

  const slotAnimatedStyleOriginal = useAnimatedStyle(() => ({
    height: withTiming(slotHeightOriginal.value === 1 ? 'auto' : 0, { duration: 50 }),
    opacity: withTiming(slotHeightOriginal.value, { duration: 50 }),
    overflow: 'hidden',
  }));

  const slotAnimatedStyleTransactions = useAnimatedStyle(() => ({
    height: slotHeightTransactions.value === 1 ? 'auto' : 0,
    opacity: withTiming(slotHeightTransactions.value, { duration: 50 }),
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
    setTransitionState("toTransactions");
  };

  const exchangeOnPress = () => {
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

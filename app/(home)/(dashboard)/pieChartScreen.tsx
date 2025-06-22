import { PieChartPreview } from "@/components/PieChartPreview";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function pieChartScreen() {
  const params = useLocalSearchParams();
  const dummyData = JSON.parse(params.dummyData.toString());

  const pieChartOnPress = () => {
    alert("boton de grafico")
  }

  return (
    <View style={style.container}>
      <View style={style.chartContainer}>
        <PieChartPreview transactions={dummyData} onPress={pieChartOnPress}></PieChartPreview>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors["backgroundPage"],
    flex: 1,
    alignItems: "center",
    gap: 30
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    marginTop: 60,
    justifyContent: "space-evenly"
  },
  chartContainer: {
    flex: 10
  },
  sectionSeparator: {
    backgroundColor: "#FAFAFA",
    width: 300,
    height: 1
  }
})

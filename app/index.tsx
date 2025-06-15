import { CustomButton } from "@/components/CustomButton";
import { MenuBar } from "@/components/MenuBar";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {

  const [per, setPer] = useState(0)
  

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
    <MenuBar funcTransactionBtn={()=>{alert("pilla")}}></MenuBar>
    <CustomButton functionOnPressed={()=>{alert("pilla")}} label="Transacciones"></CustomButton>
    </View>
  );
}

import { MenuScreen } from "@/components/menuScreen";
import { Drawer } from "expo-router/drawer";


export default function HomeLayout() {
    return (
        <Drawer drawerContent={MenuScreen} initialRouteName="(dashboard)" >
            <Drawer.Screen name="(dashboard)" options={{ headerShown: false }} />
            <Drawer.Screen name="transactions/[type]" options={{ headerShown: false }} />
            <Drawer.Screen name="CRUDAccountScreen" options={{ headerShown: false }} />
            <Drawer.Screen name="CRUDCategoryScreen" options={{ headerShown: false }} />
        </Drawer>
    );
}

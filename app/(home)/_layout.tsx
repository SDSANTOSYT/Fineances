import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MenuScreen from "../../components/menuScreen";

export default function HomeLayout() {
    return (
        <GestureHandlerRootView>
            <Drawer drawerContent={MenuScreen} initialRouteName="(dashboard)">
                <Drawer.Screen name="(dashboard)" options={{ headerShown: false }} ></Drawer.Screen>
            </Drawer>
        </GestureHandlerRootView>
    );
}

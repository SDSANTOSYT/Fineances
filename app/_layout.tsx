import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
      <Stack.Screen name="selectorScreen" options={{ headerShown: false, presentation: "transparentModal", animation: "fade" }} />
    </Stack>
  );
}

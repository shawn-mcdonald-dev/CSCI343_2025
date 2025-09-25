import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import BaseScreen from "./screens/BaseScreen";
import MenuScreen from "./screens/MenuScreen";
import Colors from "./constants/colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    squealer: require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf"),
  });

  const [currentScreen, setCurrentScreen] = useState("base");

  function menuScreenHandler() {
    setCurrentScreen("menu");
  }

  function baseScreenHandler() {
    setCurrentScreen("base");
  }

  let screen = <BaseScreen onNext={menuScreenHandler} />;

  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={baseScreenHandler} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});

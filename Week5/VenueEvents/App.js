import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import BaseScreen from "./screens/BaseScreen";
import EventsScreen from "./screens/EventsScreen";
import Colors from "./constants/colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    squealer: require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf"),
  });

  const [currentScreen, setCurrentScreen] = useState("base");

  function eventsScreenHandler() {
    setCurrentScreen("events");
  }

  function baseScreenHandler() {
    setCurrentScreen("base");
  }

  let screen = <BaseScreen onNext={eventsScreenHandler} />;

  if (currentScreen === "events") {
    screen = <EventsScreen onNext={baseScreenHandler} />;
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

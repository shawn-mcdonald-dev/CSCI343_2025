import React, { useCallback, useEffect, useState } from "react";
import { View, ActivityIndicator, Platform } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync().catch(() => {
  /* ignore if splash already hidden */
});

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // load fonts
        await Font.loadAsync({
          Note: require("./assets/fonts/Note.ttf"),
          Papernotes: require("./assets/fonts/Papernotes.ttf"),
          "Papernotes-Bold": require("./assets/fonts/Papernotes Bold.ttf"),
          "Papernotes-Sketch": require("./assets/fonts/Papernotes Sketch.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // hide splash
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

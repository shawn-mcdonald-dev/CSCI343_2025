// App.js
import React, { useCallback, useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import ThemeContextProvider, {
  ThemeContext,
} from "./store/context/theme-context";

import DashboardScreen from "./screens/DashboardScreen";
import AddFlightScreen from "./screens/AddFlightScreen";
import FlightStatusScreen from "./screens/FlightStatusScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Splash from "./screens/SplashScreen";

import colors from "./constants/colors";

/* maintain splash while fonts load */
SplashScreen.preventAutoHideAsync().catch(() => {});

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.light.primary,
        tabBarInactiveTintColor: colors.light.muted,
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarIcon: ({ color, size }) => {
          let iconName = "home-outline";
          if (route.name === "Dashboard") iconName = "home-outline";
          else if (route.name === "AddFlight") iconName = "add-circle-outline";
          else if (route.name === "FlightStatus")
            iconName = "analytics-outline";
          else if (route.name === "Settings") iconName = "settings-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: "Dashboard" }}
      />
      <Tab.Screen
        name="AddFlight"
        component={AddFlightScreen}
        options={{ title: "Add Flight" }}
      />
      <Tab.Screen
        name="FlightStatusStack"
        component={FlightStatusStack}
        options={{ title: "Flight Status" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

// FlightStatusStack is a Stack so we can navigate to FlightStatus with params
function FlightStatusStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FlightStatus" component={FlightStatusScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Playfair: require("./assets/fonts/Playfair.ttf"),
          PlayfairBold: require("./assets/fonts/PlayfairBold.ttf"),
          PlayfairBoldItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
          NolluqaRegular: require("./assets/fonts/NolluqaRegular.otf"),
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
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {({ isDark }) => (
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
            <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Main" component={MainTabs} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        )}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
}

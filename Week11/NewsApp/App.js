import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import TechNewsScreen from "./screens/TechNewsScreen";
import BookmarkedNewsScreen from "./screens/BookmarkedNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";

import colors from "./constants/colors";
import BookmarksContextProvider from "./store/context/bookmarks-context";

/* Keep the splash screen visible while we fetch resources */
SplashScreen.preventAutoHideAsync().catch(() => {});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function NewsTabs() {
  return (
    <Tab.Navigator
      initialRouteName="US"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarIcon: ({ color, size }) => {
          let iconName = "newspaper-outline";
          if (route.name === "US") iconName = "flag-outline";
          else if (route.name === "World") iconName = "globe-outline";
          else if (route.name === "Tech") iconName = "laptop-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="US"
        component={USNewsScreen}
        options={{ title: "US News" }}
      />
      <Tab.Screen
        name="World"
        component={WorldNewsScreen}
        options={{ title: "World" }}
      />
      <Tab.Screen
        name="Tech"
        component={TechNewsScreen}
        options={{ title: "Tech" }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="All News"
        component={NewsTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Bookmarked News"
        component={BookmarkedNewsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
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

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
      primary: colors.primary,
      text: colors.text,
    },
  };

  return (
    <BookmarksContextProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <NavigationContainer theme={navTheme}>
          <Stack.Navigator initialRouteName="HomeDrawer">
            <Stack.Screen
              name="HomeDrawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={({ route }) => ({
                title: route?.params?.item?.headline
                  ? "Article"
                  : "News Detail",
                headerStyle: { backgroundColor: "#fff" },
                headerTintColor: colors.text,
                headerTitleStyle: {
                  fontFamily: "PlayfairBold",
                  fontSize: 16,
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </BookmarksContextProvider>
  );
}

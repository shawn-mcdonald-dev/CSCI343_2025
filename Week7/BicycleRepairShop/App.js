import React, { useState, useMemo } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

export default function App() {
  // App navigation: "" (loading), "Home", "Review"
  const [currentScreen, setCurrentScreen] = useState("Home");

  // repair time options (id, label, price)
  const repairTimeRadioButtons = useMemo(
    () => [
      { id: "0", label: "Standard", value: "Standard", price: 0 },
      { id: "1", label: "Expedited", value: "Expedited", price: 50 },
      { id: "2", label: "Next Day", value: "Next Day", price: 100 },
    ],
    []
  );

  // services (as in states.js)
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [selectedRepairTime, setSelectedRepairTime] = useState(
    repairTimeRadioButtons[0]
  );

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  const [currentPrice, setCurrentPrice] = useState(0);

  // fonts: placeholders - put your fonts in /assets/fonts
  const [fontsLoaded] = useFonts({
    "Papernotes Bold": require("./assets/fonts/Papernotes Bold.ttf"),
    Papernotes: require("./assets/fonts/Papernotes.ttf"),
  });

  if (!fontsLoaded) {
    // show simple splash image while fonts load
    return (
      <View style={styles.splashContainer}>
        <StatusBar hidden />
        <Image
          source={require("./assets/images/splash.jpg")}
          style={styles.splashImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  // toggle a service (by id)
  const toggleService = (id) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, value: !s.value } : s))
    );
  };

  // submit the order from HomeScreen -> calculate totals and navigate to Review
  const submitOrder = () => {
    const servicesTotal = services
      .filter((s) => s.value)
      .reduce((sum, s) => sum + s.price, 0);
    const repairTimePrice = selectedRepairTime ? selectedRepairTime.price : 0;
    const rentalPrice = rentalMembership ? 100 : 0;
    const subtotal = servicesTotal + repairTimePrice + rentalPrice;
    // store subtotal as currentPrice (App-level)
    setCurrentPrice(subtotal);
    // navigate to order review screen
    setCurrentScreen("Review");
  };

  const resetOrder = () => {
    // reset all choices
    setServices((prev) => prev.map((s) => ({ ...s, value: false })));
    setSelectedRepairTime(repairTimeRadioButtons[0]);
    setNewsletter(false);
    setRentalMembership(false);
    setCurrentPrice(0);
    setCurrentScreen("Home");
  };

  // props object to pass into screens
  const appProps = {
    repairTimeRadioButtons,
    services,
    toggleService,
    selectedRepairTime,
    setSelectedRepairTime,
    newsletter,
    setNewsletter,
    rentalMembership,
    setRentalMembership,
    submitOrder,
    currentPrice,
    resetOrder,
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bg} />
      {currentScreen === "Home" && <HomeScreen {...appProps} />}
      {currentScreen === "Review" && <OrderReviewScreen {...appProps} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  splashContainer: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
  splashImage: {
    width: 220,
    height: 220,
  },
});

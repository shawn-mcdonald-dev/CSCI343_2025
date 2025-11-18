// screens/DashboardScreen.js
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import HeaderGradient from "../components/HeaderGradient";
import FlightItem from "../components/FlightItem";
import DUMMY from "../data/dummy_flights";
import { ThemeContext } from "../store/context/theme-context";
import colors from "../constants/colors";
import FlightToast from "../components/FlightToast";

const DashboardScreen = ({ navigation }) => {
  const { isDark } = useContext(ThemeContext);
  const theme = isDark ? colors.dark : colors.light;

  const [flights, setFlights] = useState(DUMMY);
  const [toast, setToast] = useState(null); // { message, type }

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFlights((current) =>
        current.map((f) => {
          if (Math.random() < 0.12) {
            const newStatus = Math.random() < 0.5 ? "Delayed" : "Cancelled";

            if (newStatus === "Delayed") {
              showToast(`${f.flightNumber} is delayed`, "delay");
            } else {
              showToast(`${f.flightNumber} was cancelled`, "cancel");
            }

            return { ...f, status: newStatus };
          }

          if (Math.random() < 0.06) {
            const ns = Math.random() < 0.5 ? "En Route" : "Landed";
            return { ...f, status: ns };
          }

          return f;
        })
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePress = (item) => {
    navigation.navigate("FlightStatusStack", {
      screen: "FlightStatus",
      params: { flight: item },
    });
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <HeaderGradient title="TripGuardian" isDark={isDark} />

      <View style={[styles.container, { padding: 12 }]}>
        <FlatList
          data={flights}
          keyExtractor={(i) => i.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => (
            <FlightItem item={item} onPress={handlePress} isDark={isDark} />
          )}
        />
      </View>

      {/* Toast rendered at bottom-right */}
      {toast && (
        <FlightToast
          message={toast.message}
          type={toast.type}
          onHide={() => setToast(null)}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
});

export default DashboardScreen;

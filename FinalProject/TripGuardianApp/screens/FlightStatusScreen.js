// screens/FlightStatusScreen.js
import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import HeaderGradient from "../components/HeaderGradient";
import colors from "../constants/colors";
import { ThemeContext } from "../store/context/theme-context";

/*
  This screen shows flight disruption details and triggers alerts
  when statuses are changed (already simulated in Dashboard). When navigated,
  it expects route.params.flight
*/

const FlightStatusScreen = ({ route }) => {
  const { flight } = route.params || {};
  const { isDark } = useContext(ThemeContext);
  const theme = isDark ? colors.dark : colors.light;
  const [status, setStatus] = useState(flight?.status || "Scheduled");

  useEffect(() => {
    // If flight status is Delayed or Cancelled, show alert
    if (status === "Delayed") {
      Alert.alert(
        "Delay Alert",
        `${flight.flightNumber} is delayed. Check details below.`
      );
    } else if (status === "Cancelled") {
      Alert.alert(
        "Cancellation Alert",
        `${flight.flightNumber} is cancelled. Contact your airline.`
      );
    }
  }, [status]);

  // For demo: reflect route.param status if changed
  useEffect(() => {
    if (flight?.status) {
      setStatus(flight.status);
    }
  }, [flight]);

  if (!flight) {
    return (
      <SafeAreaView
        style={[styles.safeArea, { backgroundColor: theme.background }]}
      >
        <HeaderGradient title="Flight Status" isDark={isDark} />
        <View style={styles.container}>
          <Text style={{ color: theme.muted }}>
            No flight selected. Go to Dashboard and tap a flight.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <HeaderGradient
        title={`Status: ${flight.flightNumber}`}
        isDark={isDark}
      />
      <View style={[styles.container, { padding: 16 }]}>
        <Text style={[styles.label, { color: theme.muted }]}>Airline</Text>
        <Text style={[styles.value, { color: theme.text }]}>
          {flight.airline}
        </Text>

        <Text style={[styles.label, { color: theme.muted, marginTop: 12 }]}>
          Date
        </Text>
        <Text style={[styles.value, { color: theme.text }]}>{flight.date}</Text>

        <Text style={[styles.label, { color: theme.muted, marginTop: 12 }]}>
          Current Status
        </Text>
        <Text style={[styles.value, { color: theme.text }]}>{status}</Text>

        <View style={{ marginTop: 18 }}>
          <Text style={[styles.recommendTitle, { color: theme.text }]}>
            Recommendations
          </Text>
          {status === "Delayed" ? (
            <Text style={{ color: theme.muted, marginTop: 8 }}>
              Contact your airline for rebooking options. Consider earlier or
              later flights if available.
            </Text>
          ) : status === "Cancelled" ? (
            <Text style={{ color: theme.muted, marginTop: 8 }}>
              Contact airline support immediately to arrange rebooking or
              refund.
            </Text>
          ) : (
            <Text style={{ color: theme.muted, marginTop: 8 }}>
              Flight is on schedule. Keep an eye on notifications for updates.
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
  label: { fontSize: 13 },
  value: { fontSize: 18, marginTop: 4, fontFamily: "PlayfairBold" },
  recommendTitle: { fontSize: 16, fontFamily: "PlayfairBold" },
});

export default FlightStatusScreen;

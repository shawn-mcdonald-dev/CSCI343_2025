// components/FlightItem.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const FlightItem = ({ item, onPress, isDark }) => {
  const theme = isDark ? colors.dark : colors.light;

  // small status color mapping
  const statusColor =
    item.status === "Delayed"
      ? "#F59E0B"
      : item.status === "Cancelled"
      ? "#EF4444"
      : item.status === "Landed"
      ? "#10B981"
      : theme.primary;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[styles.container, { backgroundColor: theme.card }]}
    >
      <View style={styles.left}>
        <Text
          style={[
            styles.flightText,
            { color: theme.text, fontFamily: "PlayfairBold" },
          ]}
        >
          {item.flightNumber}
        </Text>
        <Text style={[styles.airlineText, { color: theme.muted }]}>
          {item.airline}
        </Text>
        <Text style={[styles.dateText, { color: theme.muted }]}>
          {item.date}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.status, { color: statusColor }]}>
          {item.status}
        </Text>
        <Ionicons name="chevron-forward" size={20} color={theme.muted} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  left: {},
  flightText: { fontSize: 18 },
  airlineText: { fontSize: 13, marginTop: 4 },
  dateText: { fontSize: 12, marginTop: 2 },
  right: { alignItems: "flex-end" },
  status: { fontSize: 14, marginBottom: 4 },
});

export default FlightItem;

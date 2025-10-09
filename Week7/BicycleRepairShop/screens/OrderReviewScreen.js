import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { LinearGradient } from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function OrderReviewScreen(props) {
  const {
    services,
    selectedRepairTime,
    newsletter,
    rentalMembership,
    currentPrice,
    resetOrder,
  } = props;

  const selectedServices = services.filter((s) => s.value);
  const subtotal = currentPrice;
  const tax = +(subtotal * 0.06).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  return (
    // LinearGradient expects a wrapper component; react-native-linear-gradient exports default
    // If your bundler doesn't like import, adjust import in App to:
    // import LinearGradient from 'react-native-linear-gradient';
    <LinearGradient
      colors={[Colors.primary500, Colors.accent500]}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Title text="Order Review" size={30} />

        <View style={styles.card}>
          <Text style={styles.label}>Service Time</Text>
          <Text style={styles.value}>
            {selectedRepairTime
              ? `${selectedRepairTime.label} (+ $${selectedRepairTime.price})`
              : "None"}
          </Text>

          <View style={styles.sep} />

          <Text style={[styles.label, { marginTop: 6 }]}>Services</Text>
          {selectedServices.length === 0 ? (
            <Text style={styles.value}>No services selected</Text>
          ) : (
            selectedServices.map((s) => (
              <View key={s.id} style={styles.serviceRow}>
                <Text style={styles.serviceName}>{s.name}</Text>
                <Text style={styles.servicePrice}>${s.price.toFixed(2)}</Text>
              </View>
            ))
          )}

          <View style={styles.sep} />

          <View style={styles.serviceRow}>
            <Text style={styles.serviceName}>Rental Membership</Text>
            <Text style={styles.servicePrice}>
              {rentalMembership ? "$100.00" : "$0.00"}
            </Text>
          </View>

          <View style={styles.sep} />

          <View style={styles.totals}>
            <View style={styles.totRow}>
              <Text style={styles.totLabel}>Subtotal</Text>
              <Text style={styles.totValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.totRow}>
              <Text style={styles.totLabel}>Sales Tax (6%)</Text>
              <Text style={styles.totValue}>${tax.toFixed(2)}</Text>
            </View>
            <View style={[styles.totRow, { marginTop: 6 }]}>
              <Text
                style={[styles.totLabel, { fontFamily: "Papernotes Bold" }]}
              >
                Total
              </Text>
              <Text
                style={[styles.totValue, { fontFamily: "Papernotes Bold" }]}
              >
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={styles.buttons}>
            <NavButton label="Return Home" onPress={resetOrder} />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 18,
    paddingBottom: 48,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 12,
    padding: 16,
  },
  label: {
    fontFamily: "Papernotes Bold",
    color: Colors.textDark,
  },
  value: {
    fontFamily: "Papernotes",
    color: Colors.textDark,
    marginTop: 6,
  },
  sep: {
    height: 1,
    backgroundColor: Colors.lightGray,
    marginVertical: 12,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  serviceName: {
    fontFamily: "Papernotes",
  },
  servicePrice: {
    fontFamily: "Papernotes",
  },
  totals: {
    marginTop: 6,
  },
  totRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  totLabel: {
    fontFamily: "Papernotes",
  },
  totValue: {
    fontFamily: "Papernotes",
  },
  buttons: {
    marginTop: 16,
    alignItems: "center",
  },
});

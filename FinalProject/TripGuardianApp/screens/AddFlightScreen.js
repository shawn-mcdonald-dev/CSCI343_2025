// screens/AddFlightScreen.js
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Platform,
} from "react-native";
import colors from "../constants/colors";
import HeaderGradient from "../components/HeaderGradient";
import { ThemeContext } from "../store/context/theme-context";
import DateTimePicker from "@react-native-community/datetimepicker"; // optional; expo-managed may support

let nextId = 100;

const AddFlightScreen = ({ navigation, route }) => {
  const { isDark } = useContext(ThemeContext);
  const theme = isDark ? colors.dark : colors.light;

  const [flightNumber, setFlightNumber] = useState("");
  const [airline, setAirline] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // simple validation: airline code letters + numbers -> e.g., AA1234 or AAL123
  const validateFlightNumber = (fn) => {
    // allow 2-3 letters followed by 1-5 digits
    const re = /^[A-Za-z]{2,3}\d{1,5}$/;
    return re.test(fn);
  };

  const onAdd = () => {
    if (!validateFlightNumber(flightNumber.trim())) {
      Alert.alert(
        "Invalid Flight Number",
        "Use airline code (2-3 letters) followed by numbers, e.g. AA1234"
      );
      return;
    }
    if (!airline.trim()) {
      Alert.alert("Missing Airline", "Please enter the airline name.");
      return;
    }
    // create new flight and navigate back to Dashboard with data (for now mock)
    const newFlight = {
      id: nextId++,
      flightNumber: flightNumber.trim().toUpperCase(),
      airline: airline.trim(),
      date: date.toISOString().slice(0, 10),
      status: "Scheduled",
    };

    // Pass new flight to Dashboard via navigation params (so we don't need global state for this demo)
    navigation.navigate("Dashboard", { newFlight });
  };

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <HeaderGradient title="Add New Flight" isDark={isDark} />
      <View style={[styles.container, { padding: 16 }]}>
        <Text style={[styles.label, { color: theme.muted }]}>
          Flight Number
        </Text>
        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.card, color: theme.text },
          ]}
          placeholder="e.g., AA1280"
          placeholderTextColor={theme.muted}
          value={flightNumber}
          onChangeText={setFlightNumber}
          autoCapitalize="characters"
        />

        <Text style={[styles.label, { color: theme.muted, marginTop: 12 }]}>
          Airline
        </Text>
        <TextInput
          style={[
            styles.input,
            { backgroundColor: theme.card, color: theme.text },
          ]}
          placeholder="e.g., American Airlines"
          placeholderTextColor={theme.muted}
          value={airline}
          onChangeText={setAirline}
        />

        <Text style={[styles.label, { color: theme.muted, marginTop: 12 }]}>
          Departure Date
        </Text>
        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          style={[
            styles.input,
            { justifyContent: "center", backgroundColor: theme.card },
          ]}
        >
          <Text style={{ color: theme.text }}>
            {date.toISOString().slice(0, 10)}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}

        <TouchableOpacity
          onPress={onAdd}
          style={[styles.addButton, { backgroundColor: theme.primary }]}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Track Flight</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
  label: { fontSize: 13 },
  input: {
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 6,
  },
  addButton: {
    marginTop: 20,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddFlightScreen;

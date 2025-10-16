// screens/HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import colors from "../constants/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";

/*
  HomeScreen functionality:
  - Background image with color overlay
  - Title (custom component)
  - Check-in datetime text -> opens datetime picker (stays up until confirm)
  - Check-out datetime text -> opens datetime picker (stays up until confirm)
  - Number of guests text -> opens modal with Picker (1..15)
  - Number of campsites text -> opens modal with Picker (1..5)
  - Reserve Now button (custom component NavButton)
  - After pressing Reserve Now, selections are shown below the button

  Notes:
  - Place a background image at ./assets/images/camp-bg.jpg (placeholder)
  - You can change text sizes / paddings to fit tablet/landscape.
*/

const HomeScreen = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState(null); // "checkin" or "checkout"

  const [guests, setGuests] = useState(2);
  const [campsites, setCampsites] = useState(1);

  const [isGuestsModalVisible, setGuestsModalVisible] = useState(false);
  const [isCampsitesModalVisible, setCampsitesModalVisible] = useState(false);

  const [reserved, setReserved] = useState(null);

  function showDatePicker(which) {
    setDatePickerMode(which);
    setDatePickerVisible(true);
  }

  function hideDatePicker() {
    setDatePickerVisible(false);
    setDatePickerMode(null);
  }

  function handleConfirm(date) {
    if (datePickerMode === "checkin") {
      setCheckIn(date);
      // If check-out is earlier than check-in, reset checkout
      if (checkOut && checkOut <= date) {
        setCheckOut(null);
      }
    } else if (datePickerMode === "checkout") {
      setCheckOut(date);
      // If checkin is after checkout, reset checkin
      if (checkIn && checkIn >= date) {
        setCheckIn(null);
      }
    }
    hideDatePicker();
  }

  function formatDateTime(d) {
    if (!d) return "Select";
    return d.toLocaleString();
  }

  function handleReserve() {
    // Simple validation
    if (!checkIn || !checkOut) {
      Alert.alert(
        "Incomplete",
        "Please select both check-in and check-out dates."
      );
      return;
    }
    if (checkOut <= checkIn) {
      Alert.alert("Invalid dates", "Check-out must be after check-in.");
      return;
    }
    const summary = {
      checkIn: checkIn.toString(),
      checkOut: checkOut.toString(),
      guests,
      campsites,
    };
    setReserved(summary);
  }

  return (
    <ImageBackground
      source={require("../assets/images/camp-bg.jpg")}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Title>Whispering Pines Campground</Title>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Check-in</Text>
          <TouchableOpacity
            onPress={() => showDatePicker("checkin")}
            style={styles.input}
          >
            <Text style={styles.inputText}>{formatDateTime(checkIn)}</Text>
          </TouchableOpacity>

          <Text style={[styles.label, { marginTop: 12 }]}>Check-out</Text>
          <TouchableOpacity
            onPress={() => showDatePicker("checkout")}
            style={styles.input}
          >
            <Text style={styles.inputText}>{formatDateTime(checkOut)}</Text>
          </TouchableOpacity>

          <Text style={[styles.label, { marginTop: 12 }]}>Guests</Text>
          <TouchableOpacity
            onPress={() => setGuestsModalVisible(true)}
            style={styles.input}
          >
            <Text style={styles.inputText}>
              {guests} {guests === 1 ? "guest" : "guests"}
            </Text>
          </TouchableOpacity>

          <Text style={[styles.label, { marginTop: 12 }]}>Campsites</Text>
          <TouchableOpacity
            onPress={() => setCampsitesModalVisible(true)}
            style={styles.input}
          >
            <Text style={styles.inputText}>
              {campsites} {campsites === 1 ? "site" : "sites"}
            </Text>
          </TouchableOpacity>

          <View style={{ marginTop: 20 }}>
            <NavButton title="Reserve Now" onPress={handleReserve} />
          </View>

          {reserved && (
            <View style={styles.summary}>
              <Text style={styles.summaryTitle}>Your Reservation</Text>
              <Text style={styles.summaryText}>
                Check-in: {new Date(reserved.checkIn).toLocaleString()}
              </Text>
              <Text style={styles.summaryText}>
                Check-out: {new Date(reserved.checkOut).toLocaleString()}
              </Text>
              <Text style={styles.summaryText}>Guests: {reserved.guests}</Text>
              <Text style={styles.summaryText}>
                Campsites: {reserved.campsites}
              </Text>
            </View>
          )}
        </View>

        {/* DateTime Picker Modal (stays open until Confirm) */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          // If Android, you can force the display to spinner or calendar; modal lib handles iOS vs Android.
          // We don't auto-hide until the user presses Confirm or Cancel.
        />

        {/* Guests modal with Picker (wheel-like) */}
        <Modal
          visible={isGuestsModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setGuestsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select number of guests</Text>
              <Picker
                selectedValue={guests}
                onValueChange={(val) => setGuests(val)}
                style={styles.picker}
                itemStyle={{ fontFamily: "Note", fontSize: 18 }}
              >
                {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                  <Picker.Item key={n} label={`${n}`} value={n} />
                ))}
              </Picker>

              <View style={styles.modalButtons}>
                <NavButton
                  title="Confirm"
                  onPress={() => setGuestsModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </Modal>

        {/* Campsites modal with Picker */}
        <Modal
          visible={isCampsitesModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setCampsitesModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select number of campsites</Text>
              <Picker
                selectedValue={campsites}
                onValueChange={(val) => setCampsites(val)}
                style={styles.picker}
                itemStyle={{ fontFamily: "Note", fontSize: 18 }}
              >
                {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
                  <Picker.Item key={n} label={`${n}`} value={n} />
                ))}
              </Picker>

              <View style={styles.modalButtons}>
                <NavButton
                  title="Confirm"
                  onPress={() => setCampsitesModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.muted,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.backgroundOverlay,
  },
  container: {
    padding: 18,
    paddingBottom: 40,
  },
  header: {
    marginTop: 18,
    alignItems: "center",
  },
  card: {
    marginTop: 18,
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 16,
    padding: 16,
    // Add shadow for elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  label: {
    fontFamily: "Papernotes",
    fontSize: 14,
    color: colors.text,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  inputText: {
    fontFamily: "Note",
    fontSize: 16,
    color: colors.text,
  },
  summary: {
    marginTop: 18,
    backgroundColor: "#FAFAFA",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  summaryTitle: {
    fontFamily: "Papernotes-Bold",
    fontSize: 16,
    marginBottom: 8,
  },
  summaryText: {
    fontFamily: "Note",
    fontSize: 14,
    marginBottom: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.card,
    paddingTop: 14,
    paddingBottom: Platform.OS === "ios" ? 34 : 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  modalTitle: {
    fontFamily: "Papernotes-Bold",
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    width: "100%",
    height: 180,
  },
  modalButtons: {
    marginTop: 12,
  },
});

export default HomeScreen;

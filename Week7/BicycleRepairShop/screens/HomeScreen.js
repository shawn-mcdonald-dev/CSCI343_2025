import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function HomeScreen(props) {
  const {
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
  } = props;

  return (
    <ImageBackground
      source={require("../assets/images/home-bg.jpg")}
      style={styles.bg}
      imageStyle={{ opacity: 0.85 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Title text="CycleFix Repair Shop" size={32} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Service Time</Text>
          {repairTimeRadioButtons.map((rt) => {
            const selected = selectedRepairTime?.id === rt.id;
            return (
              <TouchableOpacity
                key={rt.id}
                style={[
                  styles.radioRow,
                  selected ? styles.radioRowSelected : null,
                ]}
                onPress={() => setSelectedRepairTime(rt)}
              >
                <View style={styles.radioOuter}>
                  {selected && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.radioLabel}>
                  {rt.label} {rt.price > 0 ? `(+ $${rt.price})` : "(Free)"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Service Options</Text>
          {services.map((s) => (
            <TouchableOpacity
              key={s.id}
              style={styles.checkboxRow}
              onPress={() => toggleService(s.id)}
            >
              <View style={[styles.checkboxBox, s.value && styles.checkboxOn]}>
                {s.value && <Text style={styles.checkboxTick}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>
                {s.name} (+ ${s.price})
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.switches}>
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Sign up for newsletter</Text>
            <Switch
              value={newsletter}
              onValueChange={setNewsletter}
              thumbColor={newsletter ? Colors.primary500 : Colors.lightGray}
            />
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Rental Membership (+ $100)</Text>
            <Switch
              value={rentalMembership}
              onValueChange={setRentalMembership}
              thumbColor={
                rentalMembership ? Colors.accent500 : Colors.lightGray
              }
            />
          </View>
        </View>

        <View style={styles.submitRow}>
          <NavButton label="Submit Order" onPress={submitOrder} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    padding: 18,
    paddingBottom: 48,
  },
  section: {
    backgroundColor: "rgba(255,255,255,0.92)",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: "Papernotes Bold",
    color: Colors.textDark,
    marginBottom: 8,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  radioRowSelected: {
    backgroundColor: "rgba(0,0,0,0.03)",
    borderRadius: 8,
  },
  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary500,
  },
  radioLabel: {
    fontFamily: "Papernotes",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  checkboxBox: {
    height: 22,
    width: 22,
    borderWidth: 2,
    borderColor: Colors.textDark,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  checkboxOn: {
    backgroundColor: Colors.primary500,
    borderColor: Colors.primary500,
  },
  checkboxTick: {
    color: Colors.white,
    fontFamily: "Papernotes Bold",
  },
  checkboxLabel: {
    fontFamily: "Papernotes",
  },
  switches: {
    backgroundColor: "rgba(255,255,255,0.92)",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  switchLabel: {
    fontFamily: "Papernotes",
  },
  submitRow: {
    alignItems: "center",
    marginTop: 8,
  },
});

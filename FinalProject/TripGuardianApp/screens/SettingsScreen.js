// screens/SettingsScreen.js
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import HeaderGradient from "../components/HeaderGradient";
import { ThemeContext } from "../store/context/theme-context";
import colors from "../constants/colors";

const SUPPORT_EMAIL = "support@tripguardian.example"; // change to your support email

const SettingsScreen = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const theme = isDark ? colors.dark : colors.light;

  const onContact = () => {
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=TripGuardian%20Support&body=Hi%20Support,`;
    Linking.openURL(mailto).catch((err) => {
      console.warn("Failed to open mail client", err);
    });
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <HeaderGradient title="Settings" isDark={isDark} />
      <View style={[styles.container, { padding: 16 }]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>
            Dark / Light Mode
          </Text>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>

        <TouchableOpacity
          onPress={onContact}
          style={[styles.contactButton, { backgroundColor: theme.card }]}
        >
          <Text style={{ color: theme.text }}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: { fontSize: 16 },
  contactButton: {
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
});

export default SettingsScreen;

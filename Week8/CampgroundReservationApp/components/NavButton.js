// components/NavButton.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

/*
  NavButton:
  - Reusable button component used here for the "Reserve Now" button.
  - Props: title, onPress, style, disabled
*/

const NavButton = ({
  title = "Button",
  onPress = () => {},
  style,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.button, style, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    color: colors.white,
    fontFamily: "Note",
    fontSize: 16,
  },
  disabled: {
    opacity: 0.6,
  },
});

export default NavButton;

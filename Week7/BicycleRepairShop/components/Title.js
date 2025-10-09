import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Title({ text, size = 28, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, { fontSize: size }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    alignItems: "center",
  },
  text: {
    fontFamily: "Papernotes Bold",
    color: Colors.textDark,
  },
});

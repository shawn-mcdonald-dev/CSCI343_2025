// components/HeaderGradient.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";

const HeaderGradient = ({ title, isDark }) => {
  const theme = isDark ? colors.dark : colors.light;
  return (
    <LinearGradient
      colors={[theme.primary, theme.accent]}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.header}
    >
      <Text
        style={[
          styles.title,
          { color: theme.card, fontFamily: "PlayfairBold" },
        ]}
      >
        {title}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 96,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    fontSize: 20,
  },
});

export default HeaderGradient;

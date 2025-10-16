// components/Title.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

/*
  Title component:
  - Displays a campground name
  - Uses custom fonts loaded in App.js
  - Accepts props: children, style
*/

const Title = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    alignItems: "center",
  },
  title: {
    fontFamily: "Papernotes-Bold",
    fontSize: 32,
    color: colors.white,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
});

export default Title;

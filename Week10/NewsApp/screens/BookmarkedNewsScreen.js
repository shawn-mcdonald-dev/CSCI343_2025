import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

/*
  Left empty this week (placeholder).
*/

const BookmarkedNewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmarked News</Text>
      <Text style={styles.hint}>
        This page is left empty for now. Bookmarks will be linked in future
        work.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: "PlayfairBold",
    color: colors.text,
    marginBottom: 8,
  },
  hint: {
    fontSize: 14,
    color: colors.muted,
    textAlign: "center",
  },
});

export default BookmarkedNewsScreen;

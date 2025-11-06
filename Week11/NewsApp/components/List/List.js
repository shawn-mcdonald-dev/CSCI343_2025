import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ListingItem from "./ListingItem";
import { US_NEWS, WORLD_NEWS, TECH_NEWS } from "../../data/dummy_data";
import colors from "../../constants/colors";

/*
  List gathers and renders only items that fit the given category.
  category prop should be 'US', 'World', or 'Tech'
  onSelect should be a function(item) that navigates to detail.
*/

const List = ({ category, onSelect }) => {
  let data = [];
  switch ((category || "").toLowerCase()) {
    case "us":
      data = US_NEWS;
      break;
    case "world":
      data = WORLD_NEWS;
      break;
    case "tech":
      data = TECH_NEWS;
      break;
    default:
      data = []; // unknown category -> empty
  }

  if (!data || data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No news in this category yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ListingItem item={item} onPress={() => onSelect(item)} />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.background,
    flex: 1,
  },
  separator: {
    height: 12,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  emptyText: {
    color: colors.muted,
    fontSize: 16,
  },
});

export default List;

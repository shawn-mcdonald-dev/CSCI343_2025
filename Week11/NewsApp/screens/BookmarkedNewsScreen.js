import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { BookmarksContext } from "../store/context/bookmarks-context";
import MASTER_NEWS from "../data/dummy_data";
import ListingItem from "../components/List/ListingItem";

const BookmarkedNewsScreen = ({ navigation }) => {
  const { ids } = useContext(BookmarksContext);

  // map ids to full items, keeping the original order of ids
  const bookmarkedItems = ids
    .map((id) => MASTER_NEWS.find((n) => n.id === id))
    .filter(Boolean);

  const handleSelect = (item) => {
    navigation.navigate("NewsDetail", { item });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {bookmarkedItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.title}>No bookmarks yet</Text>
            <Text style={styles.hint}>
              Tap the bookmark icon on an article to save it here.
            </Text>
          </View>
        ) : (
          <FlatList
            data={bookmarkedItems}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ padding: 12 }}
            renderItem={({ item }) => (
              <ListingItem item={item} onPress={() => handleSelect(item)} />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1 },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 20,
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

import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";

const windowWidth = Dimensions.get("window").width;

const NewsDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked((prev) => !prev);
    // Persistence will be implemented later
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <BookmarkButton isBookmarked={bookmarked} onPress={toggleBookmark} />
      ),
    });
  }, [navigation, bookmarked]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.inner}>
        <Text style={styles.headline}>{item.headline}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.agency}>{item.agency}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

const IMAGE_HEIGHT = 260;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: windowWidth,
    height: IMAGE_HEIGHT,
    backgroundColor: "#e1e1e1",
  },
  inner: {
    padding: 16,
    backgroundColor: colors.background,
  },
  headline: {
    fontSize: 22,
    fontFamily: "PlayfairBold",
    color: colors.text,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  date: {
    color: colors.muted,
    fontSize: 13,
  },
  dot: {
    marginHorizontal: 8,
    color: colors.muted,
  },
  author: {
    color: colors.muted,
    fontSize: 13,
  },
  agency: {
    color: colors.muted,
    fontSize: 13,
  },
  description: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 22,
    marginTop: 8,
  },
});

export default NewsDetailScreen;

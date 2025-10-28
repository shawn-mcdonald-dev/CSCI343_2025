import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

/*
  Displays: image, headline, date
  onPress navigates to detail
*/

const windowWidth = Dimensions.get("window").width;

const ListingItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.headline} numberOfLines={2}>
          {item.headline}
        </Text>
        <View style={styles.metaRow}>
          <Ionicons name="time-outline" size={14} color={colors.muted} />
          <Text style={styles.dateText}>{item.date}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.agencyText}>{item.agency}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const IMAGE_HEIGHT = 92;
const IMAGE_WIDTH = IMAGE_HEIGHT * (16 / 9);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    alignItems: "center",
    padding: 8,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 8,
    backgroundColor: "#e1e1e1",
  },
  content: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 6,
    justifyContent: "center",
  },
  headline: {
    fontSize: 16,
    fontFamily: "PlayfairBold",
    color: colors.text,
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    marginLeft: 6,
    color: colors.muted,
    fontSize: 13,
  },
  dot: {
    marginLeft: 8,
    marginRight: 8,
    color: colors.muted,
  },
  agencyText: {
    color: colors.muted,
    fontSize: 13,
  },
});

export default ListingItem;

import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

/*
  A simple bookmark button that shows either outline or filled bookmark.
  Props:
    - isBookmarked: boolean
    - onPress: function
    - size: number (optional)
    - color: string (optional)
*/

const BookmarkButton = ({
  isBookmarked = false,
  onPress,
  size = 22,
  color,
}) => {
  const iconName = isBookmarked ? "bookmark" : "bookmark-outline";
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 12 }}>
      <Ionicons name={iconName} size={size} color={color || colors.accent} />
    </TouchableOpacity>
  );
};

export default BookmarkButton;

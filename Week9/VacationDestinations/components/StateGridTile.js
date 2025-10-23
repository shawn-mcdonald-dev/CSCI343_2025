import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const StateGridTile = ({ title, color, imageUrl, onSelect }) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
        <View style={[styles.container, { backgroundColor: color + "cc" }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  container: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontFamily: "Papernotes",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default StateGridTile;

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const VacationItem = ({ vacation, onSelect }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onSelect}>
      <Image source={{ uri: vacation.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{vacation.name}</Text>
        <Text>Cost: ${vacation.averageCost}</Text>
        <Text>Founded: {vacation.yearFounded}</Text>
        <Text>Rating: {vacation.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  name: {
    fontFamily: "Papernotes",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default VacationItem;

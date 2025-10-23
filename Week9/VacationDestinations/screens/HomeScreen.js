import React from "react";
import { FlatList, StyleSheet } from "react-native";
import StateGridTile from "../components/StateGridTile";
import { STATES } from "../data/dummy-data";

const HomeScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <StateGridTile
        title={item.name}
        color={item.color}
        imageUrl={item.imageUrl}
        onSelect={() =>
          navigation.navigate("VacationsOverview", { stateId: item.id })
        }
      />
    );
  };

  return <FlatList data={STATES} renderItem={renderGridItem} numColumns={2} />;
};

export default HomeScreen;

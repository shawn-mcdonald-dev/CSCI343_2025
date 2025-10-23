import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { VACATIONS } from "../data/dummy-data";
import VacationItem from "../components/VacationItem";
import ImageViewModal from "../modal/ImageViewModal";

const VacationsOverviewScreen = ({ route }) => {
  const { stateId } = route.params;
  const [selectedVacation, setSelectedVacation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const vacations = VACATIONS.filter((v) => v.stateId === stateId);

  const selectVacationHandler = (vacation) => {
    setSelectedVacation(vacation);
    setModalVisible(true);
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={vacations}
        renderItem={({ item }) => (
          <VacationItem
            vacation={item}
            onSelect={() => selectVacationHandler(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <ImageViewModal
        visible={modalVisible}
        vacation={selectedVacation}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
});

export default VacationsOverviewScreen;

import React from "react";
import { View, Text, Image, StyleSheet, Modal, Button } from "react-native";

const ImageViewModal = ({ visible, vacation, onClose }) => {
  if (!vacation) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modal}>
        <Image source={{ uri: vacation.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{vacation.name}</Text>
        <Text style={styles.description}>{vacation.description}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    fontFamily: "Papernotes",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
});

export default ImageViewModal;

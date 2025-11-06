import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import List from "../components/List/List";

const USNewsScreen = ({ navigation }) => {
  const handleSelect = (item) => {
    navigation.navigate("NewsDetail", { item });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <List category="US" onSelect={handleSelect} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F3F4F6" },
  container: { flex: 1 },
});

export default USNewsScreen;

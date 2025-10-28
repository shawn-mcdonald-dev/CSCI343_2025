import React from "react";
import { View, StyleSheet } from "react-native";
import List from "../components/List/List";
import { SafeAreaView } from "react-native-safe-area-context";

const TechNewsScreen = ({ navigation }) => {
  const handleSelect = (item) => {
    navigation.navigate("NewsDetail", { item });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <List category="Tech" onSelect={handleSelect} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default TechNewsScreen;

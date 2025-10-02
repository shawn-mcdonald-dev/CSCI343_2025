import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";

export default function AddRecipeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Add Recipe</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.recipeTitleContainer}>
            <TextInput
              onChangeText={setRecipeTitle}
              placeholder="Enter Recipe Title Here"
              style={styles.recipeTitle}
            />
          </View>

          <View style={styles.recipeTextContainer}>
            <TextInput
              onChangeText={setRecipeText}
              placeholder="Enter Recipe Instructions Here"
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
              style={styles.recipeText}
            />
          </View>

          <View style={styles.buttonRow}>
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Save</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
    backgroundColor: Colors.accent800,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 6,
  },
  recipeTitleContainer: {
    margin: 10,
  },
  recipeTitle: {
    borderWidth: 2,
    borderColor: Colors.primary500,
    padding: 8,
    fontSize: 18,
    fontFamily: "paperNote",
  },
  recipeTextContainer: {
    margin: 10,
    height: 300,
    borderWidth: 2,
    borderColor: Colors.primary500,
  },
  recipeText: {
    padding: 10,
    fontSize: 16,
    fontFamily: "paperNote",
    height: "100%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  navButton: {
    marginHorizontal: 10,
  },
});

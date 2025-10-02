import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import RecipesScreen from "./screens/RecipesScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import Colors from "./constants/colors";

export default function App() {
  // Set up our custom fonts
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Pancakes",
      text: "1. Mix flour, eggs, milk.\n2. Cook on skillet until golden.",
    },
    {
      id: 2,
      title: "Tomato Pasta",
      text: "1. Boil pasta.\n2. Saute garlic and tomatoes.\n3. Mix and serve.",
    },
    {
      id: 3,
      title: "Fruit Salad",
      text: "1. Chop apples, bananas, berries.\n2. Toss with lemon and honey.",
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("");
  }

  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => [
      ...currentRecipes,
      { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
    ]);
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  let screen = <HomeScreen onNext={recipesScreenHandler} />;

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen
        onCancel={recipesScreenHandler}
        onAdd={addRecipeHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import RecipeItem from "../components/RecipeItem";
import RecipeModal from "../components/RecipeModal";

export default function RecipesScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function recipeModalHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  function closeRecipeModalHandler() {
    setModalIsVisible(false);
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
        <Title>Saved Recipes</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <RecipeItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={() =>
                  recipeModalHandler(itemData.item.title, itemData.item.text)
                }
                onDelete={() => props.onDelete(itemData.item.id)}
              />
            );
          }}
        />
      </View>

      <RecipeModal
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeModalHandler}
      />

      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onHome}>Return Home</NavButton>
        </View>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add Recipe</NavButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  listContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});

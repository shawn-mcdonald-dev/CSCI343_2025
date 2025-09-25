import { FlatList, StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import MenuItem from "../components/MenuItem";

export default function MenuScreen(props) {
  // Setting Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [menuItems, setMenuItems] = useState([
    {
      name: "Fish & Chips",
      image: require("../assets/images/menu1.jpg"),
      price: "$33.00",
      id: 1,
    },
    {
      name: "Ahi Tuna Steak",
      image: require("../assets/images/menu2.jpg"),
      price: "$42.00",
      id: 2,
    },
    {
      name: "Grilled Salmon",
      image: require("../assets/images/menu3.jpg"),
      price: "$37.00",
      id: 3,
    },
    {
      name: "Bang Bang Grouper",
      image: require("../assets/images/menu4.jpg"),
      price: "$19.00",
      id: 4,
    },
    {
      name: "Tempura Shrimp Roll",
      image: require("../assets/images/menu5.jpg"),
      price: "$11.00",
      id: 5,
    },
  ]);

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
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          alwaysBounceHorizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItem
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Main Menu" onPress={props.onNext} color="#3b083bff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: 380,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150,
  },
});

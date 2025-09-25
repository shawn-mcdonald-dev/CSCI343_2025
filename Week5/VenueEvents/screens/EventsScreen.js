import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import EventItem from "../components/EventItem";

export default function EventsScreen(props) {
  // Setting Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [eventItems, setEventItems] = useState([
    {
      name: "American Floyd - The Ultimate Pink Floyd Tribute Experience",
      image: require("../assets/images/americanfloyd.jpg"),
      date: "01/13/2024",
      id: 1,
    },
    {
      name: "Badfish - A Tribute to Sublime",
      image: require("../assets/images/badfish.jpg"),
      date: "01/14/2024",
      id: 2,
    },
    {
      name: "Tell Me Lies - The Fleetwood Mac Experience",
      image: require("../assets/images/tellmelies.jpg"),
      date: "01/26/2024",
      id: 3,
    },
    {
      name: "Blackberry Smoke: Be Right Here Tour",
      image: require("../assets/images/blackberry.jpg"),
      date: "02/27/2024",
      id: 4,
    },
    {
      name: "Electric Avenue - The 80's MTV Experience",
      image: require("../assets/images/electric.jpg"),
      date: "02/23/2024",
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
        <Title>Events</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={eventItems}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceHorizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <EventItem
                name={itemData.item.name}
                image={itemData.item.image}
                date={itemData.item.date}
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

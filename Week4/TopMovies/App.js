import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import Movie from "./components/Movie";

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      title: "The Shawshank Redemption",
      poster: require("./assets/images/shawshank.jpg"),
      rating: "9.3",
    },
    {
      title: "The Godfather",
      poster: require("./assets/images/godfather.jpg"),
      rating: "9.2",
    },
    {
      title: "The Dark Knight",
      poster: require("./assets/images/darkknight.jpg"),
      rating: "9.0",
    },
    {
      title: "Pulp Fiction",
      poster: require("./assets/images/pulpfiction.jpg"),
      rating: "8.9",
    },
    {
      title: "Forrest Gump",
      poster: require("./assets/images/forrestgump.jpg"),
      rating: "8.8",
    },
    {
      title: "Inception",
      poster: require("./assets/images/inception.jpg"),
      rating: "8.7",
    },
    {
      title: "Fight Club",
      poster: require("./assets/images/fightclub.jpg"),
      rating: "8.8",
    },
    {
      title: "The Matrix",
      poster: require("./assets/images/matrix.jpg"),
      rating: "8.7",
    },
    {
      title: "Goodfellas",
      poster: require("./assets/images/goodfellas.jpg"),
      rating: "8.7",
    },
    {
      title: "Se7en",
      poster: require("./assets/images/seven.jpg"),
      rating: "8.6",
    },
  ]);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            data={movieItems}
            keyExtractor={(item, index) => item.title}
            renderItem={(itemData) => {
              return (
                <Movie
                  title={itemData.item.title}
                  poster={itemData.item.poster}
                  rating={itemData.item.rating}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#1e3d59",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 50,
    backgroundColor: "#f5f0e1",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },
});

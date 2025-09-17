import { Image, StyleSheet, Text, View } from "react-native";

export default function Movie(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.poster} />
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{props.rating} / 10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  itemTitleContainer: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 600,
    resizeMode: "cover",
  },
  ratingContainer: {
    backgroundColor: "white",
    borderWidth: 3,
    borderRadius: 5,
  },
  rating: {
    fontSize: 26,
    textAlign: "center",
  },
});

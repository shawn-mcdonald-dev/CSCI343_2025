import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/business_image.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Shawn McDonald</Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("mailto:sjmcdonal@coastal.edu");
            }}
          >
            sjmcdonal@coastal.edu
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("tel:8435169480");
            }}
          >
            843-516-9480
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("https://github.com/shawn-mcdonald-dev");
            }}
          >
            GitHub Profile
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    marginTop: 50,
    width: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 5,
  },
  textContainer: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },
  name: {
    fontSize: 45,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    color: "blue",
  },
});

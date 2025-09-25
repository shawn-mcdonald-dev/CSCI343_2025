import { StyleSheet, Text, View, Image, Button, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from "../constants/colors";

export default function BaseScreen(props) {
  // Setting Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

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
        <Title>Wicked Tuna</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/restaurant.jpg")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8436519987")}
        >
          (843) 6519987
        </Text>

        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/23VhFQzybpLCuNU17")
          }
        >
          4123 US-17 BUS{"\n"}Murrells Inlet{"\n"}SC 29576
        </Text>

        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://www.thewickedtuna.com/")}
        >
          www.thewickedtuna.com
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="View Menu" onPress={props.onNext} color="#3b083bff" />
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
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 20,
    textAlign: "center",
    padding: 7,
    fontFamily: "squealer",
    color: Colors.primary500,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150,
  },
});

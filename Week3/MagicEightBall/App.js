import { StatusBar } from "expo-status-bar";
import {
  Button,
  Modal,
  TextInput,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  // Magic Eight Ball possible responses
  const responses = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes, definitely",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  // State management
  const [userQuestion, setUserQuestion] = useState("");
  const [magicResponse, setMagicResponse] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startQuestionHandler() {
    if (userQuestion.trim() === "") return;
    const randomIndex = Math.floor(Math.random() * responses.length);
    setMagicResponse(responses[randomIndex]);
    setModalIsVisible(true);
  }

  function endQuestionHandler() {
    setModalIsVisible(false);
    setUserQuestion("");
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic Eight Ball</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Question"
            onChangeText={setUserQuestion}
            value={userQuestion}
          />
        </View>

        <View style={styles.submitButtonContainer}>
          <Pressable
            android_ripple={{ color: "#210644" }}
            onPress={startQuestionHandler}
            style={({ pressed }) => pressed && styles.pressedButton}
          >
            <View style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </View>
          </Pressable>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.modalQuestion}>Your Question:</Text>
            <Text style={styles.modalText}>{userQuestion}</Text>

            <Text style={styles.modalQuestion}>Magic Eight Ball Response:</Text>
            <Text style={styles.modalResponse}>{magicResponse}</Text>

            <View style={styles.closeButtonContainer}>
              <Button
                title="Close"
                color="black"
                onPress={endQuestionHandler}
              />
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ca5ec5ff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "black",
    width: "90%",
    justifyContent: "center",
    margin: 20,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    width: "90%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "black",
    borderRadius: 6,
    padding: 12,
  },
  submitButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
  submitButtonText: {
    color: "black",
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  pressedButton: {
    opacity: 0.75,
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#855583ff",
    alignItems: "center",
    padding: 20,
  },
  modalQuestion: {
    fontSize: 22,
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
  },
  modalText: {
    fontSize: 20,
    color: "white",
    marginVertical: 10,
    textAlign: "center",
  },
  modalResponse: {
    fontSize: 28,
    color: "yellow",
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButtonContainer: {
    marginTop: 40,
  },
});

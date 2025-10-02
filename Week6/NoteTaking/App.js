import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import NotesScreen from "./screens/NotesScreen";
import AddNoteScreen from "./screens/AddNoteScreen";
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
  const [currentNotes, setCurrentNotes] = useState([
    {
      id: 1,
      title: "Math Notes",
      text: "a^2 + b^2 = c^2\n2 + 2 = 4",
    },
    {
      id: 2,
      title: "Birthdays",
      text: "Dakota: 08/17/1994\nShawn 06/15/2004\nAna: 10/30/2003",
    },
    {
      id: 3,
      title: "To Do List",
      text: "1. Walk the dog\n2. Do the laundry\n3. Take out the trash",
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("");
  }

  function notesScreenHandler() {
    setCurrentScreen("notes");
  }

  function addNoteScreenHandler() {
    setCurrentScreen("add");
  }

  function addNoteHandler(enteredNoteTitle, enteredNoteText) {
    setCurrentNotes((currentNotes) => [
      ...currentNotes,
      { id: currentID, title: enteredNoteTitle, text: enteredNoteText },
    ]);
    setCurrentID(currentID + 1);
    notesScreenHandler();
  }

  function deleteNoteHandler(id) {
    setCurrentNotes((currentNotes) => {
      return currentNotes.filter((item) => item.id !== id);
    });
  }

  let screen = <HomeScreen onNext={notesScreenHandler} />;

  if (currentScreen === "notes") {
    screen = (
      <NotesScreen
        onHome={homeScreenHandler}
        onAdd={addNoteScreenHandler}
        onDelete={deleteNoteHandler}
        currentNotes={currentNotes}
      />
    );
  }

  if (currentScreen === "add") {
    screen = (
      <AddNoteScreen onCancel={notesScreenHandler} onAdd={addNoteHandler} />
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

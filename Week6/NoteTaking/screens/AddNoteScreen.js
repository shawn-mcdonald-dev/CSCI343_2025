import { StyleSheet, View, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";

export default function AddNoteScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function addNoteHandler() {
    props.onAdd(noteTitle, noteText);
    props.onCancel();
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
        <Title>Add Note</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.noteTitleContainer}>
            <TextInput
              onChangeText={setNoteTitle}
              placeholder="Enter Note Title Here"
              style={styles.noteTitle}
            />
          </View>

          <View style={styles.noteTextContainer}>
            <TextInput
              onChangeText={setNoteText}
              placeholder="Enter Note Text Here"
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
              style={styles.noteText}
            />
          </View>

          <View style={styles.navButtonContainer}>
            <NavButton onNext={props.onNext}>Go To Notes</NavButton>
          </View>

          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addNoteHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

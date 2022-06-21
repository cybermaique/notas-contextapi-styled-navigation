import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import { NotepadContext } from "../store/contextapi/NotepadContext";

const CreateNoteScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state, dispatch } = useContext(NotepadContext);
  const ParticualNote = state.find((record) => {
    return record.id === id;
  });
  const [title, setTitle] = useState(ParticualNote.title);
  const [content, setContent] = useState(ParticualNote.content);
  return (
    <View style={{ margin: 3 }}>
      <Text style={{ fontSize: 22 }}>Update Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={{ fontSize: 22 }}>Update Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="ATUALIZAR"
        onPress={() => {
          dispatch({ type: "UPDATE", payload: { id, title, content } });
          navigation.navigate("index");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 8,
  },
});

export default CreateNoteScreen;

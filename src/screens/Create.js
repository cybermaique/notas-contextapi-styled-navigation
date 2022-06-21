import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { NotepadContext } from "../store/contextapi/NotepadContext";
import Geolocation from "react-native-geolocation-service";
import { TouchableOpacity } from "react-native";

function getLocation() {
  Geolocation.getCurrentPosition(
    (pos) => {
      setLatitude(pos.coords.longitude);
      setLongitude(pos.coords.latitude);
    },
    (error) => Alert.alert("Erro", error.message),
    {
      enableHighAccuracy: false,
      timeout: 120000,
      maximumAge: 1000,
    }
  );
}

const Create = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { state, dispatch } = useContext(NotepadContext);
  return (
    <View style={{ margin: 3 }}>
      <Text style={{ fontSize: 22 }}>Título</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={{ fontSize: 22 }}>Texto</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Adicionar uma nota"
        onPress={() => {
          dispatch({ type: "ADD_POST", payload: { title, content } });
          navigation.goBack();
        }}
      />

      <TouchableOpacity title="teste" onPress={getLocation}>
        <Text>Obter minha localização</Text>
      </TouchableOpacity>
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

export default Create;

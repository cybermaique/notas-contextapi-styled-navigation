import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import { BlogContext } from "../context/BlogContext";

import Geolocation from 'react-native-geolocation-service';
import RNFusedLocationPackage from 'react-native-geolocation-service';
import { TouchableOpacity } from "react-native-gesture-handler";

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


const CreateScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { state, dispatch } = useContext(BlogContext);
  return (
    <View style={{ margin: 3 }}>
      <Text style={{ fontSize: 22 }}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={{ fontSize: 22 }}>Enter Context</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add blog post"
        onPress={() => {
          dispatch({ type: "ADD_POST", payload: { title, content } });
          navigation.goBack();
        }}
      />


<Button
title="teste"
  onPress={getLocation}>
    <Text>Obter minha localização</Text>
  </Button>


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

export default CreateScreen;

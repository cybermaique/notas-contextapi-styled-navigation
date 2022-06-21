import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import {createStackNavigator} from '@react-navigation/native-stack'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./src/screens/indexScreen";
import { BlogProvider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/Showscreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";
import EditScreen from './src/screens/EditScreen'


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={IndexScreen}
          options={{
            title: "Seu Caderninho",
            headerTitleAlign: "center",
            headerRight: () => {
              return (
                <Feather onP name="plus" size={30} style={{ marginRight: 5 }} />
              );
            },
          }}
        />
        <Stack.Screen
          name="show"
          component={ShowScreen}
          options={{ title: "view", headerTitleAlign: "center" }}
        />


        <Stack.Screen
          name="edit"
          component={EditScreen}
          options={{ title: "update note", headerTitleAlign: "center" }}
        />


        <Stack.Screen
          name="create"
          component={CreateScreen}
          options={{ title: "create", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/Index";
import { NotepadProvider } from "./src/store/contextapi/NotepadContext";
import Details from "./src/screens/Details";
import Create from "./src/screens/Create";
import { Feather } from "@expo/vector-icons";
import Edit from "./src/screens/Edit";

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
          }}
        />
        <Stack.Screen
          name="show"
          component={Details}
          options={{ title: "view", headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="edit"
          component={Edit}
          options={{ title: "update note", headerTitleAlign: "center" }}
        />

        <Stack.Screen
          name="create"
          component={Create}
          options={{ title: "create", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <NotepadProvider>
      <App />
    </NotepadProvider>
  );
};

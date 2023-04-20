import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraComponent from "./src/components/CameraComponent";
import DisplayGallery from "./src/components/DisplayGallery";
import DisplayPhoto from "./src/components/DisplayPhoto";

const Stack = createNativeStackNavigator();

export default function App() {
  [photos, setPhotos] = useState(Array());

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="CameraComponent"
          component={CameraComponent}
          initialParams={{ photos: photos, setPhotos: setPhotos }}
        />
        <Stack.Screen
          name="DisplayGallery"
          component={DisplayGallery}
          initialParams={{ photos: photos, setPhotos: setPhotos }}
        />
        <Stack.Screen
          name="DisplayPhoto"
          component={DisplayPhoto}
          initialParams={{ photo: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

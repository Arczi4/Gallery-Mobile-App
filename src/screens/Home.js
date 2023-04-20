import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("CameraComponent")}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Open Camera</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("DisplayGallery")}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Gallery</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

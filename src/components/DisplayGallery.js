import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const DisplayGallery = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.route.params.photos}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} // Set the number of columns you want to display
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => props.navigation.navigate("DisplayPhoto", {photo: item})}
          >
            <Image source={{ uri: item }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignSelf: "center",
  },
  imageContainer: {
    margin: 5,
    height: 100, // Set the height of each image container
    width: 100,
  },
  image: {
    flex: 1,
    resizeMode: "cover", // Resize the image to cover the image container
  },
});

export default DisplayGallery;

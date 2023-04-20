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
        numColumns={3} 
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => props.navigation.navigate("DisplayPhoto", {photos: props.route.params.photos})}
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
    height: 100,
    width: 100,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default DisplayGallery;

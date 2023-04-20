import React from "react";
import { Image, StyleSheet } from "react-native";

const DisplayPhoto = (props) => {
  return (
    <Image source={{ uri: props.route.params.photo }} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default DisplayPhoto;

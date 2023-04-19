import React from "react";
import { View, Text } from "react-native";

const DisplayGallery = (props) => {
	// console.log(props)
  return (
    <View>
      <Text>{props.route.params.photos}</Text>
    </View>
  );
};

export default DisplayGallery;

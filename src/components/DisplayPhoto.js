import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import ImageZoom from 'react-native-image-pan-zoom';

const DisplayPhoto = (props) => {
  return (
    <Swiper style={styles.wrapper}>
      {props.route.params.photos.map((photo, index) => {
        return (
          <View style={styles.slide} key={index}>
            <ImageZoom
              cropWidth={390}
              cropHeight={700}
              imageWidth={390}
              imageHeight={700}
							minScale={1}
							maxScale={5}
              enableCenterFocus={true}
            >
              <Image source={{ uri: photo }} style={styles.image} />
            </ImageZoom>
          </View>
        );
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default DisplayPhoto;

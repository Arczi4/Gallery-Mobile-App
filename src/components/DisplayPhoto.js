import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Button, Text } from "react-native";
import Swiper from "react-native-swiper";
import ImageZoom from "react-native-image-pan-zoom";
import TextRecognition from "react-native-text-recognition";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

const DisplayPhoto = (props) => {
  const [recognizedText, setRecognizedText] = useState("");
  const [recognizedObject, setRecognizedObject] = useState("");
  const [imageSource, setImageSource] = useState(null);


  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      const model = await mobilenet.load();
      const tensor = tf.zeros([1, 224, 224, 3]);
      const result = await model.predict(tensor);
      console.log(result);
    };
    loadModel();
  }, []);

  const recognizeTextFromImage = async (image) => {
    try {
      const result = await TextRecognition.recognize(image);
      setRecognizedText(result.text);
    } catch (error) {
      console.error(error);
    }
  };

  const recognizeObjectFromImage = async (image) => {
    try {
      setImageSource(image)
      const imageTensor = tf.image.decodeJpeg(
        tf.util.encodeString(imageSource.base64)
      );
      const model = await mobilenet.load();
      const prediction = await model.classify(imageTensor);
      setRecognizedObject(prediction)
      console.log(prediction)
    } catch (error) {
      console.error(error);
    }
  };

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
            <Button
              title={"Text recognition"}
              onPress={() => recognizeTextFromImage(photo)}
            />
            <Button
              title={"Object detection"}
              onPress={() => recognizeObjectFromImage(photo)}
            />
            <Text>{recognizedText}</Text>
            <Text>{recognizedObject}</Text>
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

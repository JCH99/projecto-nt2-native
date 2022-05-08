import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";

const Destacado = ({ item, index }) => {
  return (
    <View
      style={{
        backgroundColor: "floralwhite",
        borderRadius: 5,
        height: 200,
        padding: 50,
      }}
    >
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );
};

const Destacados = (props) => {
  const windowWidth = Dimensions.get("window").width;
  console.log(windowWidth);
  return (
    <Carousel
      loop
      autoplay
      lockScrollWhileSnapping
      data={props.data}
      sliderWidth={windowWidth}
      itemWidth={200}
      renderItem={Destacado}
    />
  );
};

export default Destacados;

import React from "react";
import { 
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions} from "react-native";
import Carousel from "react-native-snap-carousel";

const Combo = ({ item, index }) => {
  return (
    <View>
        <ImageBackground
          source={{ uri: item.img }}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.title}>{item.title}</Text>
        </ImageBackground>
    </View>  
  );
};

const Destacados = (props) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Carousel
      loop
      autoplay
      lockScrollWhileSnapping
      data={props.data}
      sliderWidth={windowWidth}
      itemWidth={200}
      renderItem={Combo}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    height: 200,
    overflow: "hidden",
    display: "flex",

    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "600",
    backgroundColor: "rgba(0,0,0,.7)",
    padding: 6,
    width: 200,
  }
});

export default Destacados;

import React from "react";
import { 
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions} from "react-native";
import Carousel from "react-native-snap-carousel";
import carrusel1 from "./../../assets/carrusel1.jpg";
import carrusel2 from "./../../assets/carrusel2.jpg";
import carrusel3 from "./../../assets/carrusel3.jpg";
import carrusel4 from "./../../assets/carrusel4.jpg";
import icon from "./../../assets/icon.png";

const imagenes = [{img: carrusel1}, {img: carrusel2}, {img: icon}, {img: carrusel3}, {img: carrusel4}];
const Promo = ({ item }) => {
  return (
    <View>
        <ImageBackground
          source={ item.img }
          resizeMode="cover"
          style={styles.image}
        />
    </View>  
  );
};

const Destacados = () => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Carousel
      loop
      autoplay
      lockScrollWhileSnapping
      data={imagenes}
      sliderWidth={windowWidth}
      itemWidth={200}
      renderItem={Promo}
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

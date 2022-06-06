import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import cancel from "../../assets/cancel.png";

const Combo = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Pressable onPress={() => setOpen(true)}>
        <ImageBackground
          source={{ uri: item.img }}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.title}>{item.title}</Text>
        </ImageBackground>
      </Pressable>

      <Modal
        animationType="fade"
        ondismiss={() => console.log("cerrar")}
        onShow={() => console.log("mostrar")}
        transparent
        visible={open}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(1,1,1, 0.5)",
            justifyContent: center,
            alignItems: center,
          }}
        >
          <View
            style={{
              height: "80%",
              width: "90%",
              backgroundColor: "#FFF",
            }}
          >
            <View
              style={{
                height: 45,
                width: "100%",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Image
                  source={cancel}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default Destacados;

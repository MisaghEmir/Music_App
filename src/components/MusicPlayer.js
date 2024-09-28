import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect,useState } from "react";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import SingelScreen from "../screen/SingelScreen";

const MusicPlayer = ({ route }) => {
  const [isModal, setIsModal] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const play = useSelector((state) => state.playReducer.play);
  const song = useSelector((state) => state.musicReducer.song);
  const status = useSelector((state) => state.musicReducer.status);
  const track = useSelector((state) => state.trackReducer.track);
  const show = useSelector((state) => state.showPlayer.show);
 

  useEffect(() => {
    // playSound();
  });

  async function playSound() {
    if (!play) {
      await song.playAsync();
      dispatch({
        type: "play",
      });
    } else {
      dispatch({
        type: "pause",
      });
      console.log("Pause Sound");
      await song.pauseAsync();
    }
  }
  return (
    <View
      style={{
        display: track ? "flex" : "none",
        width: "96%",
        backgroundColor: "#454547",
        position: "absolute",
        borderRadius: 9,
        bottom: show ? route === "playlist" ? 10 : 80 : -80,
        left: 9,
        zIndex: 999999,
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          position: "relative",
          width: "100%",
          justifyContent: "space-between",
          backgroundColor: "#454547",
          flexDirection: "row",
          height: "100%",
          padding: 6,
        }}
      >
        <Pressable onPress={() => setIsModal(true)}>
          <View style={styles.imageContainer}>
            <View>
              <Image source={{ uri: track?.image }} style={styles.image} />
            </View>
            <View>
              <Text style={{ color: "#fff" }}>{track?.name}</Text>
              <Text style={{ color: "#bababa" }}>{track?.singer}</Text>
            </View>
          </View>
        </Pressable>
        <View style={styles.icons}>
          <Pressable onPress={() => navigation.navigate("listmanu")}>
            <Entypo name="add-to-list" size={20} color={"#fff"} />
          </Pressable>
          <AntDesign name="hearto" size={23} color={"#fff"} />
          {play ? (
            <FontAwesome5
              name="pause"
              onPress={() => playSound()}
              size={23}
              color={"#fff"}
            />
          ) : (
            <FontAwesome5
              name="play"
              onPress={() => playSound()}
              size={23}
              color={"#fff"}
            />
          )}
        </View>
        <View
          style={{
            width: `${status * 100}%`,
            height: 1.3,
            backgroundColor: "#fff",
            position: "absolute",
            bottom: 1,
            left: 8,
          }}
        ></View>
        {!song?._loaded && (
          <View
            style={{
              position: "absolute",
              width: "105%",
              height: "124%",
              backgroundColor: "rgba(0,0,0,0.2)",
              left: 0,
              top: 0,
              borderRadius: 9,
            }}
          ></View>
        )}
      </View>
      <Modal
        animationType="slide"
        visible={isModal}
        style={{ margin: 0, backgroundColor: "#A95745" }}
        onRequestClose={() => {
          setIsModal(false);
        }}
      >
        <SingelScreen closeHandle={() => setIsModal(false)} />
      </Modal>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 6,
  },
  icons: {
    flexDirection: "row",
    gap: 22,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

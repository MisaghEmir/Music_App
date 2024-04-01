import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import Topbar from "../components/home/Topbar";
import Header from "../components/home/Header";
import { LinearGradient } from "expo-linear-gradient";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { getSongAll } from "../config/API";
import { useSelector, useDispatch } from "react-redux";

// import SetupPlayer from "../../SetupPlayer";
// import TrackPlayer from "react-native-track-player";

const SingelScreen = () => {
  const [song, setSong] = useState([]);
  const [message, setMessage] = useState("amir");
  const songState = useSelector((state) => state.musicReducer.song);
  const play = useSelector((state) => state.playReducer.play);
  const track = useSelector((state) => state.trackReducer.track);
  const status = useSelector((state) => state.musicReducer.status);
  console.log(songState);

  const getSong = useCallback(async () => {
    const songData = await getSongAll();
    setSong(songData.data);

    // await SetupPlayer(songData.data);
    setMessage(songData.message);
  }, []);
  const dispatch = useDispatch();

  async function playSound() {
    if (!play) {
      console.log(songState);
      console.log(play);
      dispatch({
        type: "play",
      });
      await songState.playAsync();
    } else {
      dispatch({
        type: "pause",
      });
      console.log("Pause Sound");
      await songState.pauseAsync();
    }
  }

  useEffect(() => {
    getSong();
  }, [getSong]);
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[
        "rgba(255,255,255,0.4)",
        "rgba(255,255,255,0.3)",
        "rgba(255,255,255,0.2)",
        "rgba(0,0,0,0.8)",
        "rgba(0,0,0,0.8)",
      ]}
      style={styles.container}
    >
      <Header />
      <Image
        source={{ uri: track?.image }}
        style={{
          width: "100%",
          height: 320,
          borderRadius: 2,
          marginVertical: 42,
        }}
      />
      <View style={styles.player}>
        <View>
          <Text style={{ color: "#fff" }}>Yak</Text>
          <Text style={{ color: "#bababa" }}>Ahsen Almaz</Text>
        </View>
        <View style={styles.progressContainer}>
          <View
            style={{
              width: `${status * 100}%`,
              height: "100%",
              backgroundColor: "#fff",
            }}
          ></View>
          <Pressable
            style={{
              position: "absolute",
              width: 12,
              height: 12,
              borderRadius: 50,
              backgroundColor: "#fff",
              left: `${status * 100}%`,
              top: -4,
            }}
          ></Pressable>
        </View>
        <View></View>
        <View style={styles.play}>
          <View>
            <AntDesign name="hearto" size={20} color={"#fff"} />
          </View>
          <View>
            <AntDesign name="stepbackward" size={30} color={"#fff"} />
          </View>
          <Pressable
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => playSound()}
          >
            {play ? (
              <FontAwesome5 name="pause" size={20} color={"#000"} />
            ) : (
              <FontAwesome5 name="play" size={20} color={"#000"} />
            )}
          </Pressable>
          <View>
            <AntDesign name="stepforward" size={30} color={"#fff"} />
          </View>
          <View>
            <Entypo name="add-to-list" size={20} color={"#fff"} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View>
            <MaterialIcons name="cast" size={20} color={"#fff"} />
          </View>
          <View>
            <EvilIcons name="share-google" size={25} color={"#fff"} />
          </View>
        </View>
      </View>
      <StatusBar style="light" backgroundColor="black" animated={true} />
    </LinearGradient>
  );
};

export default SingelScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#000",
    flex: 1,
  },
  player: {
    marginTop: 30,
  },
  progressContainer: {
    marginVertical: 20,
    borderRadius: 6,
    width: "100%",
    height: 4,
    position: "relative",
    backgroundColor: "#bababa",
  },
  progress: {
    width: "30%",
    height: "100%",
    backgroundColor: "#fff",
  },
  progressThump: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: "#fff",
    left: "30%",
    top: -4,
  },
  play: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

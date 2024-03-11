import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  EvilIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Audio } from "expo-av";
import { useDispatch } from "react-redux";

const MusicPlayer = () => {
  const navigation = useNavigation();
  const [sound, setSound] = useState();
  const [playMode, setPlayMode] = useState(false);
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const dispatch = useDispatch()

  async function loadSound() {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
    });
    const playbackObject = new Audio.Sound();

    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({
      uri: "https://kurdsong.storage.iran.liara.space/song/music/1708997285873-935193250.mp3",
    });
    setSound(sound);
    console.log(sound);
    dispatch({
      type: "setmusic",
      value: sound
    });
  }

  useEffect(() => {
    loadSound();
  }, []);

  async function playSound() {
    if (!playMode) {
      console.log(sound);
      await sound.playAsync();
      setPlayMode(true);
    } else {
      setPlayMode(false);
      console.log("Pause Sound");
      await sound.pauseAsync();
    }
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Single")}>
        <View style={styles.imageContainer}>
          <View>
            <Image
              source={require("../../assets/adaptive-icon.png")}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={{ color: "#fff" }}>Yak</Text>
            <Text style={{ color: "#bababa" }}>Ahsen Almaz</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.icons}>
        <MaterialIcons name="cast" size={23} color={"#fff"} />
        <AntDesign name="hearto" size={23} color={"#fff"} />
        <FontAwesome5 name="play" onPress={() => playSound()} size={23} color={"#fff"} />
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "96%",
    justifyContent: "space-between",
    backgroundColor: "#454547",
    position: "absolute",
    borderRadius: 9,
    bottom: 80,
    left: 7,
    zIndex: 999999,
    flexDirection: "row",
    padding: 6,
  },
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

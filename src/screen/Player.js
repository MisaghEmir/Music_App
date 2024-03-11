import { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

export default function Player() {
  const [sound, setSound] = useState();
  const [playMode, setPlayMode] = useState(false);
  const [permissionResponse, requestPermission] = Audio.usePermissions();

 
  async function loadSound() {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
    });
    const playbackObject = new Audio.Sound();

    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: "https://kurdsong.storage.iran.liara.space/song/music/1708997285873-935193250.mp3",
      }
     
    );
    setSound(sound);
  }


  return async function playSound() {
    if (!playMode) {
      console.log(sound);
      await sound.playAsync();
      setPlayMode(true);
    } else {
      setPlayMode(false);
      console.log("Pause Sound");
      await sound.pauseAsync();
    }
  };
}


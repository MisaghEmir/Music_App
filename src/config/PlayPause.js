import { useSelector } from "react-redux";

import { View, Text } from "react-native";
import React from "react";

const PlayPause = () => {
  return async function () {
    console.log("play");
    const sound = useSelector((state) => state.musicReducer.song);
    console.log("play");
    console.log(sound);
    const playMode = useSelector((state) => state.playReducer.play);
    if (!playMode) {
      console.log(sound);
      await sound.playAsync();
    } else {
      console.log("Pause Sound");
      await sound.pauseAsync();
    }
  };
};

export default PlayPause;

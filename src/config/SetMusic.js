import { useDispatch } from "react-redux";

export const setMusic = async () => {
  const dispatch = useDispatch()
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
  dispatch({
    type: "setmusic",
    value: sound
  });
};

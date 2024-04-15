import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  withTiming,
  withSpring,
  useSharedValue,
} from "react-native-reanimated";
import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/core";
import { getSongAll } from "../config/API";
import ListMusic from "../components/posts/ListMusic";
import MusicPlayer from "../components/MusicPlayer";
import { Audio } from "expo-av";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const SinglePlaylist = ({ route }) => {
  const navigation = useNavigation();
  const [song, setSong] = useState([]);
  const [scrollState, setScrollState] = useState(0);

  const songState = useSelector((state) => state.musicReducer.song);
  const playlistState = useSelector((state) => state.playlistReducer.playlist);
  const playState = useSelector((state) => state.playReducer.play);

  const dispatch = useDispatch();
  const { item } = route.params;
  const scrollRef = useAnimatedRef();

  const scrollHandler = useScrollViewOffset(scrollRef);

  const scrollHandle = () => {
    setScrollState(scrollHandler.value / 50);
  };

  const sv = useSharedValue(0);
  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const playAnimeted = useSharedValue(0);

  const imageStyle = useAnimatedStyle(() => {
    sv.value = withTiming(scrollState / 8);
    width.value = withTiming(scrollState / 6);
    height.value = withTiming(240 - scrollState * 60);
    playAnimeted.value = withTiming(scrollState / 8);
    return {
      // transform: [{ scaleX: 1 - width.value }, { scaleY: 1 - width.value }],
      opacity: 1 - sv.value,
    };
  });

  const playHandle = async () => {
    await songState?.pauseAsync();
    dispatch({
      type: "null",
    });
    const track = song[0];
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      staysActiveInBackground: true,
    });

    const { sound, status } = await Audio.Sound.createAsync(
      {
        // uri: "https://kurdsong.storage.iran.liara.space/song/music/1708997285873-935193250.mp3",
        uri: track.music,
      },
      {
        shouldPlay: true,
        isLooping: false,
      },
      onPlaybackStatusUpdate
    );
    onPlaybackStatusUpdate(status);
    const progress = status;
    // console.log("Loading Sound", sound._loaded);
    dispatch({
      type: "setmusic",
      value: sound,
    });
    dispatch({
      type: "setlist",
      value: song,
    });
    dispatch({
      type: "play",
    });
    dispatch({
      type: "settrack",
      value: track,
    });
    dispatch({
      type: "setplaylist",
      value: item,
    });
  };
  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded && status.isPlaying) {
      const progress = status.positionMillis / status.durationMillis;

      dispatch({
        type: "setstatus",
        value: progress,
      });
    }
  };

  const getSong = useCallback(async () => {
    const songData = await getSongAll();
    setSong(item.songsarray);
  }, []);

  useEffect(() => {
    getSong();
  }, [getSong]);
  return (
    <>
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
        <SafeAreaView>
          <Animated.ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
            scrollEventThrottle={5}
            onScroll={() => scrollHandle()}
          >
            <Text
              style={{
                paddingTop: 35,
                backgroundColor: `rgba(100,100,100,${(scrollState / 10) })`,
                top: 0,
              }}
              onPress={() => navigation.goBack()}
            >
              <Entypo name="chevron-thin-left" size={19} color={"#fff"} />
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                gap: 7,
                opacity: 1 - scrollState,
              }}
            >
              <AnimatedInput
                style={styles.input}
                placeholder={"Find in playlist"}
                placeholderTextColor={"#fff"}
              />
              <Pressable>
                <Text style={styles.sort}>Sort</Text>
              </Pressable>
            </View>
            <View style={styles.imageContainer}>
              <Animated.Image
                source={{ uri: item.image }}
                style={[
                  {
                    borderWidth: 1,
                    borderRadius: 2,
                    width: "70%",
                    height: 240,

                    borderColor: "rgba(255,255,255,0.1)",
                  },
                  imageStyle,
                ]}
                sharedTransitionTag={`image-${item._id}`}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={{ color: "#fff", fontWeight: "800" }}>
                Playlist {item.name}
              </Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text style={{ color: "#bababa" }}>Made for</Text>
                <Text style={{ color: "#fff", fontWeight: "800" }}>
                  {" "}
                  Emir Misagh
                </Text>
              </View>
              <Text style={{ color: "#bababa", marginTop: 8 }}>2h 45min</Text>
            </View>

            <View
              style={[styles.listHeader, { transform: [{ translateY: 0 }] }]}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
              >
                <AntDesign name="hearto" size={21} color={"#fff"} />
                <Entypo name="dots-three-vertical" size={20} color={"#fff"} />
              </View>
              <View>
                <Pressable
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 50,
                    backgroundColor: "#0FFF50",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => playHandle()}
                >
                  {playlistState?._id === item._id && playState ? (
                    <FontAwesome5 name="pause" size={19} color={"#000"} />
                  ) : (
                    <FontAwesome5 name="play" size={19} color={"#000"} />
                  )}
                </Pressable>
              </View>
            </View>
            <View style={styles.list}>
              {song.map((item, index) => (
                <ListMusic item={item} key={index} />
              ))}
            </View>
            <View style={styles.list}>
              {song.map((item, index) => (
                <ListMusic item={item} key={index} />
              ))}
            </View>
            <View style={styles.list}>
              {song.map((item, index) => (
                <ListMusic item={item} key={index} />
              ))}
            </View>
            <View style={styles.list}>
              {song.map((item, index) => (
                <ListMusic item={item} key={index} />
              ))}
            </View>
            <View style={styles.list}>
              {song.map((item, index) => (
                <ListMusic item={item} key={index} />
              ))}
            </View>
            <View style={styles.list}>
              {song.map((item, index) => (
                <ListMusic item={item} key={index} />
              ))}
            </View>
          </Animated.ScrollView>
        </SafeAreaView>
      </LinearGradient>

      <MusicPlayer route={"playlist"} />
      <StatusBar style="light" backgroundColor="rgb(100,100,100)" animated={true} />
    </>
  );
};

export default SinglePlaylist;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    flex: 1,
  },
  header: {
    paddingTop: 35,
    backgroundColor: "rgba(255,255,255,0.0)",
    top: 0,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 7,
    opacity: 0,
  },
  input: {
    backgroundColor: "#555",
    paddingVertical: 5,
    paddingHorizontal: 15,
    flex: 1,
    color: "#fff",
    fontWeight: "800",
    borderRadius: 3,
  },
  sort: {
    backgroundColor: "#555",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: "800",
    borderRadius: 3,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 40,
    height: 240,
  },
  image: {
    width: "71%",
    height: 240,
    borderWidth: 1,
    borderRadius: 2,
    objectFit: "cover",
    borderColor: "rgba(255,255,255,0.1)",
  },
  titleContainer: {
    marginTop: 30,
  },

  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
    transform: [{ translateY: 0 }],
  },
});

import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  Pressable,
  Touchable,
  StatusBar,
} from "react-native";
import {
  getAlbumAll,
  getCategoryAll,
  getPlaylistAll,
  getSongAll,
} from "../config/API";
import Music from "../components/posts/Music";
import Topbar from "../components/home/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import Animated from "react-native-reanimated";
import { Audio } from "expo-av";
import Playlist from "../components/posts/Playlist";
import Album from "../components/album/Album";

function HomeScreen() {
  const [song, setSong] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [album, setAlbum] = useState([]);
  const [message, setMessage] = useState("amir");
  const [catagorys, setCatagorys] = useState([]);

  const navigator = useNavigation();

  const songState = useSelector((state) => state.musicReducer.song);

  const dispatch = useDispatch();
  const getSong = useCallback(async () => {
    const songData = await getSongAll();
    const playlistData = await getPlaylistAll();
    const albumsData = await getAlbumAll();
    const categoryData = await getCategoryAll();
    setSong(songData.data);
    setPlaylist(playlistData.data);
    setAlbum(albumsData.data);
    setMessage(songData.message);
    setCatagorys(categoryData.data);
  }, []);

  useEffect(() => {
    getSong();
  }, [getSong]);

  const selectMusic = async (track) => {
    await songState?.pauseAsync();
    dispatch({
      type: "null",
    });

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
    dispatch({
      type: "setmusic",
      value: sound,
    });
    dispatch({
      type: "play",
    });
    dispatch({
      type: "setlist",
      value: song,
    });
    dispatch({
      type: "settrack",
      value: track,
    });
  };
  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded && status.isPlaying) {
      const progress = status.positionMillis / status.durationMillis;

      dispatch({
        type: "setstatus",
        value: progress,
      });
      dispatch({
        type: "settime",
        value: status.positionMillis,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Topbar />
        <View style={styles.labelContainer}>
          <View style={styles.label}>
            <Text style={styles.remember}>Remember</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.remember}>More</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "700",
              marginTop: 30,
            }}
          >
            Recently played
          </Text>
          <FlatList
            horizontal={true}
            style={{ marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
            data={song}
            renderItem={({ item }) => (
              <Pressable onPress={() => selectMusic(item)}>
                <Music music={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "700",
              marginTop: 20,
            }}
          >
            Try something else
          </Text>
          <FlatList
            horizontal={true}
            style={{ marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
            data={album}
            renderItem={({ item }) => (
              <Pressable>
                <Album album={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "700",
              marginTop: 20,
            }}
          >
            Fresh new music
          </Text>
          <FlatList
            horizontal={true}
            style={{ marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
            data={catagorys}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigator.navigate("SinglePlaylist", { item })}
              >
                <Album album={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "700",
              marginTop: 20,
            }}
          >
            Fresh new music
          </Text>
          <FlatList
            horizontal={true}
            style={{ marginTop: 20, marginBottom: 150 }}
            showsHorizontalScrollIndicator={false}
            data={playlist}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigator.navigate("SinglePlaylist", { item })}
              >
                <Playlist music={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
      </ScrollView>
      <StatusBar
        style="black"
        barStyle="dark-content"
        backgroundColor="black"
        animated={true}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "rgb(15,15,15)",
    flex: 1,
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 11,
    marginTop: 10,
  },
  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: "#282828",
  },
  remember: {
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 25,
  },
  button: {
    color: "red",
  },
  postContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

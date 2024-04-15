import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { getSingerAll, getPlaylistAll, getAlbumAll } from "../config/API";
import SingerRow from "../components/singer/SingerRow";
import ListMusic from "../components/posts/ListMusic";
import { useNavigation } from "@react-navigation/core";
import AlbumRow from "../components/album/AlbumRow";
import PlaylistRow from "../components/playlist/PlaylistRow";
import Animated from "react-native-reanimated";

const LibararyScreen = () => {
  const [playlist, setPlaylist] = useState([]);
  const [singers, setSingers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const navigator = useNavigation();

  const getItems = useCallback(async () => {
    const playlistData = await getPlaylistAll();
    const singersData = await getSingerAll();
    const albumsData = await getAlbumAll();
    setPlaylist(playlistData.data);
    setSingers(singersData.data);
    setAlbums(albumsData.data);
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tapbar}>
        <View>
          <Text
            style={styles.logo}
            
          >
            Your Library
          </Text>
        </View>
        <View style={styles.search}>
          <Text>
            <FontAwesome name="search" size={20} color={"#fff"} />
          </Text>
          <Text>
            <FontAwesome6 name="add" size={20} color={"#fff"} />
          </Text>
        </View>
      </View>
      <Animated.ScrollView 
       showsHorizontalScrollIndicator={false}
       showsVerticalScrollIndicator={false}
       scrollEventThrottle={5}
       onScroll={() => {}}
      >
        <View style={styles.labelContainer}>
          <View style={styles.label}>
            <Text style={styles.remember}>Remember</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.remember}>More</Text>
          </View>
        </View>
        <Animated.ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={5}
        onScroll={() => {}}
        >
          <FlatList
            style={{ marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
            data={singers}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigator.navigate("Singer", { item })}>
                <SingerRow item={item} />
              </Pressable>
            )}
            keyExtractor={(item) => item._id}
          />
          <FlatList
            style={{ marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
            data={playlist}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigator.navigate("SinglePlaylist", { item })}
              >
                <PlaylistRow item={item} type={"Playlist"} />
              </Pressable>
            )}
            keyExtractor={(item) => item._id}
          />
          <FlatList
            style={{ marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
            data={albums}
            renderItem={({ item }) => (
              <Pressable>
                <AlbumRow item={item} type={"Album"} />
              </Pressable>
            )}
            keyExtractor={(item) => item._id}
          />
        </Animated.ScrollView>
      </Animated.ScrollView>
      <Text>LibararyScreen</Text>
    </SafeAreaView>
  );
};

export default LibararyScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    flex: 1,
  },
  tapbar: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 35,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  search: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
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
});

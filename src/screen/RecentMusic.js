import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { getPlaylistAll, getSongAll } from "../config/API";
import ListMusic from "../components/posts/ListMusic";
import AlbumRow from "../components/album/AlbumRow";
import { useAnimatedRef, useScrollViewOffset } from "react-native-reanimated";

const RecentMusic = () => {
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [scroll, setScroll] = useState(0);
  const navigation = useNavigation();

  const scrollRef = useAnimatedRef();
  const scrollHandler = useScrollViewOffset(scrollRef);

  const inputStyle = () => {
    console.log(scrollHandler.value / 100);
    setScroll(scrollHandler.value / 100);
  };

  const getItems = useCallback(async () => {
    const songstData = await getSongAll();
    const playlistData = await getPlaylistAll();
    setPlaylist(playlistData.data);
    setSongs(songstData.data);
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingTop: 60 }}
            ref={scrollRef}
            onScroll={() => inputStyle()}
          >
            <View style={{ marginTop: 30 }}>
              <Text style={{ color: "#fff", fontSize: 27, fontWeight: "900" }}>
                Today
              </Text>
              <View>
                {playlist.map(
                  (item, index) =>
                    index === 1 && (
                      <AlbumRow item={item} key={index} type={"Album"} />
                    )
                )}
              </View>
              <View style={{ paddingLeft: 20 }}>
                {songs.map(
                  (item, index) =>
                    index === 1 && <ListMusic item={item} key={index} />
                )}
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ color: "#fff", fontSize: 27, fontWeight: "900" }}>
                Thu, 14 Mar 2024
              </Text>
              <View>
                {playlist.map(
                  (item, index) =>
                    index === 2 && (
                      <AlbumRow item={item} key={index} type={"Album"} />
                    )
                )}
              </View>
              <View style={{ paddingLeft: 20 }}>
                {songs.map(
                  (item, index) =>
                    index === 2 && <ListMusic item={item} key={index} />
                )}
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ color: "#fff", fontSize: 27, fontWeight: "900" }}>
                Fri, 2 Mar 2024
              </Text>
              <View>
                {playlist.map(
                  (item, index) =>
                    index === 1 && (
                      <AlbumRow item={item} key={index} type={"Album"} />
                    )
                )}
              </View>
              <View style={{ paddingLeft: 20 }}>
                {songs.map(
                  (item, index) =>
                    index > 1 && <ListMusic item={item} key={index} />
                )}
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ color: "#fff", fontSize: 27, fontWeight: "900" }}>
                Sat, 1 Mar 2024
              </Text>
              <View>
                {playlist.map(
                  (item, index) =>
                    index === 2 && (
                      <AlbumRow item={item} key={index} type={"Album"} />
                    )
                )}
              </View>
              <View style={{ paddingLeft: 20 }}>
                {songs.map(
                  (item, index) =>
                    index === 2 && <ListMusic item={item} key={index} />
                )}
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ color: "#fff", fontSize: 27, fontWeight: "900" }}>
                Sat, 1 Mar 2024
              </Text>
              <View>
                {playlist.map(
                  (item, index) =>
                    index === 2 && (
                      <AlbumRow item={item} key={index} type={"Album"} />
                    )
                )}
              </View>
              <View style={{ paddingLeft: 20 }}>
                {songs.map(
                  (item, index) =>
                    index === 2 && <ListMusic item={item} key={index} />
                )}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          top: 20,
          zIndex: 0,
          paddingVertical: 15,
          width: "100%",
          paddingHorizontal: 25,
          backgroundColor: `rgba(30,30,30,${scroll - 1.5})`,
        }}
      >
        <Text
          style={{
            color: "#fff",
            padding: 5,
            borderRadius: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Text>
        <Text style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>
          Recently played
        </Text>
        <Text>kijjbb</Text>
      </View>
    </>
  );
};

export default RecentMusic;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 15,
    backgroundColor: "rgb(10,10,10)",
    flex: 1,
    position: "relative",
  },
});

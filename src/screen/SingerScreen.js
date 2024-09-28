import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import BarButton from "../components/BarButton";
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { getAlbumAll, getPlaylistAll, getSongAll } from "../config/API";
import ListMusic from "../components/posts/ListMusic";
import AlbumRow from "../components/album/AlbumRow";
import { StatusBar } from "expo-status-bar";

const SingerScreen = ({ route }) => {
  const [fixHeader, setFixHeader] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [albums, setAlbums] = useState([]);

  const { item } = route.params;
  const scrollRef = useAnimatedRef();
  const scrollHandler = useScrollViewOffset(scrollRef);

  const navigation = useNavigation();

  const inputStyle = () => {
    console.log(scrollHandler.value / 100);
    console.log(fixHeader);
    setScroll(scrollHandler.value / 100);
    if (scrollHandler.value / 100 > 2.7) setFixHeader(true);
    else setFixHeader(false);
  };

  const imageStyle = useAnimatedStyle(() => {
    console.log(scrollHandler.value / 100);
    return {
      opacity: scrollHandler.value > 50 ? scrollHandler.value / 100 : 1,
    };
  });

  const getItems = useCallback(async () => {
    const songstData = await getSongAll();
    const playlistData = await getPlaylistAll();
    const albumsData = await getAlbumAll();
    setPlaylist(playlistData.data);
    setSongs(songstData.data);
    setAlbums(albumsData.data);
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: "100%", height: 350, borderWidth: 0 }}
        />
      </View>

      <Animated.ScrollView
        style={styles.scroll}
        // stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        onScroll={() => inputStyle()}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={[
            `rgba(25,25,25,${scroll})`,
            `rgba(25,25,25,${scroll})`,
            `rgba(25,25,25,${scroll})`,
            `rgba(25,25,25,${scroll + 0.2})`,
            `rgba(25,25,25,${scroll + 0.7})`,
          ]}
          style={styles.name}
        >
          <Text
            numberOfLines={1}
            style={{ color: "#fff", fontSize: 60, fontWeight: "900" }}
          >
            {item.name}
          </Text>
        </LinearGradient>
        <View style={styles.main}>
          <View style={styles.view}>
            <View>
              <Text style={{ color: "#bababa", fontSize: 13 }}>
                102.4M monthly listeners
              </Text>
            </View>
            <View style={styles.followContainer}>
              <View style={styles.followLeft}>
                <Pressable style={styles.followButton} onPress={() => {}}>
                  <Text style={{ color: "#fff", fontWeight: "700" }}>
                    Following
                  </Text>
                </Pressable>
                <Pressable onPress={() => {}}>
                  <Entypo
                    name="dots-three-vertical"
                    size={24}
                    color={"#bababa"}
                  />
                </Pressable>
              </View>
              <View style={styles.followRight}>
                <Pressable
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 50,
                    backgroundColor: "#0FFF50",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                  }}
                  onPress={() => {}}
                >
                  <FontAwesome5 name="play" size={19} color={"#000"} />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={styles.descript}>
            <Text style={{ color: "#fff" }}>{item.name}</Text>
            <Text style={{ color: "#fff" }}>songs 6 min 50 sec</Text>
            <Text style={{ color: "#fff" }}>songs 6 min 50 sec</Text>
          </View>
          <View style={styles.topAlbum}>
            <Text style={{ color: "#fff" }}>Artist Top</Text>
            <Text style={{ color: "#fff" }}>Album</Text>
            <Text style={{ color: "#fff" }}>Song</Text>
          </View>
          <View style={styles.moreAlbum}>
            <Text style={{ color: "#fff" }}>Releases</Text>
            <FlatList
              style={{ marginTop: 20 }}
              showsHorizontalScrollIndicator={false}
              data={albums}
              renderItem={({ item }) => (
                <Pressable>
                  <AlbumRow item={item} type={"Album"} />
                  <AlbumRow item={item} type={"Album"} />
                </Pressable>
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
          <View style={styles.moreSong}>
            <Text style={{ color: "#fff" }}>Releases</Text>
            <View>
              <FlatList
                style={{ marginTop: 20 }}
                showsHorizontalScrollIndicator={false}
                data={songs}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() =>
                      navigator.navigate("SinglePlaylist", { item })
                    }
                  >
                    <ListMusic item={item} />
                  </Pressable>
                )}
                keyExtractor={(item) => item._id}
              />
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <TextInput style={{ backgroundColor: "#fff" }} />
          <Text style={{ color: "#fff", fontSize: 28 }}></Text>
        </View>
        <View style={styles.main}>
          <Text style={{ color: "#fff", fontSize: 28 }}>amir</Text>
        </View>
      </Animated.ScrollView>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          top: 0,
          zIndex: 0,
          paddingVertical: 15,
          paddingTop: 35,
          width: "100%",
          paddingHorizontal: 25,
          backgroundColor: `rgba(30,30,30,${scroll - 1.5})`,
        }}
      >
        <Text
          style={{
            color: "#fff",
            backgroundColor: "rgb(30,30,30)",
            padding: 5,
            borderRadius: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Text>
      </View>
      <StatusBar
        style="light"
        backgroundColor={`rgba(30,30,30,${scroll - 1.5})`}
      />
    </View>
  );
};

export default SingerScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingTop: 0,
    backgroundColor: "rgb(10,10,10)",
    flex: 1,
    position: "relative",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    backgroundColor: "black",
    height: 350,
    width: "100%",
    opacity: 0.9,
  },
  scroll: {},
  name: {
    height: 270,
    justifyContent: "flex-end",
    padding: 15,
    paddingVertical: 0,
  },
  main: {
    backgroundColor: "rgb(25,25,25)",
    flex: 1,
    margin: 0,
    paddingHorizontal: 20,
    paddingVertical: 17,
    borderWidth: 0,
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  followLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  followButton: {
    borderWidth: 1.2,
    borderColor: "#fff",
    padding: 17,
    paddingVertical: 6,
    borderRadius: 5,
  },
});

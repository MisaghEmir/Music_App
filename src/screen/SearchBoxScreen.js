import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Music from "../components/posts/Music";
import { useNavigation } from "@react-navigation/core";
import { getPlaylistAll,  getSongAll } from "../config/API";
import { Ionicons } from "@expo/vector-icons";

const SearchBoxScreen = ({ route }) => {
  const { item } = route.params;

  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [message, setMessage] = useState("amir");

  const navigator = useNavigation();

  const getSong = useCallback(async () => {
    const songData = await getSongAll();
    const playlistData = await getPlaylistAll();
    setSongs(songData.data);
    setPlaylist(playlistData.data);
    setMessage(songData.message);
  }, []);

  useEffect(() => {
    getSong();
  }, [getSong]);
  return (
    <>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(25, 74, 114,1)",
          "rgba(25, 74, 114,0.6)",
          "rgba(25, 74, 114,0.2)",
          "rgb(0, 0, 0)",
          "rgba(0,0,0,0.0)",
          "rgba(0,0,0,0.0)",
        ]}
        style={styles.container}
      >
        <ScrollView
        style={{marginTop: 70}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={5}
        onScroll={() => {}}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 28,
                fontWeight: "900",
                marginTop: 10,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 19,
                fontWeight: "700",
                marginTop: 40,
              }}
            >
              The best new releases
            </Text>
            <FlatList
              horizontal={true}
              style={{ marginTop: 10 }}
              showsHorizontalScrollIndicator={false}
              data={songs}
              renderItem={({ item }) => (
                <Pressable>
                  <Music music={item} />
                </Pressable>
              )}
              keyExtractor={(item) => item._id}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 19,
                fontWeight: "700",
                marginTop: 40,
              }}
            >
              The best new releases
            </Text>
            <FlatList
              horizontal={true}
              style={{ marginTop: 10 }}
              showsHorizontalScrollIndicator={false}
              data={songs}
              renderItem={({ item }) => (
                <Pressable>
                  <Music music={item} />
                </Pressable>
              )}
              keyExtractor={(item) => item._id}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 19,
                fontWeight: "700",
                marginTop: 40,
              }}
            >
              The best new releases
            </Text>
            <FlatList
              horizontal={true}
              style={{ marginTop: 10 }}
              showsHorizontalScrollIndicator={false}
              data={songs}
              renderItem={({ item }) => (
                <Pressable>
                  <Music music={item} />
                </Pressable>
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
        </ScrollView>
      </LinearGradient>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            top: 0,
            zIndex: 0,
            paddingVertical: 20,
            paddingTop: 40,
            width: "100%",
            paddingHorizontal: 10,
            backgroundColor:"rgba(25, 74, 114,0.0)"
          }}
        >
          <Text
            style={{
              color: "#fff",
              padding: 5,
              borderRadius: 50,
            }}
            onPress={() => navigator.goBack()}
          >
            <Ionicons name="arrow-back" size={26} color="#fff" />
          </Text>
        </View>
      <StatusBar
        style="light"
        backgroundColor="rgba(25, 74, 114,0.0)"
        animated={true}
      />
    </>
  );
};

export default SearchBoxScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "rgb(15,15,15)",
    flex: 1,
  },
});

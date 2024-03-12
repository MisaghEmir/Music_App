import React, { useEffect, useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  Pressable,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { getSongAll } from "../config/API";
import Music from "../components/posts/Music";
import Topbar from "../components/home/Topbar";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import Animated from "react-native-reanimated";

function HomeScreen() {
  const [song, setSong] = useState([]);
  const [message, setMessage] = useState("amir");

  const navigator = useNavigation();

  const dispatch = useDispatch();
  const getSong = useCallback(async () => {
    const songData = await getSongAll();
    setSong(songData.data);
    setMessage(songData.message);
  }, []);

  useEffect(() => {
    getSong();
  }, [getSong]);
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
              marginTop: 20,
            }}
          >
            Try something else
          </Text>
          <FlatList
            horizontal={true}
            style={{ marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
            data={song}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  dispatch({
                    type: "settrack",
                    value: item,
                  });
                }}
              >
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
              marginTop: 7,
            }}
          >
            Try something else
          </Text>
          <FlatList
            horizontal={true}
            style={{ marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
            data={song}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigator.navigate("SinglePlaylist", { item })}
              >
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
              marginTop: 7,
            }}
          >
            Try something else
          </Text>
          <FlatList
            horizontal={true}
            style={{ marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
            data={song}
            renderItem={({ item }) => (
              <TouchableOpacity  onPress={() => navigator.navigate("SinglePlaylist", { item })}>
                <Animated.Image
                  source={{ uri: item.image }}
                  style={{
                    width: 153,
                    height: 150,
                    objectFit: "cover",
                    borderWidth: 1,
                    borderRadius: 3,
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                  sharedTransitionTag={`image-${item._id}`}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
      </ScrollView>
      <StatusBar style="black" backgroundColor="black" animated={true} />
    </SafeAreaView>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    flex: 1,
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 11,
    marginTop: 20,
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

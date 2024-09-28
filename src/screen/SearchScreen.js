import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import SearchBox from "../components/box/SearchBox";
import { getPlaylistAll, getSingerAll, getSongAll } from "../config/API";
import Animated from "react-native-reanimated";
import SingerRow from "../components/singer/SingerRow";
import Music from "../components/posts/Music";
import PlaylistRow from "../components/playlist/PlaylistRow";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";

const SearchScreen = () => {
  const [songs, setSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [SearchArray, setSearchArray] = useState([]);
  const [fucos, setFucos] = useState(false);
  const [singers, setSingers] = useState([]);

  const navigator = useNavigation();

  const getSong = useCallback(async () => {
    const playlistData = await getPlaylistAll();
    const singersData = await getSingerAll();
    const songData = await getSongAll();
    setSongs(songData.data);
    setSingers(singersData.data);
    setPlaylist(playlistData.data);
  }, []);

  useEffect(() => {
    getSong();
  }, [getSong]);

  const dispatch = useDispatch();

  const searchHandle = (value) => {
    let searchInaput = value;
    let singerCopy = singers;
    if (searchInaput !== "") {
      let serch = playlist.filter((item) => {
        if (item.name.toLowerCase().includes(searchInaput.toLowerCase())) {
          return item;
        }
      });
      setSearchArray(serch);
    } else setSearchArray([]);
    if (searchInaput !== "") {
      let serchSinger = singers.filter((item) => {
        if (item.name.toLowerCase().includes(searchInaput.toLowerCase())) {
          return item;
        }
      });
      setSingers(serchSinger);
    } else setSingers(singerCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.tapbar}>
          <View>
            {!fucos && (
              <Text
                style={styles.logo}
                onPress={() => navigation.navigate("Single")}
              >
                Search
              </Text>
            )}
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="What do you want to listen to?"
            onFocus={() => {setFucos(true),  dispatch({
              type: "hidden",
            });}}
            onBlur={() => {setFucos(false),  dispatch({
              type: "show",
            });}}
            onChangeText={searchHandle}
          />
          <View style={styles.icon}>
            <Text style={{ fontWeight: "100" }}>
              <FontAwesome
                name="search"
                size={24}
                style={{ fontWeight: "100" }}
                color={"#000"}
              />
            </Text>
          </View>
        </View>
        {fucos ? (
          SearchArray.length === 0 ? (
            <View style={styles.noFound}>
              <Text style={{ color: "#fff", fontSize: 18 }}>
                Play what you love
              </Text>
              <Text style={{ color: "#bababa" }}>
                Search for artistm song, playlist or Album
              </Text>
            </View>
          ) : (
            <>
              <View style={styles.labelContainer}>
                <View style={styles.label}>
                  <Text style={styles.remember}>Top</Text>
                </View>
                <View style={styles.label}>
                  <Text style={styles.remember}>Artists</Text>
                </View>
                <View style={styles.label}>
                  <Text style={styles.remember}>Playlists</Text>
                </View>
                <View style={styles.label}>
                  <Text style={styles.remember}>Songs</Text>
                </View>
                <View style={styles.label}>
                  <Text style={styles.remember}>Albums</Text>
                </View>
              </View>
              <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.searchMain}
                scrollEnabled={true}
                scrollEventThrottle={16}
              >
                {singers.map((item, index) => (
                  <View key={index}>
                    <Pressable>
                      <SingerRow item={item} />
                    </Pressable>
                    {index === 0 && (
                      <View>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 22,
                            fontWeight: "600",
                            marginTop: 20,
                          }}
                        >
                          Single Track
                        </Text>
                        <FlatList
                          horizontal={true}
                          style={{ marginVertical: 10 }}
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
                    )}
                  </View>
                ))}

                <FlatList
                  style={{ marginTop: 20 }}
                  showsHorizontalScrollIndicator={false}
                  data={SearchArray}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 15,
                        width: 168,
                        marginTop: 0,
                      }}
                    >
                      <PlaylistRow item={item} type={"Playlist"} />
                    </View>
                  )}
                  keyExtractor={(item) => item._id}
                />
              </Animated.ScrollView>
            </>
          )
        ) : SearchArray.length === 0 ? (
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.main}
            scrollEnabled={true}
            scrollEventThrottle={16}
          >
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Browse all
              </Text>
            </View>
            <View style={{ height: 500 }}>
              <FlatList
                style={{ marginTop: 20 }}
                showsHorizontalScrollIndicator={false}
                data={playlist}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      width: 172,
                      marginTop: 10,
                    }}
                  >
                   
                      <SearchBox color={"#00AB8C"} item={item} />
                  
                      <SearchBox
                        color={
                          "#" +
                          (((1 << 24) * Math.random()) | 0)
                            .toString(16)
                            .padStart(6, "0")
                        }
                        item={item}
                      />
                  </View>
                )}
                keyExtractor={(item) => item._id}
              />
            </View>
          </Animated.ScrollView>
        ) : (
          <>
          <View style={styles.labelContainer}>
            <View style={styles.label}>
              <Text style={styles.remember}>Top</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.remember}>Artists</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.remember}>Playlists</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.remember}>Songs</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.remember}>Albums</Text>
            </View>
          </View>
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.searchMain}
            scrollEnabled={true}
            scrollEventThrottle={16}
          >
            {singers.map((item, index) => (
              <View key={index}>
                <Pressable>
                  <SingerRow item={item} />
                </Pressable>
                {index === 0 && (
                  <View>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 22,
                        fontWeight: "600",
                        marginTop: 20,
                      }}
                    >
                      Single Track
                    </Text>
                    <FlatList
                      horizontal={true}
                      style={{ marginVertical: 10 }}
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
                )}
              </View>
            ))}

            <FlatList
              style={{ marginTop: 20 }}
              showsHorizontalScrollIndicator={false}
              data={SearchArray}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    gap: 15,
                    width: 168,
                    marginTop: 0,
                  }}
                >
                  <PlaylistRow item={item} type={"Playlist"} />
                </View>
              )}
              keyExtractor={(item) => item._id}
            />
          </Animated.ScrollView>
        </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#000",
    flex: 1,
  },
  main: {
    flexDirection: "column",
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
  inputContainer: {
    position: "relative",
    marginVertical: 15,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 40,
    fontSize: 16,
    borderRadius: 4,
  },
  searchMain: {
    height: "79%",
    paddingVertical: 0,
  },
  noFound: {
    height: "79%",
    paddingVertical: 158,
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingVertical: 1,
    marginTop: 0,
    paddingBottom: 10,
  },
  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 0.58,
    borderColor: "#fff",
    paddingTop: 5,
  },
  remember: {
    color: "#fff",
    fontSize: 13,
  },
});

import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { Entypo, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import RangeSlider from "react-native-range-slider";

const Lyrics = ({ closeHandle }) => {
  const track = useSelector((state) => state.trackReducer.track);
  const playlistState = useSelector((state) => state.playlistReducer.playlist);
  const time = useSelector((state) => state.musicReducer.time);
  const play = useSelector((state) => state.playReducer.play);
  const songState = useSelector((state) => state.musicReducer.song);
  const status = useSelector((state) => state.musicReducer.status);

  const dispatch = useDispatch();

  async function playSound() {
    if (!play) {
      console.log(songState);
      console.log(play);
      dispatch({
        type: "play",
      });
      await songState.playAsync();
    } else {
      dispatch({
        type: "pause",
      });
      console.log("Pause Sound");
      await songState.pauseAsync();
    }
  }

  const change_time = (time) => {
    var min = Math.floor(time / 60000);
    var second = Math.floor((time % 60000) / 1000);

    return `${min < 10 ? `0${min}` : min}:${
      second < 10 ? `0${second}` : second
    }`;
  };

  const change_durtion = (time) => {
    var min = parseInt(time / 60);
    var second = parseInt(time - min * 60);

    if (second > 9) return min.toString() + ":" + second.toString();
    else return min.toString() + ":0" + second.toString();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingVertical: 5,
          gap: 90,
        }}
      >
        <Text onPress={() => closeHandle()}>
          <Entypo name="chevron-thin-down" size={19} color={"#fff"} />
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              color: "rgb(200,200,200)",
              textAlign: "center",
              fontSize: 10,
            }}
          >
            PLAYING FROM {track.singer[0].toUpperCase()}
          </Text>
          <Text
            style={{
              color: "rgb(255,255,255)",
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            {track.name.toUpperCase()}
          </Text>
        </View>
        <View></View>
      </View>
      <ScrollView>
        {track.lyric.map((item, index) => (
          <Text
            numberOfLines={8}
            style={{
              fontSize: 21,
              marginVertical: 10,
              fontWeight: "700",
              color:
                Math.floor((time % 60000) / 1000) >= item.timeStart &&
                Math.floor((time % 60000) / 1000) <= item.timeEnd
                  ? "#fff"
                  : "#000",
            }}
          >
            {item.lyrics}
          </Text>
        ))}

        <StatusBar style="light" backgroundColor="#A95745" animated={true} />
      </ScrollView>
      <View>
        {/* <Pressable
          style={styles.progressContainer}
          onPress={(e) => {
            console.log(e.target);
          }}
        >
          <View
            style={{
              width: status ? `${status * 100}%` : "0%",
              height: "100%",
              backgroundColor: "#fff",
            }}
          ></View>
        </Pressable> */}
     
        <View style={styles.timeContainer}>
          <Text style={{ fontSize: 12, color: "#fff" }}>
            {change_time(time)}
          </Text>
          <Text style={{ fontSize: 12, color: "#fff" }}>
            {change_durtion(track.duration)}
          </Text>
        </View>
        <View style={styles.playContainer}>
          <View></View>
          <View>
            <Pressable
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => playSound()}
            >
              {play ? (
                <FontAwesome5 name="pause" size={20} color={"#000"} />
              ) : (
                <FontAwesome5 name="play" size={20} color={"#000"} />
              )}
            </Pressable>
          </View>
          <View>
            <Entypo name="share" size={27} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Lyrics;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#A95745",
    padding: 20,
    paddingTop: 5,
  },
  progressContainer: {
    marginVertical: 7,
    borderRadius: 6,
    width: "100%",
    height: 3.5,
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  progress: {
    width: "30%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    left: 0,
  },
  progressThump: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: "#fff",
    left: "30%",
    top: -4,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  playContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 100,
    paddingVertical: 0,
  },
});

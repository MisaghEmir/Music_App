import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

const Playlist = ({ music }) => {
  return (
    <View style={styles.container}>
      <View>
        <Animated.Image
          source={{ uri: music.image }}
          style={{
            width: 153,
            height: 150,
            objectFit: "cover",
            borderWidth: 1,
            borderRadius: 3,
            borderColor: "rgba(255,255,255,0.07)",
          }}
          sharedTransitionTag={`image-${music._id}`}
        />
      </View>
      <View>
        <Text style={styles.title}>{music.name}</Text>
        <View style={{ color: "#bababa", flexDirection: "row" }}>
          <Text numberOfLines={2} style={{ color: "#bababa", fontSize: 12, width: 150 }}>
          {music.singersarray.map((item, index) => (
            <>
              {item.name}
              {index === music.singersarray.length - 1 ? "" : ", "}
            </>
              ))}
              </Text>
        </View>
      </View>
    </View>
  );
};

export default Playlist;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  title: {
    color: "#fff",
    marginTop: 10,
  },
});

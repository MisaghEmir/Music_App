import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

const Music = ({ music }) => {
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
        <Text numberOfLines={1} style={styles.title}>
          {music.name}
        </Text>
        <View style={{ flexDirection: "row", gap: 4, marginTop: 5,alignItems: "center" }}>
          <Text
            style={{
              color: "#000",
              fontSize: 9,
              fontWeight: "900",
              backgroundColor: "gray",
              padding: 1,
              paddingHorizontal: 3,
              borderRadius: 3,
            }}
          >
            LYRICS
          </Text>
          <Text
            numberOfLines={1}
            style={{ color: "#bababa", fontSize: 12.1 }}
          >
            {music.singer}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  title: {
    color: "#fff",
    marginTop: 10,
    width: 143,
  },
});

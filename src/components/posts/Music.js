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
            borderColor: "rgba(255,255,255,0.2)",
          }}
          sharedTransitionTag={`image-${music._id}`}
        />
      </View>
      <View>
        <Text style={styles.title}>{music.name}</Text>
        <Text style={{ color: "#bababa" }}>{music.singer}</Text>
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
  },
});

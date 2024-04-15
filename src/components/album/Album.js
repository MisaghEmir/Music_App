import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";

const Album = ({album}) => {
  return (
    <View style={styles.container}>
    <View>
      <Animated.Image
        source={{ uri: album.image }}
        style={{
          width: 153,
          height: 150,
          objectFit: "cover",
          borderWidth: 1,
          borderRadius: 3,
          borderColor: "rgba(255,255,255,0.07)",
        }}
        sharedTransitionTag={`image-${album._id}`}
      />
    </View>
    <View>
      <Text style={styles.title}>{album.name}</Text>
      <View style={{ color: "#bababa", flexDirection: "row" }}>
        <Text numberOfLines={2} style={{ color: "#bababa", fontSize: 12, width: 150 }}>
        Album <Entypo name="dot-single" size={11} color="#fff" /> {album.singer}
            </Text>
      </View>
    </View>
  </View>
  )
}

export default Album

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
      },
      title: {
        color: "#fff",
        marginTop: 10,
      },
})
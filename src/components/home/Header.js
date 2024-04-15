import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

const Header = ({closeHandle}) => {
  const navigation = useNavigation();
  const playlistState = useSelector((state) => state.playlistReducer.playlist);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo} onPress={() =>closeHandle()}>
          <Entypo name="chevron-thin-down" size={19} color={"#fff"} />
        </Text>
      </View>
      <View>
        <Text style={{color: "rgb(200,200,200)",textAlign: "center",fontSize: 10}}>PLAYING FROM PLAYLIST</Text>
        <Text style={{color: "rgb(255,255,255)",fontWeight: "800", textAlign: "center"}}>{playlistState ? `${playlistState.name}` : "KordiSong"}</Text>
      </View>
      <View style={styles.search}>
        <Text>
          {" "}
          <Entypo name="dots-three-vertical" size={19} color={"#fff"} />
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 25,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 40,
  },
  logo: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
 
});

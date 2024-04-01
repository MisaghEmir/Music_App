import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import ListMusic from "../components/posts/ListMusic";
import MusicPlayer from "../components/MusicPlayer";

const ListMenuScreen = () => {
  const AnimatedInput = Animated.createAnimatedComponent(TextInput);
  const navigation = useNavigation();

  const list = useSelector((state) => state.listReducer.list);
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.inputContainer}>
              <Text
                style={{ marginRight: 20 }}
                onPress={() => navigation.goBack()}
              >
                <Entypo name="chevron-thin-left" size={19} color={"#fff"} />
              </Text>
              <AnimatedInput
                style={styles.input}
                placeholder={"Find in playlist"}
                placeholderTextColor={"#fff"}
              />
              <Pressable>
                <Text style={styles.sort}>Sort</Text>
              </Pressable>
            </View>
            <View style={styles.listContainer}>
              {list.map((item, index) => (
                <ListMusic item={item} key={index} />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <MusicPlayer route={"playlist"} />
    </>
  );
};

export default ListMenuScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    flex: 1,
  },
  header: {
    paddingTop: 35,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 7,
    paddingTop: 30,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#555",
    paddingVertical: 5,
    paddingHorizontal: 15,
    flex: 1,
    color: "#fff",
    fontWeight: "800",
    borderRadius: 3,
  },
  sort: {
    backgroundColor: "#555",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: "800",
    borderRadius: 3,
  },
  listContainer: {
    marginTop: 50,
  },
});

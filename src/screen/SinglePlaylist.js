import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import TabNavigator from "../navigators/TabNavigator";

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const SinglePlaylist = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  const scrollRef = useAnimatedRef();

  const scrollHandler = useScrollViewOffset(scrollRef);

  const inputStyle = useAnimatedStyle(() => {
    console.log(scrollHandler.value);
    return {
      opacity: scrollHandler.value > 50 ? scrollHandler.value / 1100 : 1,
    };
  });
  return (
    <ScrollView style={styles.container} ref={scrollRef}>
      <SafeAreaView>
        <AnimatedInput
          style={[
            { backgroundColor: "#fff", marginTop: 70, height: 70 },
            inputStyle,
          ]}
        />
        <View>
          <Text style={{ color: "#fff" }}>SinglePlaylist</Text>
          <Animated.Image
            source={{ uri: item.image }}
            style={{ width: 270, height: 270, marginTop: 90 }}
            sharedTransitionTag={`image-${item._id}`}
          />
        </View>
        <View>
          <Text style={{ color: "#fff" }}>SinglePlaylist</Text>
          <Animated.Image
            source={{ uri: item.image }}
            style={{ width: 270, height: 270, marginTop: 90 }}
            sharedTransitionTag={`image-${item._id}`}
          />
        </View>
        <View>
          <Text style={{ color: "#fff" }}>SinglePlaylist</Text>
          <Animated.Image
            source={{ uri: item.image }}
            style={{ width: 270, height: 270, marginTop: 90 }}
            sharedTransitionTag={`image-${item._id}`}
          />
        </View>
      </SafeAreaView>
    </ScrollView>

  );
};

export default SinglePlaylist;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#000",
    flex: 1,
  },
});

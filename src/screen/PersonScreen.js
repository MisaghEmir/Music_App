import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import BarButton from "../components/BarButton";
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const PersonScreen = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/font/poppins/Poppins-Italic.otf"),
  });
  const [scroll, setScroll] = useState(0);

  const scrollRef = useAnimatedRef();
  const scrollHandler = useScrollViewOffset(scrollRef);

  const navigator = useNavigation();

  const inputStyle = () => {
    console.log(scrollHandler.value / 100);

    setScroll(scrollHandler.value / 170);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/person.jpg")}
          style={{ width: "100%", height: 350, borderWidth: 0 }}
        />
      </View>
      <Animated.ScrollView
        style={styles.scroll}
        // stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        onScroll={() => inputStyle()}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={[
            `rgba(25,25,25,${scroll})`,
            `rgba(25,25,25,${scroll})`,
            `rgba(25,25,25,${scroll})`,
            `rgba(25,25,25,${scroll + 0.9})`,
            `rgba(25,25,25,${scroll + 1})`,
          ]}
          style={styles.name}
        >
          <Text
            numberOfLines={1}
            style={{ color: "#fff", fontSize: 60, fontWeight: "900" }}
          >
            KurdiSong
          </Text>
        </LinearGradient>
        <View
          style={{ paddingHorizontal: 14, backgroundColor: "rgb(25,25,25)" }}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={[
              `rgba(25,25,25,0.7)`,
              `rgba(25,25,25,0.7)`,
              `rgba(25,25,25,0.8)`,
              `rgba(25,25,25,0.8)`,
              `rgba(25,25,25,0.9)`,
            ]}
          >
            <Pressable
              numberOfLines={1}
              style={{
                backgroundColor: "#fff",
                fontSize: 60,
                fontWeight: "900",
                padding: 14,
                borderRadius: 50,
                marginTop: 10,
              }}
            >
              <Text
                numberOfLines={1}
                onPress={() => navigator.navigate("Login")}
                style={{
                  color: "#000",
                  fontSize: 20,
                  fontWeight: "900",
                  textAlign: "center",
                  fontFamily: "Poppins",
                }}
              >
                Sign In
              </Text>
            </Pressable>
          </LinearGradient>

          <View>
            <Text style={{ color: "#bababa", fontSize: 14, padding: 14 }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "rgb(30,30,30)",
              fontSize: 60,
              fontWeight: "900",
              paddingTop: 24,
              borderRadius: 15,
              marginTop: 10,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                paddingVertical: 14,
                fontWeight: "700",
                borderBottomColor: "rgb(200,200,200)",
                borderBottomWidth: 1,
                padding: 21,
              }}
            >
              Why join?
            </Text>
            <View style={{ alignItems: "center", gap: 15,flexDirection: "row",paddingHorizontal: 17, paddingVertical: 14 }}>
              <Text>
                <AntDesign name="check" size={20} color={"green"} />
              </Text>
              <Text
                style={{
                  color: "#bababa",
                  fontSize: 14,
                  alignItems: "center",
                  gap: 20,
                }}
              >
                Why join?
              </Text>
            </View>
            <View style={{ alignItems: "center", gap: 15,flexDirection: "row",paddingHorizontal: 17, paddingVertical: 14 }}>
              <Text>
                <AntDesign name="check" size={20} color={"green"} />
              </Text>
              <Text
                style={{
                  color: "#bababa",
                  fontSize: 14,
                  alignItems: "center",
                  gap: 20,
                }}
              >
                Why join?
              </Text>
            </View>
            <View style={{ alignItems: "center", gap: 15,flexDirection: "row",paddingHorizontal: 17, paddingVertical: 14 }}>
              <Text>
                <AntDesign name="check" size={20} color={"green"} />
              </Text>
              <Text
                style={{
                  color: "#bababa",
                  fontSize: 14,
                  alignItems: "center",
                  gap: 20,
                }}
              >
                Why join?
              </Text>
            </View>
            <View style={{ alignItems: "center", gap: 15,flexDirection: "row",paddingHorizontal: 17, paddingVertical: 14 }}>
              <Text>
                <AntDesign name="check" size={20} color={"green"} />
              </Text>
              <Text
                style={{
                  color: "#bababa",
                  fontSize: 14,
                  alignItems: "center",
                  gap: 20,
                }}
              >
                Why join?
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "rgb(30,30,30)",
              fontSize: 60,
              fontWeight: "900",
              padding: 7,
              borderRadius: 15,
              marginTop: 10,
              marginBottom: 160,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 12,
              paddingTop: 4,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                padding: 14,
                fontWeight: "700",
                padding: 17,
              }}
            >
              Account Free
            </Text>
            <Text
              style={{
                color: "rgb(130,130,130)",
                fontSize: 15,
                padding: 14,
                fontWeight: "400",
                padding: 17,
              }}
            >
              Get
            </Text>
          </View>
        </View>
      </Animated.ScrollView>
      <StatusBar
        style="light"
        backgroundColor={`rgba(30,30,30,${scroll - 1.5})`}
      />
    </View>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingTop: 0,
    backgroundColor: "rgb(25,25,25)",
    flex: 1,
    position: "relative",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    backgroundColor: "black",
    height: 350,
    width: "100%",
    opacity: 0.7,
  },
  name: {
    height: 350,
    justifyContent: "flex-end",
    padding: 15,
    paddingVertical: 0,
  },
});

import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Entypo,
  FontAwesome,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import HomeScreen from "../screen/HomeScreen";
import MusicPlayer from "../components/MusicPlayer";
import SinglePlaylist from "../screen/SinglePlaylist";
import SearchScreen from "../screen/SearchScreen";
import LibararyScreen from "../screen/LibararyScreen";
import { LinearGradient } from "expo-linear-gradient";
import SingerScreen from '../screen/SingerScreen';
import PersonScreen from "../screen/PersonScreen";
import LoginScreen from "../screen/LoginScreen";


const LibraryStack = createNativeStackNavigator();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator screenOptions={{ headerShown: false }}>
      <LibraryStack.Screen name="Library" component={LibararyScreen} />
      <LibraryStack.Screen name="Singer" component={SingerScreen} />
    </LibraryStack.Navigator>
  );
}

const PersonStack = createNativeStackNavigator();

function PersonStackScreen() {
  return (
    <PersonStack.Navigator screenOptions={{ headerShown: false }}>
      <PersonStack.Screen name="Person" component={PersonScreen} />
      <PersonStack.Screen name="Login" component={LoginScreen} />
    </PersonStack.Navigator>
  );
}

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <MusicPlayer route={"tab"}   />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: "flex",
            position: "absolute",
            elevation: 5,
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: 0,
            borderWidth: 0,
            borderColor: "#000",
            shadowColor: "rgba(0,0,0,0.0)",
            shadowOpacity: 0,
            flexDirection: "column",
            height: 80,
          },
        }}
      >
       
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          style={{ backgroundColor: "red" }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  `rgba(0,0,0,0.5)`,
                  `rgba(0,0,0,0.6)`,
                  `rgba(0,0,0,0.7)`,
                  `rgba(0,0,0,0.8)`,
                  `rgba(0,0,0,0.9)`,
                ]}
                style={{
                  borderWidth: 0,
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    borderWidth: 0,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons name="home-filled" size={size} color={color} />
                  <Text style={{color: color, fontSize: size - 14, fontWeight: "900", marginTop: 5}}>Home</Text>
                </View>
              </LinearGradient>
            ),
          }}
        />

        {/* <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  `rgba(0,0,0,0.5)`,
                  `rgba(0,0,0,0.6)`,
                  `rgba(0,0,0,0.7)`,
                  `rgba(0,0,0,0.8)`,
                  `rgba(0,0,0,0.9)`,
                ]}
                style={{
                  borderWidth: 0,
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    borderWidth: 0,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome name="search" size={size} color={color} />
                  <Text style={{color: color, fontSize: size - 14, fontWeight: "900", marginTop: 5}}>Search</Text>
                </View>
              </LinearGradient>
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  `rgba(0,0,0,0.5)`,
                  `rgba(0,0,0,0.6)`,
                  `rgba(0,0,0,0.7)`,
                  `rgba(0,0,0,0.8)`,
                  `rgba(0,0,0,0.9)`,
                ]}
                style={{
                  borderWidth: 0,
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    borderWidth: 0,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="video-collection"
                    size={size}
                    color={color}
                  />
                   <Text style={{color: color, fontSize: size - 14, fontWeight: "900", marginTop: 5}}>Library</Text>
                </View>
              </LinearGradient>
            ),
          }}
        />
        <Tab.Screen
          name="Person"
          component={PersonStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  `rgba(0,0,0,0.5)`,
                  `rgba(0,0,0,0.6)`,
                  `rgba(0,0,0,0.7)`,
                  `rgba(0,0,0,0.8)`,
                  `rgba(0,0,0,0.9)`,
                ]}
                style={{
                  borderWidth: 0,
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    borderWidth: 0,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="person-outline" size={size} color={color} />
                  <Text style={{color: color, fontSize: size - 14, fontWeight: "900", marginTop: 5}}>Profile</Text>
                </View>
              </LinearGradient>
            ),
          }}
        /> */}
        {/* <Tab.Screen
          name="profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <View>
                <Feather name="shopping-bag" size={size} color={color} />
              </View>
            ),
          }}
        /> */}
        {/* <Tab.Screen
            name="SinglePlaylist"
            component={SinglePlaylist}
            options={{tabBarStyle: {display: "none"}}}
          /> */}
      </Tab.Navigator>
    </>
  );
}

export default TabNavigator;

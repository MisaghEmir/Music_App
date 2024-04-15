import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SingelScreen from '../screen/SingelScreen';
import SinglePlaylist from '../screen/SinglePlaylist';
import ListMenuScreen from '../screen/ListMenuScreen';
import SingerScreen from '../screen/SingerScreen';
import RecentMusic from '../screen/RecentMusic';
import SearchBoxScreen from '../screen/SearchBoxScreen';

function StackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Single" component={SingelScreen} />
      <Stack.Screen name="SinglePlaylist" component={SinglePlaylist} />
      <Stack.Screen name="listmanu" component={ListMenuScreen} />
      <Stack.Screen name="Singer" component={SingerScreen} />
      <Stack.Screen name="Recent" component={RecentMusic} />
      <Stack.Screen name="SearchBoxScreen" component={SearchBoxScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;

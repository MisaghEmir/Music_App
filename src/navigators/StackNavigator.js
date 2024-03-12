import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import SingelScreen from '../screen/SingelScreen';
import SinglePlaylist from '../screen/SinglePlaylist';

function StackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Single" component={SingelScreen} />
      <Stack.Screen name="SinglePlaylist" component={SinglePlaylist} />
    </Stack.Navigator>
  );
}

export default StackNavigator;

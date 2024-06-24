import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../credit/Pages/Home.js'
import Settings from '../credit/Pages/Settings.js';


const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
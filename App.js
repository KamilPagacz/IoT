import React from 'react';
import { Roboto_400Regular_Italic } from '@expo-google-fonts/roboto';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import Home from "./Home";
import {View} from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular_Italic,
    Handlee_400Regular
  });

  if (!fontsLoaded) {
    return <View/>;
  }

  return (
      <Home />
  );
}

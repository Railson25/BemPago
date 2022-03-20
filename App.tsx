import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { Routes } from './src/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

    if(!fontsLoaded){
      return <AppLoading />
    }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}


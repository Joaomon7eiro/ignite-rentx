import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';

import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { CarDetails } from './src/screens/CarDetails';
import { Schedule } from './src/screens/Schedule';
import { ScheduleDetails } from './src/screens/ScheduleDetails';
import { ScheduleComplete } from './src/screens/ScheduleComplete';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <ScheduleComplete />
    </ThemeProvider>
  );
}

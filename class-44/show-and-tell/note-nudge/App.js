import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import { ThemeProvider } from './ThemeContext';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'ArefRuqaaInk': require('./assets/fonts/ArefRuqaaInk-Bold.ttf'),
      'LilitaOne': require('./assets/fonts/LilitaOne-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
    return (
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Event" component={EventScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );
}


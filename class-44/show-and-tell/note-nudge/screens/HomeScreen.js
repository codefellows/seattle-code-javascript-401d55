import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function HomeScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();
  const isLightTheme = theme === 'light';

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={[styles.container, { backgroundColor: isLightTheme ? '#FFF' : '#000' }]}>
      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{ color: isLightTheme ? '#000' : '#FFF' }}>{isLightTheme ? 'Light Mode' : 'Dark Mode'}</Text>
        </TouchableOpacity>
      </View>

      <Animated.Text
        style={[
          styles.welcomeText,
          { opacity: fadeAnim },
          { color: isLightTheme ? '#000' : '#FFF' }
        ]}
      >
        Welcome to Note Nudge
      </Animated.Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Event')}
      >
        <Text style={styles.buttonText}>Create Reminder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'LilitaOne',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  switchContainer: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    width: '100%',
  },
});
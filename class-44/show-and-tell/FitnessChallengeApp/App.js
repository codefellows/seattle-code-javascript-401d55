import React from 'react';
import { StyleSheet } from 'react-native';
import { ChallengesProvider } from './context/ChallengesContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <ChallengesProvider>
      <AppNavigator />
    </ChallengesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

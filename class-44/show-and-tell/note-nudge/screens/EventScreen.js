import React from 'react';
import { View, StyleSheet } from 'react-native';
import EventForm from '../components/EventForm';

export default function EventScreen() {
  return (
    <View style={styles.container}>
      <EventForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import { View, Text } from 'react-native';

export default function ChallengeItem({ challenge }) {
  return (
    <View>
      <Text>{challenge}</Text>
    </View>
  );
}

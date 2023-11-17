import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Animeletics!</Text>
        <Text style={styles.description}>Join and conquer daily fitness challenges to become your own main character!</Text>

        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Challenge')}>
            <Text style={styles.buttonText}>Go to Challenges</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Progress')}>
            <Text style={styles.buttonText}>Go to Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.buttonText}>Go to Camera</Text>
        </TouchableOpacity>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f0f8ff',
        marginBottom: 120,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12,
        color: '#E63946',
        fontFamily: 'Luckiest Guy',
    },
    description: {
        marginVertical: 24,
        textAlign: 'center',
        color: '#457B9D',
        fontFamily: 'Roboto Condensed',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#2A9D8F',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 10,
        width: windowWidth * 0.8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

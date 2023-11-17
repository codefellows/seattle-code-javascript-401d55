import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ progress, total }) {
    const progressPercentage = (progress / total) * 100;

    return (
        <View style={styles.container}>
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
            </View>
            <Text style={styles.progressText}>{progress} / {total}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
    },
    progressBarBackground: {
        width: '100%',
        height: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#2A9D8F',
        borderRadius: 10,
    },
    progressText: {
        marginTop: 5,
        fontSize: 14,
    },
});

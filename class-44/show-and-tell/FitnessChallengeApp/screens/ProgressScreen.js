import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity, Modal } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import { extractTotalFromChallenge } from '../utility/challenges';
import { ChallengesContext } from '../context/ChallengesContext';
import * as FileSystem from 'expo-file-system';

export default function ProgressScreen() {
    const { completedChallenges, savedImages, deleteImage } = useContext(ChallengesContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleDeleteImage = async (imagePath) => {
        try {
          await FileSystem.deleteAsync(imagePath);
          deleteImage(imagePath);
        } catch (error) {
          console.error("Error deleting image file:", error);
        }
    };

    const openImageModal = (imagePath) => {
        setSelectedImage(imagePath);
        setModalVisible(true);
    };

    const closeImageModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Completed Challenges:</Text>
            {completedChallenges.map((challenge, index) => {
                const total = extractTotalFromChallenge(challenge.activity);
                return (
                    <View key={index} style={styles.challengeItem}>
                        <Text style={styles.challengeText}>
                            {challenge.activity}
                        </Text>
                        <ProgressBar 
                            progress={Number(challenge.userAchievement)} 
                            total={total}
                        />
                    </View>
                );
            })}
            <Text style={styles.header}>Saved Images:</Text>
            {savedImages.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => openImageModal(image)}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={closeImageModal}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                {selectedImage && <Image source={{ uri: selectedImage }} style={styles.enlargedImage} />}
                                <TouchableOpacity 
                                    style={styles.buttonContainer}
                                    onPress={() => {
                                        handleDeleteImage(selectedImage);
                                        closeImageModal();
                                    }}>
                                    <Text style={styles.buttonText}>Delete Image</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.closeButton}
                                    onPress={closeImageModal}>
                                    <Text style={styles.closeButtonText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    progressBarContainer: {
        marginBottom: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#457B9D',
        marginBottom: 15,
    },
    challengeItem: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
    },
    challengeText: {
        fontSize: 16,
    },
    imageContainer: {
        alignItems: 'flex',
        marginBottom: 15,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
        backgroundColor: 'transparent',
        padding: 8,
        borderRadius: 15,
    },
    closeButtonText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        opacity: 0.8,
    },
    buttonContainer: {
        backgroundColor: '#2A9D8F',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    enlargedImage: {
        width: 350,
        height: 600,
        borderRadius: 10,
    },
});

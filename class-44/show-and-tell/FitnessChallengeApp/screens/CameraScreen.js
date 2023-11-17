import React, { useState, useEffect, useContext, useRef } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { ChallengesContext } from '../context/ChallengesContext';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const { addImage } = useContext(ChallengesContext);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        let photo = await cameraRef.current.takePictureAsync();
        const filename = photo.uri.split('/').pop();
        const newPath = FileSystem.documentDirectory + filename;
        await FileSystem.moveAsync({
          from: photo.uri,
          to: newPath,
        });
        addImage(newPath);
      } catch (error) {
        Alert.alert("Error taking picture", error.message);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
      </Camera>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.flipButton}
            onPress={() => {
                setType(
                type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
            }}>
            <Text style={styles.buttonText}>Flip Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.captureButton}
            onPress={takePicture}>
            <Text style={styles.buttonText}>Take Picture</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  flipButton: {
    backgroundColor: '#2A9D8F',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  captureButton: {
    backgroundColor: '#E63946',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

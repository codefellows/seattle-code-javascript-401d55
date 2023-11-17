import React, { useState, useContext } from 'react';
import { View, Button, TextInput, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createCalendarEvent } from '../api/Calendar';
import { scheduleNotification } from '../api/Notifications';
import { useTheme } from '../ThemeContext';

export default function EventForm() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { theme, toggleTheme } = useTheme();
  const isLightTheme = theme === 'light';

  const handleCreateEvent = async () => {
    try {
      createCalendarEvent(title, startDate, endDate);
      scheduleNotification(title, startDate);

      alert('Event created and reminder set successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to create event and set reminder');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isLightTheme ? '#FFF' : '#000' }]}>
      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={toggleTheme}>
          <Text style={{ color: isLightTheme ? '#000' : '#FFF' }}>{isLightTheme ? 'Light Mode' : 'Dark Mode'}</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={[styles.input, { color: isLightTheme ? '#000' : '#FFF', borderColor: isLightTheme ? 'gray' : 'lightgray' }]}
        placeholder="           Event Title          "
        placeholderTextColor={isLightTheme ? '#000' : '#FFF'}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={[styles.label, { color: isLightTheme ? '#000' : '#FFF' }]}>Start Date and Time:</Text>
      <DateTimePicker
        value={startDate}
        mode="datetime"
        display="default"
        textColor={isLightTheme ? '#000' : '#FFF'} // This prop can be used on iOS
        onChange={(event, selectedDate) => setStartDate(selectedDate || startDate)}
        style={isLightTheme ? styles.datePickerLight : styles.datePickerDark}
      />
      <Text style={[styles.label, { color: isLightTheme ? '#000' : '#FFF' }]}>End Date and Time:</Text>
      <DateTimePicker
        value={endDate}
        mode="datetime"
        display="default"
        textColor={isLightTheme ? '#000' : '#FFF'}
        onChange={(event, selectedDate) => setEndDate(selectedDate || endDate)}
        style={isLightTheme ? styles.datePickerLight : styles.datePickerDark}
      />
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: isLightTheme ? '#000' : '#FFF' }]} 
        onPress={handleCreateEvent}
      >
      <Text style={styles.buttonText}>Remind Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 90,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 90,
    width: '100%',
    borderRadius: 5,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
  },
  datePicker: {
    width: '100%',
    marginBottom: 20,
  },
  switchContainer: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 60,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});
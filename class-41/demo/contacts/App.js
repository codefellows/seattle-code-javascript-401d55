import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';
// protocol linking -> linking to features like http / sms / tel

// View -> A div, there is always 1 root div per screen / layout.
// Text -> default text object -> p tags, h1 - h6, list items.

export default function App() {
  const [contactData, setContactData] = useState([]);

  const getContacts = async () => {
    let { status } = await Contacts.requestPermissionsAsync(); // new thing!  => must ask users for personal data access.
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync();
      setContactData(data);
    }
  }

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].number;
    let link = 'tel:' + phoneNumber; // protocol + URL
    Linking.canOpenURL(link)
      .then(isSupported => Linking.openURL(link))
      .catch((e) => {
        console.error("CANT USE LINK!!", e);
      })
  }

  useEffect(() => {
    console.log('APP IS LOADED!');
    getContacts();
  }, []);

  console.log('MY CONTACTS FROM MY PHONE:', contactData);
  return (
    // New thing -> JSX does not contain HTML.
    // All the things we may take for granted about HTML, we now need components directly from react-native.
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Check out your Contacts!</Text>
        <FlatList
          data={contactData} // a list of data object to do something.
          keyExtractor={contact => contact.id} // a function that returns a "key" on every child of the list.
          renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)} />} // a function that returns a child element
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>I am another View</Text>
      </View>
    </SafeAreaView>
  );
}

// we need to create our own css object in each component.
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  footer: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue'
  },
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'purple'
  },
  footerText: {
    color: 'red',
  }
});

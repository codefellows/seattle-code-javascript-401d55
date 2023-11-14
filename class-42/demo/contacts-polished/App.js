import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Linking } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import AppBar from './components/AppBar';
import ContactItem from './components/ContactItem';
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
    <NativeBaseProvider>
      <SafeAreaView style={styles.safeArea}>
        <Box style={styles.container}>
          <FlatList
            // style={styles.list}
            contentContainerStyle={styles.list}
            data={contactData} // a list of data object to do something.
            keyExtractor={contact => contact.id} // a function that returns a "key" on every child of the list.
            renderItem={({ item }) => <ContactItem title={item.name} handlePress={() => call(item)} />} // a function that returns a child element
          />
          <StatusBar style="auto" />
          <AppBar title={'My Contact App'} />
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

// we need to create our own css object in each component.
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: 'purple',
  },
  list: {
    width: '100%',
    alignItems: 'center'
  },
  footerText: {
    color: 'red',
  }
});

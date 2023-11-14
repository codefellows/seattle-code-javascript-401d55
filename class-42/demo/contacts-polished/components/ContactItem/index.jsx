import { StyleSheet } from 'react-native';
import { Box, HStack, IconButton, Icon, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

function ContactItem({ title, handlePress }) {
  return (
    <Box style={styles.container}>
      <HStack>
        <Text style={styles.text}>{title}</Text>
        <IconButton onPress={handlePress} icon={<Icon as={MaterialIcons} name="phone" size="sm"
        color="black" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="favorite-border" size="sm" color="black" />} />
      </HStack>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 350,
    alignItems: 'center',
    backgroundColor: 'violet',
    marginTop: 10,
    marginBottom: 10 
  },
  text: {
    fontSize: 20
  }
});

export default ContactItem;

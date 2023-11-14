import { StatusBar, IconButton, Box, HStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

function AppBar() {
  return <>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box bg="violet.600" />
    <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
      <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
      <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
      <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
    </HStack>
  </>;
}

export default AppBar;

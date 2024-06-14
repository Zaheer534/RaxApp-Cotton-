import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactUs from './screens/ContactUs';
import Notifications from './screens/Notifications';
import Chat from './screens/Chat';
import Chat2 from './screens/Chat2';
import Chat_Expanded from './screens/Chat_Expanded';
import ProfileListings from './screens/ProfileListing/Index';
import EditProfile from './screens/ProfileListing/index2';
import ProfileListingsModified from './screens/ProfileListing/index3';
import AddedList from './screens/ProfileListing/index4';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Notifications} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <ProfileListings />
    // <EditProfile />
    // <ProfileListingsModified />
    <AddedList />
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

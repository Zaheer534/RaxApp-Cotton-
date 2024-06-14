import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Profile} from './Keywords';
import {HeaderIcon, ProfileIcon} from './ProfileImages';
import HeaderComponent from './header';
import ProlileComponent from './ProlileComponent';
const ProfileListings = () => {
  return (
    <View style={{flex: 1, paddingTop: 30}}>
      <HeaderComponent />
      <ProlileComponent />
    </View>
  );
};

export default ProfileListings;

const styles = StyleSheet.create({});

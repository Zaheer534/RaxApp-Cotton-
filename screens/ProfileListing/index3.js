import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Profile} from './Keywords';
import {HeaderIcon, ProfileIcon} from './ProfileImages';
import HeaderComponent from './header';
import ProfileComponentModified from './ProfileComponentModified';
import HeaderComponentModified from './headerUpdated';
const ProfileListingsModified = () => {
  return (
    <View style={{flex: 1, paddingTop: 30}}>
      <HeaderComponentModified />
      <ProfileComponentModified />
    </View>
  );
};

export default ProfileListingsModified;

const styles = StyleSheet.create({});

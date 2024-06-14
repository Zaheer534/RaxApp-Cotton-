import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Profile} from './Keywords';
import {HeaderIcon, ProfileIcon} from './ProfileImages';
import HeaderComponent from './header';
import ProlileComponent from './ProlileComponent';
import EditProfileHeaderComponent from './EditProfileHeader';
import EditProlileComponent from './EditProfileComponent';
const EditProfile = () => {
  return (
    <View style={{flex: 1, paddingTop: 30}}>
      <EditProfileHeaderComponent />
      <EditProlileComponent />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});

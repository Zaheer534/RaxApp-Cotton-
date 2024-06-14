import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Profile} from './Keywords';
import {HeaderIcon, ProfileIcon} from './ProfileImages';
import HeaderComponent from './header';
import ProfileComponentModified from './ProfileComponentModified';
import HeaderComponentModified from './headerUpdated';
import AddList from './AddList';
const AddedList = () => {
  return (
    <View style={{flex: 1, paddingTop: 30}}>
      {/* <HeaderComponentModified /> */}
      <AddList />
    </View>
  );
};

export default AddedList;

const styles = StyleSheet.create({});

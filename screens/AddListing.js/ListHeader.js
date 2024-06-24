import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EditProfile} from './Keywords';
import {BackButton, HeaderIcon} from './ProfileImages';

const ListHeaderComponent = () => {
  return (
    <View style={styles.editHeaderContainer}>
      <Image style={styles.image} source={BackButton.back} />
      <Text style={styles.headerName}>{EditProfile.header}</Text>
    </View>
  );
};

export default ListHeaderComponent;

const styles = StyleSheet.create({
  editHeaderContainer: {
    width: 200,
    // height: 64,
    paddingLeft: 13,
    justifyContent: 'center',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  headerName: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    top: 15,
    left: 15,
  },
  image: {width: 24, height: 24, top: 15, right: 15, color: 'rgba(0, 0, 0, 1)'},
});

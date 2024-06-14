import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from './Keywords';
import {HeaderIcon} from './ProfileImages';

const HeaderComponentModified = () => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.headerName}>{Header.headerName}</Text>
      {/* <Image style={styles.image} source={HeaderIcon.settingsIcon} /> */}
    </View>
  );
};

export default HeaderComponentModified;

const styles = StyleSheet.create({
  settingsContainer: {
    width: 410,
    // height: 64,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  headerName: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    top: 15,
    left: 15,
  },
  image: {width: 24, height: 24, top: 15, right: 15, color: 'rgba(0, 0, 0, 1)'},
});

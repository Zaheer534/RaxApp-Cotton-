import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';

const CustomInputComp = ({name, name2}) => {
  return (
    <View style={styles.custInp}>
      <Text>{name}</Text>
      <Text style={styles.text}>{name2}</Text>
      {/* <TextInput
        underlineColorAndroid="black"
        style={{width: '100%', bottom: 15}}
      /> */}
      <Image
        color={'rgba(0, 0, 0, 1)'}
        source={require('../assets/Checkboxes.png')}
      />
    </View>
  );
};

export default CustomInputComp;

const styles = StyleSheet.create({
  custInp: {
    width: '98%',
    height: 65,
    gap: 6,
    backgroundColor: 'pink',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingLeft: 5,
    // paddingRight: 15,

    borderBottomWidth: 0.6,
    borderColor: 'lightgray',
  },
  text: {fontSize: 14, fontWeight: '500', color: 'rgba(51, 51, 51, 1)'},
});

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {address, duration, unpause} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedConfirm from './UnpausedConfirm';
import CheckBox from '@react-native-community/checkbox';
import {AppImages} from '../../constants/images';

const NewAddress = () => {
  const refRBSheet = useRef();
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{address.new}</Text>
        <Image style={{right: 11}} source={AppImages.add.plus} />
      </View>
      <Divider
        style={{width: '91%', marginLeft: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(117, 117, 117, 1)"
        inset={true}
        insetType="right"
      />
      <View style={styles.container}>
        <Text style={styles.subText}>{address.peter}</Text>
        <CheckBox
          style={{right: 15}}
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <Divider
        style={{width: '91%', marginLeft: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(117, 117, 117, 1)"
        inset={true}
        insetType="right"
      />
      <View style={styles.container}>
        <Text style={styles.subText}>{address.prince}</Text>
        <CheckBox
          style={{right: 15}}
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
      <Divider
        style={{width: '91%', marginLeft: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(117, 117, 117, 1)"
        inset={true}
        insetType="right"
      />
      <View style={styles.container}>
        <Text style={styles.subText}>{address.russel}</Text>
        <CheckBox
          style={{right: 15}}
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
    </View>
  );
};

export default NewAddress;

const styles = StyleSheet.create({
  container: {
    margin: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
  },
  subText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
  },
});

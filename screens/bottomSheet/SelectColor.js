import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {color, duration, period, unpause} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedConfirm from './UnpausedConfirm';
import CheckBox from '@react-native-community/checkbox';

const SelectColor = () => {
  const refRBSheet = useRef();
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.text, {fontSize: 24}]}>{color.select}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{color.black}</Text>
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
        <Text style={styles.text}>{color.green}</Text>
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
        <Text style={styles.text}>{color.white}</Text>
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
        <Text style={styles.text}>{color.grey}</Text>
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
        <Text style={styles.text}>{color.cream}</Text>
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
        <Text style={styles.text}>{color.beige}</Text>
      </View>
    </View>
  );
};

export default SelectColor;

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
  },
});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {color, duration, period, size, unpause} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedConfirm from './UnpausedConfirm';
import CheckBox from '@react-native-community/checkbox';

const SelectSize = () => {
  const refRBSheet = useRef();
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.text, {fontSize: 24}]}>{size.select}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{size.zero}</Text>
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
        <Text style={styles.text}>{size.two}</Text>
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
        <Text style={styles.text}>{size.four}</Text>
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
        <Text style={styles.text}>{size.six}</Text>
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
        <Text style={styles.text}>{size.eight}</Text>
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
        <Text style={styles.text}>{size.ten}</Text>
      </View>
    </View>
  );
};

export default SelectSize;

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

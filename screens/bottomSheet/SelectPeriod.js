import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {duration, period, unpause} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedConfirm from './UnpausedConfirm';
import CheckBox from '@react-native-community/checkbox';

const SelectPeriod = () => {
  const refRBSheet = useRef();
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.durationContainer}>
        <Text style={[styles.durationText, {fontSize: 24}]}>
          {period.select}
        </Text>
      </View>

      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{period.four}</Text>
        <CheckBox
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
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{period.ten}</Text>
        <CheckBox
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
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{period.twenty}</Text>
        <CheckBox
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
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{period.thirty}</Text>
        <CheckBox
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
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{period.ninety}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
    </View>
  );
};

export default SelectPeriod;

const styles = StyleSheet.create({
  durationContainer: {
    margin: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  durationText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
  },
});

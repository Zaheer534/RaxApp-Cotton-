import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {duration, occasion, period, unpause} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedConfirm from './UnpausedConfirm';
import CheckBox from '@react-native-community/checkbox';

const Ocassion = () => {
  const refRBSheet = useRef();
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={[styles.container, {flexDirection: 'column'}]}>
        <Text style={[styles.text, {fontSize: 24}]}>{occasion.choose}</Text>
        <Text style={[styles.subText]}>{occasion.apply}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.formal}</Text>
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
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.work}</Text>
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
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.vacation}</Text>
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
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.wedding}</Text>
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
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.prom}</Text>
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
      <View style={styles.container}>
        <Text style={styles.text}>{occasion.festival}</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
    </View>
  );
};

export default Ocassion;

const styles = StyleSheet.create({
  container: {
    margin: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  subText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

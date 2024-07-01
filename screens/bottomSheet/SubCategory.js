import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  category,
  duration,
  occasion,
  period,
  subCategory,
  unpause,
} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedConfirm from './UnpausedConfirm';
import CheckBox from '@react-native-community/checkbox';
import {AppImages} from '../../constants/images';
import SubCategoryBottomSheet from './SubCategoryBottomSheet';

const SubCategory = ({props}) => {
  const refRBSheet = useRef();
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={[styles.container, {flexDirection: 'column'}]}>
        <Text style={[styles.text, {fontSize: 24}]}>{subCategory.choose}</Text>
        <Text style={styles.text}>{subCategory.women}</Text>
      </View>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.text}>{subCategory.accessories}</Text>
      </TouchableOpacity>
      <Divider
        style={{width: '91%', marginLeft: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(117, 117, 117, 1)"
        inset={true}
        insetType="right"
      />
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.text}>{subCategory.bags}</Text>
      </TouchableOpacity>
      <Divider
        style={{width: '91%', marginLeft: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(117, 117, 117, 1)"
        inset={true}
        insetType="right"
      />
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.text}>{subCategory.dress}</Text>
      </TouchableOpacity>
      <Divider
        style={{width: '91%', marginLeft: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(117, 117, 117, 1)"
        inset={true}
        insetType="right"
      />
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.text}>{subCategory.outfits}</Text>
      </TouchableOpacity>
      <Divider
        style={{width: '91%', marginLeft: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(117, 117, 117, 1)"
        inset={true}
        insetType="right"
      />
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.text}>{subCategory.jacketsNCoats}</Text>
      </TouchableOpacity>
      <Divider
        style={{width: '91%', marginLeft: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(117, 117, 117, 1)"
        inset={true}
        insetType="right"
      />
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.text}>{subCategory.jeans}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    width: '85%',
    margin: 13,
    left: 12,
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

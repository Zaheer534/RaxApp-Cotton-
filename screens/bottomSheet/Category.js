import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  category,
  duration,
  occasion,
  period,
  unpause,
} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedConfirm from './UnpausedConfirm';
import CheckBox from '@react-native-community/checkbox';
import {AppImages} from '../../constants/images';
import SubCategoryBottomSheet from './SubCategoryBottomSheet';
import SubCategory from './SubCategory';

const Category = ({props}) => {
  const refRBSheet = useRef();
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={[styles.container]}>
        <Text style={[styles.text, {fontSize: 24}]}>{category.choose}</Text>
      </View>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => refRBSheet.current.open()}>
        <Text style={styles.text}>{category.men}</Text>
        <Image source={AppImages.arrow.right} />
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
        <Text style={styles.text}>{category.women}</Text>
        <Image source={AppImages.arrow.right} />
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
        <Text style={styles.text}>{category.kids}</Text>
        <Image source={AppImages.arrow.right} />
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
        <Text style={styles.text}>{category.unisex}</Text>
        <Image source={AppImages.arrow.right} />
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
        <Text style={styles.text}>{category.maternity}</Text>
        <Image source={AppImages.arrow.right} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        closeOnPressMask={true}
        height={420}
        closeOnDragDown={true}
        draggable={true}
        // draggableIcon={(onClose = () => refRBSheet.current.close())}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            top: 5,
            backgroundColor: 'rgba(121, 116, 126, 1)',
          },
          container: {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <SubCategory />
      </RBSheet>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    width: '85%',
    margin: 20,
    left: 2,
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

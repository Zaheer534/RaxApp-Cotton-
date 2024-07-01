import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedAccount from './UnpausedAccount';
import DurationBottomSheet from './DurationBottomSheet';
import AccountBottomSheet from './UnpauseBottomSheet';
import NewAddressBottomSheet from './NewAddressBottomSheet';
import NewPaymentBottomSheet from './NewPaymentBottomSheet';
import SelectPeriodBottomSheet from './SelectPeriodBottomSheet';
import SelectColorBottomSheet from './SelectColorBottomSheet';
import SelectSizeBottomSheet from './SelectSizeBottomSheet';
import ChooseOcasionBottomSheet from './ChooseOcasionBottomSheet';
import ChooseCategoryBottomSheet from './ChooseCategoryBottomSheet';

const SheetIndex = () => {
  const refRBSheet = useRef();
  return (
    <View style={{gap: 7}}>
      <AccountBottomSheet />

      <DurationBottomSheet />
      <NewAddressBottomSheet />
      <NewPaymentBottomSheet />
      <SelectPeriodBottomSheet />
      <SelectColorBottomSheet />
      <SelectSizeBottomSheet />
      <ChooseOcasionBottomSheet />
      <ChooseCategoryBottomSheet />
    </View>
  );
};

export default SheetIndex;

const styles = StyleSheet.create({});

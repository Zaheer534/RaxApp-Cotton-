import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedAccount from './UnpausedAccount';
import Duration from './Duration';
import SelectPeriod from './SelectPeriod';
import Ocassion from './Ocassion';

const ChooseOcasionBottomSheet = () => {
  const refRBSheet = useRef();
  return (
    <View>
      <Button
        title="Select Ocassion"
        onPress={() => refRBSheet.current.open()}
      />

      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        closeOnPressMask={true}
        height={520}
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
        <Ocassion />
      </RBSheet>
    </View>
  );
};

export default ChooseOcasionBottomSheet;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import ConfirmAddress from './ConfirmAddress';
import ConfirmBottomSheet from './ConfirmBottomSheet';
import UpdateBottomSheet from './UpdateBottomSheet';
import AddressUpdatedBottomSheet from './AddressUpdatedBottomSheet';

const BottomSheeIndex = ({navigation}) => {
  const refRBSheet = useRef();
  return (
    <View style={{flex: 0.3, justifyContent: 'center', gap: 10}}>
      <ConfirmBottomSheet />
      <UpdateBottomSheet />
      <AddressUpdatedBottomSheet />
      {/* <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        closeOnPressMask={true}
        draggable={true}
        // draggableIcon={(onClose = () => refRBSheet.current.close())}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            top: 12,
            backgroundColor: 'rgba(121, 116, 126, 1)',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <ConfirmAddress />
      </RBSheet> */}
    </View>
  );
};

export default BottomSheeIndex;

const styles = StyleSheet.create({});

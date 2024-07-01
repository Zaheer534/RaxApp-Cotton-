import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedAccount from './UnpausedAccount';
import Duration from './Duration';
import NewAddress from './NewAddress';

const NewAddressBottomSheet = () => {
  const refRBSheet = useRef();
  return (
    <View>
      <Button title="New Address" onPress={() => refRBSheet.current.open()} />

      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        closeOnPressMask={true}
        height={340}
        closeOnDragDown={true}
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
        <NewAddress />
      </RBSheet>
    </View>
  );
};

export default NewAddressBottomSheet;

const styles = StyleSheet.create({});

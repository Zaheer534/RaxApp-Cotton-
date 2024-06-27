import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import ConfirmAddress from './ConfirmAddress';
import UpdateAddress from './UpdateAddress';

const UpdateBottomSheet = ({navigation}) => {
  const refRBSheet = useRef();
  return (
    <View style={{flex: 1, gap: 10}}>
      <Button
        title="Updated BOTTOM SHEET"
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
        <UpdateAddress />
      </RBSheet>
    </View>
  );
};

export default UpdateBottomSheet;

const styles = StyleSheet.create({});

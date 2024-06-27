import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import ConfirmAddress from './ConfirmAddress';

const ConfirmBottomSheet = ({navigation}) => {
  const refRBSheet = useRef();
  return (
    <View style={{flex: 1, gap: 10}}>
      <Button
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
          container: {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            backgroundColor: 'rgba(255, 255, 255, 1)',
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
      </RBSheet>
    </View>
  );
};

export default ConfirmBottomSheet;

const styles = StyleSheet.create({});

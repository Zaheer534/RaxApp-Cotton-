import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {unpause} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnpausedConfirm from './UnpausedConfirm';

const UnpausedAccount = () => {
  const refRBSheet = useRef();
  return (
    <View>
      <View style={styles.unpauseContainer}>
        <Text style={styles.unpauseText}>{unpause.title}</Text>
      </View>
      <Divider
        style={{width: '93%', marginLeft: 10}}
        orientation="horizontal"
        width={1}
        // color="rgba(230, 230, 230, 1)"
        color="black"
        inset={true}
        insetType="right"
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          By unpausing your account, your listings will once again be available
          for <Text style={styles.boldText}>borrowing</Text> and{' '}
          <Text style={styles.boldText}>purchasing,</Text> allowing you to earn
          money.
          {'\n'}
          {'\n'}
          Let’s continue where you left off!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.unpauseButton}
          onPress={() => refRBSheet.current.open()}>
          <Text style={styles.unpauseButtonText}>{unpause.unpauseBtn}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>{unpause.closeBtn}</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        closeOnPressMask={true}
        height={400}
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
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <UnpausedConfirm />
      </RBSheet>
    </View>
  );
};

export default UnpausedAccount;

const styles = StyleSheet.create({
  unpauseContainer: {
    margin: 20,
  },
  unpauseText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 24,
    fontWeight: '700',
  },
  descriptionContainer: {
    margin: 20,
  },
  descriptionText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  boldText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 7,
    justifyContent: 'space-between',
  },
  unpauseButton: {
    width: '93%',
    height: 43,
    backgroundColor: 'rgba(8, 55, 107, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  unpauseButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
  },

  closeButton: {
    width: '93%',
    height: 43,
    borderColor: 'rgba(8, 55, 107, 1)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'rgba(8, 55, 107, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

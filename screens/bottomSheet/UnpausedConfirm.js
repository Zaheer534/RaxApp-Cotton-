import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useRef} from 'react';
import {unpause} from '../../constants/Keywords';
import {Divider} from '@rneui/themed';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AppImages} from '../../constants/images';

const UnpausedConfirm = () => {
  const refRBSheet = useRef();
  return (
    <View>
      <View style={styles.unpauseContainer}>
        <Image source={AppImages.confirm.tick} />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Your account is now <Text style={styles.boldText}>Unpaused</Text>
          {'\n'}
          {'\n'}
          Your listings will once again be available for{' '}
          <Text style={styles.boldText}>borrowing</Text> and{' '}
          <Text style={styles.boldText}>purchasing,</Text> allowing you to earn
          money.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.unpauseButton}
          onPress={() => refRBSheet.current.open()}>
          <Text style={styles.unpauseButtonText}>{unpause.listing}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>{unpause.home}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UnpausedConfirm;

const styles = StyleSheet.create({
  unpauseContainer: {
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unpauseText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 24,
    fontWeight: '700',
  },
  descriptionContainer: {
    margin: 12,
    alignItems: 'center',
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

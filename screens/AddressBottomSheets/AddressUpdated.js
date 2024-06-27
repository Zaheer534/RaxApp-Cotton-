import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Divider} from '@rneui/themed';

const AddressUpdated = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Address updated</Text>
      </View>
      <Divider
        style={{width: '93%', marginLeft: 13}}
        orientation="horizontal"
        width={2}
        color="rgba(230, 230, 230, 1)"
        // inset={true}
        // insetType="right"
      />
      <View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>
            Your current address is{' '}
            <Text style={styles.addressBold}>
              300 Peter Street, Windsor, ON, N9C 2Y8.
            </Text>
          </Text>
          <Text style={[styles.addressText, {margin: 15, right: 15}]}>
            The borrower will have 24 hours to accept the change, update or
            cancel their order.{' '}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateText}>Update address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.looksGoodButton}>
            <Text style={styles.looksGoodText}>Looks good!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddressUpdated;

const styles = StyleSheet.create({
  headerContainer: {
    // alignItems: 'center',
    margin: 30,
    marginLeft: 15,
    // backgroundColor: 'green',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  addressContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  addressText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 24,
    letterSpacing: 0.8,
  },
  addressBold: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 24,
    letterSpacing: 0.8,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 10,
  },
  updateButton: {
    width: 175,
    height: 43,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
  },
  updateText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(51, 51, 51, 1)',
  },
  looksGoodButton: {
    width: 175,
    height: 43,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  looksGoodText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
});

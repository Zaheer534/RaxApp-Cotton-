import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const BorrowAddress = () => {
  return (
    <>
      <View>
        <View style={styles.signContainer}>
          <Image
            style={styles.signImage}
            source={require('../../assets/Vector.png')}
          />
        </View>
        <Text style={styles.addressText}>Address Update</Text>
      </View>
      <View style={styles.borrowDetailsContainer}>
        <View style={styles.borrowDetails}>
          <Text style={[styles.borrowText, {textAlign: 'center'}]}>
            Review order request expires in 24:00:00
          </Text>
          <Text style={styles.borrowText}>
            Your lender just updated the address on this borrow.{' '}
          </Text>
          <Text style={styles.borrowSubText}>
            Please confirm you would still like to do local pick-up for free, or
            switch to shipping{' '}
          </Text>
          <Text style={styles.borrowText}>Distance to new address </Text>
          <Text style={styles.borrowSubText}>20 kms</Text>
          <Text style={styles.borrowText}>Original borrow method </Text>
          <Text style={styles.borrowSubText}>Local pick-up</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.looksGoodButton}>
            <Text style={styles.looksGoodText}>Looks good</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default BorrowAddress;

const styles = StyleSheet.create({
  signContainer: {
    backgroundColor: 'rgba(255, 215, 0, 1)',
    borderRadius: 56,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 25,
    padding: 15,
    width: 56,
    height: 56,
  },
  signImage: {
    alignSelf: 'center',
    // margin: 15,
    width: 5,
    height: 28,
  },
  addressText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
  },
  borrowDetailsContainer: {
    // margin: 10,
    marginTop: 15,
    backgroundColor: 'rgba(255, 243, 176, 1)',
  },
  borrowDetails: {
    alignItems: 'flex-start',
    margin: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    margin: 5,
  },
  borrowText: {
    width: '90%',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 24,
    margin: 10,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },
  borrowSubText: {
    fontSize: 16,
    fontWeight: '400',
    // textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.5,
    padding: 5,
    paddingLeft: 12,
    color: 'rgba(0, 0, 0, 1)',
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
  updateButton: {
    width: 175,
    height: 43,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(8, 55, 107, 1)',
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(8, 55, 107, 1)',
  },
});

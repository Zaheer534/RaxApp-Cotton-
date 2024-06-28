import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import OrderDetailsComponent from './OrderDetailsComponent';

const OrderCancel = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <Image source={require('../../assets/cross.png')} />
          <Text style={styles.orderText}>Order cancelled</Text>
        </View>
        <OrderDetailsComponent />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.homeButton}>
            <Text style={styles.homeText}>Browse other listings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OrderCancel;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 15,
  },
  innerContainer: {
    alignItems: 'center',
    gap: 15,
  },
  orderText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  chatButton: {
    width: '98%',
    height: 43,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(8, 55, 107, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatText: {
    color: 'rgba(8, 55, 107, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  homeButton: {
    width: '98%',
    height: 43,
    borderRadius: 8,
    backgroundColor: 'rgba(8, 55, 107, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
});

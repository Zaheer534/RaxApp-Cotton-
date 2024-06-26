import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BuyerComponent from './BuyerComponent';
import BuyerShipping from './BuyerShipping';
import BuyerShippingSecond from './BuyerShippingSecond';

const BuyerScreen = () => {
  return (
    <View>
      {/* <BuyerComponent /> */}
      {/* <BuyerShipping /> */}
      <BuyerShippingSecond />
    </View>
  );
};

export default BuyerScreen;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BorrowAddress from './BorrowAddress';
import {Button} from '@rneui/base';

const BorrowIndex = ({navigation}) => {
  return (
    <View style={{gap: 10}}>
      <Button
        title="Go to Borrow Page"
        onPress={() => {
          navigation.navigate('Borrow');
        }}
      />
      <Button
        title="Go to Borrow Second Page"
        onPress={() => {
          navigation.navigate('BorrowSecond');
        }}
      />
      <Button
        title="Third Page"
        onPress={() => {
          navigation.navigate('BorrowThird');
        }}
      />
      <Button
        title="Updated order"
        onPress={() => {
          navigation.navigate('UpdatedOrder');
        }}
      />
      <Button
        title="Cancelled order"
        onPress={() => {
          navigation.navigate('OrderCancel');
        }}
      />
    </View>
  );
};

export default BorrowIndex;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BorrowAddress from './BorrowAddress';
import {Button} from '@rneui/base';

const BorrowIndex = ({navigation}) => {
  return (
    <View>
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
    </View>
  );
};

export default BorrowIndex;

const styles = StyleSheet.create({});

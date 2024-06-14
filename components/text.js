import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomText = ({name}) => {
  return (
    <View>
      <Text style={styles.CustomText}>{name}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  CustomText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(51, 51, 51, 1)',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
});

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppImages} from '../constants/images';

const CustomDress = ({brand, date, type_size, price}) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.imageList}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={AppImages.dress.ZaraDress}
        />
      </View>
      <View style={styles.TextList}>
        <Text
          style={{
            color: 'rgba(51, 51, 51, 1)',
            right: 3,
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 24,
            letterSpacing: 0.5,
          }}>
          {brand}
        </Text>
        <Text
          style={{
            color: 'rgba(51, 51, 51, 1)',
            right: 3,
            fontSize: 12,
            fontWeight: '400',
            lineHeight: 24,
            letterSpacing: 0.5,
          }}>
          {date}
        </Text>
        <Text
          style={{
            color: 'rgba(138, 138, 138, 1)',
            textAlign: 'left',
            right: 2,
            fontSize: 12,
            fontWeight: '400',
            // lineHeight: 24,
            letterSpacing: 0.5,
          }}>
          {type_size}
        </Text>
      </View>
      <View style={styles.Timer}>
        <Text
          style={{
            color: 'rgba(51, 51, 51, 1)',
            right: 3,
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 24,
            letterSpacing: 0.5,
          }}>
          {price}
        </Text>
      </View>
    </View>
  );
};

export default CustomDress;

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: 120,
    // backgroundColor: 'yellow',
    borderRadius: 4,
    // paddingBottom: 10,
    // paddingRight: 10,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: 'rgba(230, 230, 230, 1)',
  },
  imageList: {
    width: '27%',
    height: 110,
    // backgroundColor: 'pink',
    // paddingTop: 5,
    // left: 6,
    // paddingLeft: 1,
    // gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // flexDirection: 'row',
  },
  TextList: {
    width: '30%',
    height: 80,
    // backgroundColor: 'orange',
    paddingTop: 5,
    paddingLeft: 4,
    // left: 3,
    gap: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  Timer: {
    width: '40%',
    height: 80,
    // backgroundColor: 'green',
    alignItems: 'flex-end',
    alignSelf: 'center',
    // top: 10,
    paddingTop: 25,
    // paddingLeft: 10,
    paddingRight: 10,
    gap: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
});

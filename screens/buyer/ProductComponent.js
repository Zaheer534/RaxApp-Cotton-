import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BuyerImages} from './images';
import {dress} from './constants';

const ProductComponent = () => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productDetailContainer}>
        <Text style={styles.productText}>{dress.itemStatus}</Text>
        <Text style={styles.productText}>{dress.item}</Text>
        <Text style={styles.productSecondText}>{dress.itemName}</Text>
        <Text style={styles.productText}>{dress.seller}</Text>
        <Text style={styles.productSecondText}>{dress.sellerName}</Text>
        <Text style={styles.productText}>{dress.cost}</Text>
        <Text style={styles.productSecondText}>{dress.costAmount}</Text>
        <Text style={styles.productText}>{dress.buy}</Text>
        <Text style={styles.productSecondText}>{dress.buyType}</Text>
      </View>
      <View style={styles.dressContainer}>
        <Image source={BuyerImages.dress} style={styles.dressImage} />
      </View>
    </View>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
    // backgroundColor: 'green',
  },
  productDetailContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  productText: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 10,

    lineHeight: 22,
    color: 'rgba(84, 84, 84, 1)',
  },
  productSecondText: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 5,
    color: 'rgba(0, 0, 0, 1)',
  },
  dressContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 8,
    padding: 10,
    paddingLeft: 25,
  },
  dressImage: {
    width: 155,
    height: 310,
    // resizeMode: 'contain',
  },
});

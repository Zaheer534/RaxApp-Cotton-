import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/themed';
import {dress, info} from './keywords';
import {OrderImages} from './images';

const OrderDetailsComponent = () => {
  return (
    <View style={styles.orderContainer}>
      <Text style={styles.orderText}>Order Details</Text>
      <Divider
        style={{width: '99%', marginLeft: 1, marginTop: 15}}
        orientation="horizontal"
        width={1}
        color="rgba(230, 230, 230, 1)"
        inset={true}
        insetType="right"
      />
      <View style={styles.dressDetailContainer}>
        <View style={styles.imageContainer}>
          <Image source={OrderImages.dress.ZaraDress} />
        </View>
        <View style={styles.dressText}>
          <Text style={styles.dressName}>{dress.name}</Text>
          <Text style={styles.dressType}>{dress.type}</Text>
          <Text style={[styles.dressType]}>{dress.size}</Text>
        </View>
      </View>
      <Divider
        style={{width: '99%', marginLeft: 4, marginTop: 5}}
        orientation="horizontal"
        width={1}
        color="rgba(230, 230, 230, 1)"
        inset={true}
        insetType="right"
      />
      <View style={styles.dressInformationContainer}>
        <View style={styles.innerFirst}>
          <Text style={styles.titleText}>{info.start}</Text>
          <Text style={styles.detailText}>{info.startDate}</Text>
        </View>
        <View style={styles.innerSecond}>
          <Text style={styles.titleText}>{info.end}</Text>
          <Text style={styles.detailText}>{info.endDate}</Text>
        </View>
      </View>
      <Divider
        style={{width: '99%', marginLeft: 4, marginTop: 5}}
        orientation="horizontal"
        width={1}
        color="rgba(230, 230, 230, 1)"
        inset={true}
        insetType="right"
      />
      <View style={styles.dressInformationContainer}>
        <View style={styles.innerFirst}>
          <Text style={styles.titleText}>{info.total}</Text>
          <Text style={styles.detailText}>{info.totalAmount}</Text>
        </View>
        <View style={styles.innerSecond}>
          <Text style={[styles.titleText, {right: 12}]}>{info.borrow}</Text>
          <Text style={[styles.detailText, {right: 12}]}>{info.days}</Text>
        </View>
      </View>
      <Divider
        style={{width: '99%', marginLeft: 4, marginTop: 5}}
        orientation="horizontal"
        width={1}
        color="rgba(230, 230, 230, 1)"
        inset={true}
        insetType="right"
      />
      <View style={styles.dressInformationContainer}>
        <View style={styles.innerFirst}>
          <Text style={styles.titleText}>{info.lender}</Text>
          <View style={styles.lenderContainer}>
            <Image style={{marginTop: 8}} source={OrderImages.dress.lender} />
            <Text
              style={[styles.detailText, {fontSize: 16, fontWeight: '500'}]}>
              {info.name}
            </Text>
          </View>
        </View>
        <View style={styles.innerSecond}>
          <Text style={styles.titleText}>{info.borrowMethod}</Text>
          <Text style={styles.detailText}>{info.shipping}</Text>
        </View>
      </View>
      <Divider
        style={{width: '99%', marginLeft: 4, marginTop: 5}}
        orientation="horizontal"
        width={1}
        color="rgba(230, 230, 230, 1)"
        inset={true}
        insetType="right"
      />
    </View>
  );
};

export default OrderDetailsComponent;

const styles = StyleSheet.create({
  orderContainer: {
    // flex: 0.8,
    padding: 5,
    paddingTop: 20,
  },
  orderText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },
  dressDetailContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    margin: 15,
  },
  dressText: {
    justifyContent: 'center',
  },
  dressName: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    top: 3,
    right: 5,
  },
  dressType: {
    color: 'rgba(117, 117, 117, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    top: 3,
    right: 5,
  },
  dressInformationContainer: {
    flexDirection: 'row',
    // alignItems: 'flex-start',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    right: 10,
  },
  innerFirst: {
    margin: 15,
    alignSelf: 'flex-start',
  },
  titleText: {
    color: 'rgba(37, 37, 37, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
  },
  innerSecond: {
    justifyContent: 'center',
  },
  detailText: {
    color: 'rgba(37, 37, 37, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 8,
  },
  lenderContainer: {
    flexDirection: 'row',
  },
});

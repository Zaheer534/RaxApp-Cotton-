import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BuyerImages} from './images';
import {keywords, steps} from './constants';
import ProductComponent from './ProductComponent';
import FAQsComponent from './FAQsComponent';
import SocialLinkComponent from './SocialLinksComponent';

const data = [
  {
    id: 1,
    text: 'Click the button below to message the seller to choose a time to meet',
  },
  {
    id: 2,
    text: 'Meet up with the seller and take your item',
  },
  {
    id: 3,
    text: 'Review the item here. This helps other buyers feel confident in buying from\nthis seller',
  },
];

const RenderItem = ({item, index}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 6,
        }}>
        <Text style={styles.indexPoints}>{index + 1}. </Text>
        <Text style={styles.stepPoints}>{item.text}</Text>
      </View>
    </>
  );
};

const BuyerComponent = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image source={BuyerImages.logo} style={styles.image} />
        </View>
        <Text style={styles.logoText}>rax</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{keywords.description}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{keywords.itemText}</Text>
      </View>
      <ProductComponent />
      <View style={styles.stepsContainer}>
        <Text style={styles.stepHeading}>{steps.stepHeading}</Text>
        {/* <Text style={styles.stepPoints}>{steps.stepPoints}</Text> */}
        <FlatList data={data} renderItem={RenderItem} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>chat with seller</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FAQsComponent />
      </View>
      <View>
        <SocialLinkComponent />
      </View>
    </ScrollView>
  );
};

export default BuyerComponent;

const styles = StyleSheet.create({
  header: {
    // gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 24,
    marginVertical: 20,
  },
  imageContainer: {
    // width: 48,
    // height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: 'rgba(255, 215, 0, 1)',
    padding: 10,
  },
  image: {
    width: 37,
    height: 17,
    resizeMode: 'contain',
    padding: 17,
  },
  logoText: {
    fontSize: 42.6,
    fontWeight: '400',
    // lineHeight: 31.3,
    // letterSpacing: 0.44,
    color: 'rgba(18, 18, 18, 1)',
    marginLeft: 10,
    // bottom: 5,
  },
  // description
  descriptionContainer: {
    backgroundColor: 'rgba(255, 215, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
  },
  //item
  itemContainer: {
    alignItems: 'center',
    marginVertical: 25,
  },
  itemText: {
    color: 'rgba(8, 55, 107, 1)',
    fontSize: 24,
    fontWeight: '400',
  },
  //step
  stepsContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  stepHeading: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 15,
    color: 'rgba(0, 0, 0, 1)',
  },
  indexPoints: {
    fontSize: 12,
    fontWeight: '400',
    // lineHeight: 24,
    // marginTop: 10,
    margin: 3,
    // marginLeft: 10,
    color: 'rgba(0, 0, 0, 1)',
  },
  stepPoints: {
    fontSize: 11,
    fontWeight: '400',
    // lineHeight: 24,
    // marginTop: 5,
    // marginLeft: 6,

    color: 'rgba(0, 0, 0, 1)',
  },
  //button
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  button: {
    width: 252,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
  },
});

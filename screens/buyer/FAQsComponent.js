import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FAQsComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>FAQs</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.innerTextHeading}>
          What if the item doesn't fit?
        </Text>
        <Text style={styles.innerTextDescription}>
          When ordering an item online this is always a risk. Message rax in
          {/* {'\n'} */}
          the chat section of the app or{' '}
          {/* <TouchableOpacity style={{paddingTop: 25}}> */}
          <Text style={{fontWeight: '700'}}>info@raxapp.ca</Text>
          {/* </TouchableOpacity>{' '} */} to let us know you will return the
          item to the lender within 24 hours of receiving it for a full refund.
          Items cannot be altered.
        </Text>
      </View>
      <Text style={styles.additionalDescription}>
        Have additional questions?{' '}
        <Text style={{fontWeight: '700'}}>
          See here for our full list of FAQs or message
        </Text>{' '}
        rax in the chat section of the app!
      </Text>
    </View>
  );
};

export default FAQsComponent;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
    padding: 20,
    margin: 22,
    borderRadius: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  innerContainer: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 10,
    // margin: 5,
  },
  innerTextHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(84, 84, 84, 1)',
    // margin: 13,
    padding: 12,
    // marginTop: 10,
    // marginLeft: 12,
  },
  innerTextDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(84, 84, 84, 1)',
    // padding: 5,
    lineHeight: 24,
    letterSpacing: 0.5,
    margin: 13,
  },
  additionalDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(84, 84, 84, 1)',
    // padding: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    margin: 5,
    marginTop: 10,
  },
});

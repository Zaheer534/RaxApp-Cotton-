import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../components/text';
import CustomInputComp from '../components/customInputComp';

const ContactUs = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.innerComponents}>
          <Image
            color={'rgba(0, 0, 0, 1)'}
            source={require('../assets/back-thin.png')}
          />
          <Text style={styles.headerText}>Contact Us</Text>
        </View>
      </View>
      <View style={styles.Description}>
        <Text style={styles.descriptionText}>
          Have a question or need support? We’d love to help you out!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.innerContainer}>
          <CustomText name="Customer Support" />
          <CustomInputComp name="Email" name2="info@raxapp.ca" />
        </View>
        <View style={styles.innerContainer2}>
          <CustomText name="Social Media" />
          <CustomInputComp name="Instagram" name2="@rent_rax" />
          <CustomInputComp name="Tik Tok" name2="@rent_rax" />
        </View>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 700,
    // backgroundColor: 'orange',
    paddingTop: 16,
  },
  Header: {
    width: '100%',
    height: 64,
    // backgroundColor: 'green',
    paddingTop: 8,
    paddingLeft: 3,
    // justifyContent: 'space-between',
    flexDirection: 'row',
  },
  innerComponents: {
    width: '45%',
    height: 44,
    // backgroundColor: 'yellow',
    paddingTop: 5,
    paddingLeft: 1,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  Description: {
    width: '100%',
    height: 64,
    // backgroundColor: 'pink',
    paddingTop: 8,
    paddingLeft: 16,
    // justifyContent: 'space-between',
    flexDirection: 'row',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'rgba(51, 51, 51, 1)',
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  inputContainer: {
    width: '98%',
    height: 324,
    gap: 20,
    // backgroundColor: 'pink',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingLeft: 0,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // borderWidth: 1,
  },
  innerContainer: {
    width: '98%',
    height: 124,
    // backgroundColor: 'pink',
    gap: 8,
    alignSelf: 'center',
    paddingTop: 8,
    paddingLeft: 5,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // borderWidth: 1,
  },
  innerContainer2: {
    width: '98%',
    height: 160,
    // backgroundColor: 'pink',
    alignSelf: 'center',
    paddingTop: 8,
    paddingLeft: 5,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // borderWidth: 1,
  },
});

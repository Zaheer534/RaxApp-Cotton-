import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../components/text';
import CustomInputComp from '../components/customInputComp';
import CustomNotifications from '../components/customNotifications';

const Notifications = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.innerComponents}>
          <Image
            color={'rgba(0, 0, 0, 1)'}
            source={require('../assets/back-thin.png')}
          />
          <Text style={styles.headerText}>Notifications</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.Description}>
          <CustomText name="Marketing preferences" />
          <Text style={styles.descriptionText}>
            Choose how to get special offers, promos, personalized suggestions
            and more
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerContainer}>
            <CustomText name="Push Notifications" />
            <CustomNotifications name="Promotional offers" />
            <CustomNotifications name="Recomendations" />
            <CustomNotifications name="Order Updates" />
            <CustomNotifications name="Reminders" />
          </View>
          <View style={styles.innerContainer2}>
            <CustomText name="Email" />
            <CustomNotifications name="Promotional offers" />
            <CustomNotifications name="Recomendations" />
            <CustomNotifications name="Reminders" />
            <CustomNotifications name="Borrow/Buy requests" />
            <CustomNotifications name="Use research and marketing surveys" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 866,
    // backgroundColor: 'orange',
    paddingTop: 16,
  },
  Header: {
    width: '100%',
    height: 64,
    // backgroundColor: 'green',
    paddingTop: 8,
    paddingLeft: 15,
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
    height: 75,
    // backgroundColor: 'pink',
    paddingTop: 8,
    paddingLeft: 12,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(51, 51, 51, 1)',
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  inputContainer: {
    width: '100%',
    height: 690,
    gap: 18,
    // backgroundColor: 'pink',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingLeft: 10,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // borderWidth: 1,
  },
  innerContainer: {
    width: '98%',
    height: 300,
    // backgroundColor: 'green',
    gap: 2,
    alignSelf: 'center',
    paddingTop: 8,
    paddingLeft: 0,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // borderWidth: 1,
  },
  innerContainer2: {
    width: '98%',
    height: 360,
    // backgroundColor: 'pink',
    alignSelf: 'center',
    paddingTop: 8,
    paddingLeft: 5,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // borderWidth: 1,
  },
});

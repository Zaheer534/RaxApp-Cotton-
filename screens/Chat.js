import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../components/text';
import CustomInputComp from '../components/customInputComp';
import CustomNotifications from '../components/customNotifications';

const Chat = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.innerComponents}>
          <Image
            color={'rgba(0, 0, 0, 1)'}
            source={require('../assets/back-thin.png')}
          />
          <Text style={styles.headerText}>Chats</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Image
            color={'rgba(0, 0, 0, 1)'}
            source={require('../assets/chatImg.png')}
          />
          <View style={styles.Description}>
            <Text style={styles.descriptionText}>
              No new chats! Receive messages here or send a message to other rax
              users.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;

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
    paddingLeft: 10,
    // justifyContent: 'space-between',
    flexDirection: 'row',
  },
  innerComponents: {
    width: '28%',
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
    // backgroundColor: 'green',
    paddingTop: 8,
    paddingLeft: 12,
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(51, 51, 51, 1)',
    lineHeight: 20,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    height: 690,
    gap: 18,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 28,
    paddingLeft: 0,
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

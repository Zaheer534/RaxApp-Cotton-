import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {EyeIcon} from './Images';

const PasswordResetComponent = () => {
  return (
    <View style={styles.emailContainer}>
      <View style={styles.emailTextContainer}>
        <Text style={styles.headingText}>Password reset</Text>
        <Text style={styles.detailText}>
          Set your new password to continue{' '}
        </Text>
      </View>
      <View style={styles.customSecondComponent}>
        <View style={[styles.customItemContainer, {paddingTop: 15}]}>
          <View style={styles.customThirdComponent}>
            <Text style={[styles.customText]}>New password</Text>
          </View>
          <View style={[styles.customInputContainer, {bottom: 5, height: 35}]}>
            <TextInput
              style={styles.customInpuText}
              placeholder="Enter new password"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.customItemSecondContainer}>
          <Image style={styles.eyeIcon} source={EyeIcon.eye} />
        </TouchableOpacity>
      </View>
      <View style={[styles.customSecondComponent, {bottom: 20}]}>
        <View style={[styles.customItemContainer]}>
          <View style={[styles.customInputContainer, {top: 1}]}>
            <TextInput
              style={[
                styles.customInpuText,
                {fontSize: 16, fontWeight: '400', top: 3},
              ]}
              placeholder="Re-enter new password"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.customItemSecondContainer}>
          <Image style={styles.eyeIcon} source={EyeIcon.eye} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordResetComponent;

const styles = StyleSheet.create({
  emailContainer: {
    padding: 10,
    top: 20,
    gap: 40,
    height: 570,
    // backgroundColor: 'green',
  },
  emailTextContainer: {
    // padding: 7,
    gap: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },
  detailText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'rgba(51, 51, 51, 1)',
  },
  //second

  customSecondComponent: {
    flexDirection: 'row',
    width: 386,
    height: 56,
    borderRadius: 4,
    // paddingTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(51, 51, 51, 1)',
    backgroundColor: 'rgba(230, 230, 230, 1)',
  },
  customItemContainer: {
    // flexDirection: 'row',
    // width: 304,
    // height: 70,
    borderRadius: 4,
    paddingTop: 8,
    right: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },

  customItemSecondContainer: {
    width: 50,
    height: 60,
    borderRadius: 4,
    left: 5,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  eyeIcon: {
    // position: 'absolute',
    width: 14.33,
    height: 12,
    bottom: 3,
    left: 15,
    color: 'rgba(0, 0, 0, 1)',
  },
  customThirdComponent: {
    // flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    // backgroundColor: 'yellow',
  },
  customText: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },

  customInputContainer: {
    width: 302,
    height: 37,
    // padding: 8,
    right: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  customInpuText: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    // letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
});

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {Divider} from '@rneui/themed';
const Sheet = () => {
  return (
    <View style={{flex: 1}}>
      <BottomSheet isOpen={true} sliderMaxHeight={'80%'}>
        <ScrollView>
          <View style={styles.resetPasswordContainer}>
            <Text style={styles.resetPasswordText}>Reset password</Text>
          </View>
          <Divider
            orientation="horizontal"
            width={1}
            color="rgba(230, 230, 230, 1)"
            // insetType="middle"
          />
          <View style={styles.resetPasswordDetailContainer}>
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>
                Welcome to the new rax app!
              </Text>
              <Text style={styles.detailText}>
                We've made some exciting updates to enhance your user
                experience:
                {'\n'}
                🏃🏼‍♀️Faster app
                {'\n'}
                📱New features
                {'\n'}
                👗& more
                {'\n'}
                {'\n'}
                As we've migrated onto a new platform, please reset your
                password (using the same email you logged in with on the
                previous app) to receive access to your account.
                {'\n'}
                {'\n'}
                If you have previous listings, don't worry! They will be saved.
                {'\n'}
                {'\n'}
                We're so excited for you to make money on your closet, save
                money borrowing, all while driving circularity of fashion!♻️
              </Text>
            </View>
          </View>
          <View style={styles.resetButtonContainer}>
            <TouchableOpacity style={styles.resetButton}>
              <Text style={styles.resetButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default Sheet;

const styles = StyleSheet.create({
  resetPasswordContainer: {
    padding: 10,
  },
  resetPasswordText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
  },
  resetPasswordDetailContainer: {
    padding: 10,
    top: 15,
    height: 570,
    // backgroundColor: 'green',
  },
  welcomeTextContainer: {
    // padding: 7,
    gap: 20,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 14,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },
  detailText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },

  resetButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: 410,
    height: 79,
    gap: 25,
    borderColor: 'rgba(230, 230, 230, 1)',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  resetButton: {
    width: 358,
    height: 43,
    borderRadius: 8,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  resetButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
});

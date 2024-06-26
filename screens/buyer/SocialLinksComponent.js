import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {BuyerImages} from './images';
import {openLink} from './OpenSocialMediaLinks';

const SocialLinkComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={url => {
            openLink('https://www.instagram.com/');
          }}>
          <Image source={BuyerImages.insta} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://www.linkedin.com/feed/');
          }}>
          <Image source={BuyerImages.linkedin} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://www.tiktok.com/explore');
          }}>
          <Image source={BuyerImages.tiktok} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://play.google.com/store/games?hl=en');
          }}>
          <Image source={BuyerImages.playstore} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://www.apple.com/');
          }}>
          <Image source={BuyerImages.apple} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={url => {
            openLink('https://mail.google.com/mail/');
          }}>
          <Image source={BuyerImages.gmail} style={styles.icons} />
        </TouchableOpacity>
      </View>
      <Text style={styles.additionalDescription}>
        Want to change how you receive these emails? You can update or
        unsubscribe <Text style={{fontWeight: '700'}}>your preferences</Text> or{' '}
        <Text style={{fontWeight: '700'}}>unsubscribe</Text>
      </Text>
      <Text style={styles.copyRight}>
        Copyright (C) 2024 rax. All rights reserved
      </Text>
    </View>
  );
};

export default SocialLinkComponent;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
    padding: 20,
    margin: 22,
    borderRadius: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    borderRadius: 10,
    gap: 5,
    marginTop: 10,
  },
  icons: {
    width: 20,
    height: 20,
    margin: 15,
  },
  additionalDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(84, 84, 84, 1)',
    // padding: 18,
    lineHeight: 24,
    // letterSpacing: 0.5,
    // margin: 5,
    marginTop: 5,
    marginRight: 15,
  },
  copyRight: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(84, 84, 84, 1)',
    // padding: 18,
    lineHeight: 24,
    // letterSpacing: 0.5,
    // margin: 5,
    marginTop: 5,

    marginRight: 87,
  },
});

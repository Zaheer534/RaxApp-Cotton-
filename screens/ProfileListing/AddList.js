import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import {Profile, ProfileList, EditProfile} from './Keywords';
import {BackButton, RightIcon, ProfileIcon, AddListImg} from './ProfileImages';
const AddList = () => {
  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.profileSubContainer}>
          <Image style={styles.addedImage} source={AddListImg.addIcon} />
          <Text style={styles.listText}>Listing added</Text>
          <Text style={styles.message}>
            Your listing has been successfully added! Here are the details:
          </Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.listText}>Listing Details</Text>
        </View>
        <View style={styles.profileInnerSubContainer}>
          <View style={styles.locationContainer}>
            <View style={styles.locationFirstContainer}>
              <Text style={styles.profileLocation}>{EditProfile.location}</Text>
              <Text style={styles.profilePlace}>{EditProfile.place}</Text>
            </View>
            <View style={styles.locationSecondContainer}>
              <Image style={styles.listImg} source={AddListImg.listImg} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>{EditProfile.save}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddList;

const styles = StyleSheet.create({
  profileContainer: {
    width: 410,
    gap: 25,
    // top: 15,
    paddingTop: 40,
    alignItemsL: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  profileSubContainer: {
    width: 330,
    // height: 164,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  detailContainer: {
    width: 200,
    // height: 164,
    gap: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  addedImage: {
    width: 80,
    height: 80,
    // top: 15,
    // right: 15,
    color: 'rgba(0, 0, 0, 1)',
  },
  listText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 24,
    fontWeight: '700',
    // lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  message: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
    // lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    textAlign: 'center',
  },
  editIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 56,
    right: 13,
    color: 'rgba(0, 0, 0, 1)',
  },
  profileName: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  profileInnerSubContainer: {
    // flexDirection: 'row',
    width: 410,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  nameContainer: {
    width: 374,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
  },
  profileName: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  profilePerson: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },

  bioContainer: {
    width: 374,
    height: 56,
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
  },
  profileBio: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  profileDescription: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  locationContainer: {
    flexDirection: 'row',
    width: 374,
    height: 86,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  locationFirstContainer: {
    width: 330,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  profileLocation: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  profilePlace: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  locationSecondContainer: {
    width: 180,
    height: 96,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  listImg: {
    // position: 'absolute',
    width: 72,
    height: 72,
    alignSelf: 'center',
    // top: 56,
    // right: 13,
    // color: 'rgba(0, 0, 0, 1)',
  },
  saveButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: 410,
    height: 79,
    gap: 25,
    borderTopWidth: 1,
    borderColor: 'rgba(230, 230, 230, 1)',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  saveButton: {
    width: 358,
    height: 43,
    borderRadius: 8,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  saveButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },

  shareButton: {
    width: 183,
    height: 27,
    borderRadius: 4,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  shareButtonText: {
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

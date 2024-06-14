import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import {Profile, ProfileList, EditProfile} from './Keywords';
import {BackButton, RightIcon, ProfileIcon} from './ProfileImages';
const EditProlileComponent = () => {
  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.profileSubContainer}>
          <Image style={styles.profileImage} source={ProfileIcon.profile} />
          <Image style={styles.editIcon} source={BackButton.edit} />
        </View>
        <View style={styles.profileInnerSubContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.profileName}>{EditProfile.name}</Text>
            <Text style={styles.profilePerson}>{EditProfile.personName}</Text>
          </View>

          <View style={styles.bioContainer}>
            <Text style={styles.profileBio}>{EditProfile.bio}</Text>
            <Text style={styles.profileDescription}>
              {EditProfile.description}
            </Text>
          </View>
          <View style={styles.locationContainer}>
            <View style={styles.locationFirstContainer}>
              <Text style={styles.profileLocation}>{EditProfile.location}</Text>
              <Text style={styles.profilePlace}>{EditProfile.place}</Text>
            </View>
            <View style={styles.locationSecondContainer}>
              <Image style={styles.rightIcon} source={RightIcon.rigntIcon} />
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

export default EditProlileComponent;

const styles = StyleSheet.create({
  profileContainer: {
    width: 410,
    gap: 20,
    top: 15,
    paddingTop: 40,
    alignItemsL: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  profileSubContainer: {
    width: 110,
    // height: 164,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  profileImage: {
    width: 80,
    height: 80,
    // top: 15,
    // right: 15,
    color: 'rgba(0, 0, 0, 1)',
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
    height: 56,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
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
    width: 40,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  rightIcon: {
    // position: 'absolute',
    width: 8,
    height: 13.33,
    // top: 56,
    // right: 13,
    color: 'rgba(0, 0, 0, 1)',
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

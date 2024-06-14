import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import {Profile, ProfileList} from './Keywords';
import {ListIcon, ProfileIcon} from './ProfileImages';
const ProlileComponent = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileSubContainer}>
        <Image style={styles.profileImage} source={ProfileIcon.profile} />
        <Text style={styles.profileName}>{Profile.name}</Text>
      </View>
      <View style={styles.profileInnerSubContainer}>
        <View style={styles.location}>
          <Text style={styles.profileLocation}>{Profile.location}</Text>
          <Text style={styles.profilePlace}>{Profile.place}</Text>
        </View>
        {/* <View style={styles.divider}> */}
        <Divider
          orientation="vertical"
          width={1}
          color="rgba(230, 230, 230, 1)"
          // insetType="middle"
        />
        {/* </View> */}

        <View style={styles.list}>
          <Text style={styles.profileList}>{Profile.listings}</Text>
          <Text style={styles.profileNumber}>{Profile.number}</Text>
        </View>
      </View>
      <View style={styles.profileDescription}>
        <Text style={styles.descriptionText}>{Profile.about}</Text>
      </View>
      <View style={styles.profileButtonContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>{Profile.EditButton}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>{Profile.ShareButton}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemsListContainer}>
        <View style={styles.listTextContainer}>
          <Text style={styles.listText}>
            No listings yet! Add items to start earning cash on your closet
          </Text>
        </View>

        <View style={styles.pointsContainer}>
          <View style={styles.firstPointContainer}>
            <View style={styles.firstPoint}>
              <Text style={styles.firstPointText}>1</Text>
            </View>
            <Text style={styles.firstPointListText}>
              List an item in less than 2 minutes
            </Text>
          </View>
          <View style={styles.secondPointContainer}>
            <View style={styles.secondPoint}>
              <Text style={styles.secondPointText}>2</Text>
            </View>
            <Text style={styles.secondPointListText}>Get borrow requests</Text>
          </View>
          <View style={styles.thirdPointContainer}>
            <View style={styles.thirdPoint}>
              <Text style={styles.thirdPointText}>3</Text>
            </View>
            <Text style={styles.thirdPointListText}>
              Meet up in person or ship out the item (depending {'\n'} on what
              the borrower chooses)
            </Text>
          </View>
          <View style={styles.addListContainer}>
            <Text style={styles.addListFirstText}>Press the plus button</Text>
            <TouchableOpacity style={styles.plusContainer}>
              <Image style={styles.plusImage} source={ListIcon.plus} />
            </TouchableOpacity>
            <Text style={styles.addListFirstText}>
              anytime to start listing
            </Text>
          </View>
          <View style={styles.lenderContainer}>
            <Text style={styles.lenderFirstText}>See all lender</Text>
            <TouchableOpacity style={styles.faqContainer}>
              <Text style={styles.lenderSecondText}>FAQs</Text>
            </TouchableOpacity>
            <Text style={styles.lenderThirdText}>here</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProlileComponent;

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
    flexDirection: 'row',
    width: 410,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  location: {
    width: 200,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  profileLocation: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  profilePlace: {
    color: 'rgba(8, 55, 107, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  divider: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  list: {
    width: 200,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  profileList: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  profileNumber: {
    color: 'rgba(8, 55, 107, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  profileDescription: {
    width: 370,
    gap: 10,
    right: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  descriptionText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  profileButtonContainer: {
    flexDirection: 'row',
    width: 410,
    gap: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  editButton: {
    width: 183,
    height: 27,
    borderRadius: 4,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  editButtonText: {
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
  itemsListContainer: {
    width: 410,
    gap: 15,
    top: 15,
    paddingTop: 40,
    alignItemsL: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  listTextContainer: {
    width: 410,
    gap: 20,
    // top: 15,
    paddingTop: 15,
    alignItemsL: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  listText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  pointsContainer: {
    width: 410,
    gap: 20,
    // paddingRight: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  firstPointContainer: {
    flexDirection: 'row',
    width: 380,
    gap: 15,
    paddingLeft: 15,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  firstPoint: {
    flexDirection: 'row',
    width: 24,
    height: 24,
    borderRadius: 15,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 243, 176, 1)',
  },
  firstPointText: {
    color: 'rgba(37, 37, 37, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  firstPointListText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },

  secondPointContainer: {
    flexDirection: 'row',
    width: 380,
    gap: 15,
    paddingLeft: 15,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'pink',
  },
  secondPoint: {
    flexDirection: 'row',
    width: 24,
    height: 24,
    borderRadius: 15,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 243, 176, 1)',
  },
  secondPointText: {
    color: 'rgba(37, 37, 37, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  secondPointListText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },

  thirdPointContainer: {
    flexDirection: 'row',
    width: 370,
    gap: 15,
    paddingRight: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'pink',
  },
  thirdPoint: {
    flexDirection: 'row',
    width: 24,
    height: 24,
    borderRadius: 15,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 243, 176, 1)',
  },
  thirdPointText: {
    color: 'rgba(37, 37, 37, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    textAlign: 'left',
    // top: 15,
    // left: 15,
  },
  thirdPointListText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: 'left',
    // alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  addListContainer: {
    flexDirection: 'row',
    width: 380,
    gap: 5,
    paddingLeft: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'pink',
  },
  plusContainer: {
    flexDirection: 'row',
    width: 20,
    height: 20,
    borderRadius: 15,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 243, 176, 1)',
  },
  addListFirstText: {
    color: 'rgba(37, 37, 37, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    textAlign: 'left',
    // top: 15,
    // left: 15,
  },
  addListSecondText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: 'left',
    // alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  plusImage: {
    width: 16,
    height: 16,
    // top: 15,
    // right: 15,
    color: 'rgba(0, 0, 0, 1)',
  },

  lenderContainer: {
    flexDirection: 'row',
    width: 380,
    gap: 5,
    paddingLeft: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'pink',
  },
  faqContainer: {
    flexDirection: 'row',
    width: 33,
    height: 25,
    // borderRadius: 15,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 243, 176, 1)',
  },
  lenderFirstText: {
    color: 'rgba(37, 37, 37, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    textAlign: 'left',
    // top: 15,
    // left: 15,
  },
  lenderSecondText: {
    color: 'rgba(8, 55, 107, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    textAlign: 'left',
    // top: 15,
    // left: 15,
  },
  lenderThirdText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: 'left',
    // alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
});

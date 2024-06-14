import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from '@rneui/base';
import {Profile, ProfileList, EditProfile, ListAdd} from './Keywords';
import {BackButton, RightIcon, ProfileIcon, AddListImg} from './ProfileImages';
import AddedList from './index4';
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
        <View style={styles.listData}>
          <View style={styles.detailContainer}>
            <Text style={styles.listText}>Listing Details</Text>
          </View>
          <View style={styles.divider}>
            <Divider
              orientation="horizantal"
              width={2}
              color="rgba(230, 230, 230, 1)"
              // insetType="middle"
            />
          </View>
          <View style={styles.listContainer}>
            <View style={styles.listItemContainer}>
              <View style={styles.listFirstContainer}>
                <Text style={styles.item}>{ListAdd.item}</Text>
                <Text style={styles.brand}>{ListAdd.brand}</Text>
              </View>
              <View style={styles.listSecondContainer}>
                <Image style={styles.listImg} source={AddListImg.listImg} />
              </View>
            </View>
          </View>

          <View style={styles.divider}>
            <Divider
              orientation="horizantal"
              width={2}
              color="rgba(230, 230, 230, 1)"
              // insetType="middle"
            />
          </View>
          <View style={styles.retailContainer}>
            <View style={styles.retailItemContainer}>
              <View style={styles.retailFirstContainer}>
                <Text style={styles.retailItem}>{ListAdd.retail}</Text>
                <Text style={styles.retailBrand}>{ListAdd.price}</Text>
              </View>
              <View style={styles.categoryContainer}>
                <Text style={styles.category}>{ListAdd.category}</Text>
                <Text style={styles.dress}>{ListAdd.dress}</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider}>
            <Divider
              orientation="horizantal"
              width={2}
              color="rgba(230, 230, 230, 1)"
              // insetType="middle"
            />
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceItemContainer}>
              <View style={styles.priceFirstContainer}>
                <Text style={styles.priceItem}>{ListAdd.listing}</Text>
                <Text style={styles.totalPrice}>{ListAdd.listingPrice}</Text>
              </View>
              <View style={styles.sellPriceContainer}>
                <Text style={styles.sellItem}>{ListAdd.sell}</Text>
                <Text style={styles.sellPrice}>{ListAdd.sellPrice}</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider}>
            <Divider
              orientation="horizantal"
              width={2}
              color="rgba(230, 230, 230, 1)"
              // insetType="middle"
            />
          </View>
          <View style={styles.availableContainer}>
            <View style={styles.availableItemContainer}>
              <View style={styles.availabilityContainer}>
                <Text style={styles.availibility}>{ListAdd.availability}</Text>
                <Text style={styles.days}>{ListAdd.lending}</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider}>
            <Divider
              orientation="horizantal"
              width={2}
              color="rgba(230, 230, 230, 1)"
              // insetType="middle"
            />
          </View>
        </View>
      </View>
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.listButtonText}>{EditProfile.listItem}</Text>
        </TouchableOpacity>
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
    // backgroundColor: 'red',
  },
  profileSubContainer: {
    width: 330,
    // height: 164,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  listData: {
    width: 410,
    // height: 164,
    gap: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  detailContainer: {
    width: 200,
    // height: 164,
    gap: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
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
  // list data
  divider: {
    width: 367,
    // height: 70,
    alignSelf: 'center',
    right: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  listContainer: {
    // flexDirection: 'row',
    width: 410,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    // backgroundColor: 'orange',
  },

  listItemContainer: {
    flexDirection: 'row',
    width: 374,
    height: 88,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  listFirstContainer: {
    width: 180,
    height: 86,
    borderRadius: 4,
    padding: 8,
    gap: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  item: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  brand: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  listSecondContainer: {
    width: 180,
    height: 86,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  listImg: {
    width: 72,
    height: 72,
    alignSelf: 'flex-end',
  },
  // 2nd

  retailContainer: {
    // flexDirection: 'row',
    width: 410,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    // backgroundColor: 'orange',
  },

  retailItemContainer: {
    flexDirection: 'row',
    width: 374,
    height: 52,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  retailFirstContainer: {
    width: 180,
    height: 52,
    borderRadius: 4,
    padding: 8,
    gap: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  retailItem: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  retailBrand: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },

  categoryContainer: {
    width: 180,
    height: 52,
    borderRadius: 4,
    paddingLeft: 15,
    gap: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'orange',
  },
  category: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  dress: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    right: 15,
  },

  //3rd

  priceContainer: {
    // flexDirection: 'row',
    width: 410,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    // backgroundColor: 'orange',
  },

  priceItemContainer: {
    flexDirection: 'row',
    width: 374,
    height: 52,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  priceFirstContainer: {
    width: 180,
    height: 52,
    borderRadius: 4,
    padding: 8,
    gap: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  priceItem: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  totalPrice: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },

  sellPriceContainer: {
    width: 180,
    height: 52,
    borderRadius: 4,
    paddingLeft: 15,
    gap: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'orange',
  },
  sellItem: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
  sellPrice: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // right: 15,
  },

  // 4th

  availableContainer: {
    // flexDirection: 'row',
    width: 410,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    // backgroundColor: 'orange',
  },

  availableItemContainer: {
    flexDirection: 'row',
    width: 374,
    height: 52,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  availabilityContainer: {
    width: 370,
    height: 50,
    borderRadius: 4,
    padding: 13,
    gap: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  availibility: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  days: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },

  saveButtonContainer: {
    position: 'absolute',
    bottom: 10,
    width: 410,
    height: 110,
    gap: 15,
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

  listButton: {
    width: 358,
    height: 43,
    borderRadius: 8,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(8, 55, 107, 1)',
    // backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  listButtonText: {
    color: 'rgba(8, 55, 107, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },
});

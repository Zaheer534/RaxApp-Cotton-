import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Divider} from '@rneui/base';
import {Profile, ProfileList, EditProfile, ListItems} from './Keywords';
import {BackButton, RightIcon, ProfileIcon} from './ProfileImages';
import Slider from '@react-native-community/slider';
import CheckBox from '@react-native-community/checkbox';
const ListingForm = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <>
      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.profileInnerSubContainer}>
            {/* <View style={styles.nameContainer}>
              <Text style={styles.profileName}>{EditProfile.name}</Text>
              <Text style={styles.profilePerson}>{EditProfile.personName}</Text>
            </View> */}

            <View style={styles.brandContainer}>
              <TextInput placeholder="Brand Name" style={styles.brand} />
            </View>

            <View style={styles.itemNameContainer}>
              <TextInput placeholder="Name of item" style={styles.item} />
            </View>

            <View style={styles.descriptionContainer}>
              <TextInput
                placeholder="Description(Condition, meterial, fit, etc)"
                style={styles.description}
              />
            </View>

            <View style={styles.categoryContainer}>
              <View style={styles.categoryFirstContainer}>
                <Text style={styles.category}>{ListItems.category}</Text>
              </View>
              <View style={styles.categorySecondContainer}>
                <Image style={styles.rightIcon} source={RightIcon.rigntIcon} />
              </View>
            </View>

            <View style={styles.subCategoryContainer}>
              <View style={styles.subCategoryFirstContainer}>
                <Text style={styles.subCategory}>{ListItems.subCategory}</Text>
              </View>
              <View style={styles.subCategorySecondContainer}>
                <Image style={styles.rightIcon} source={RightIcon.rigntIcon} />
              </View>
            </View>

            <View style={styles.occasionContainer}>
              <View style={styles.occasionFirstContainer}>
                <Text style={styles.occasion}>{ListItems.occasion}</Text>
              </View>
              <View style={styles.ocassionSecondContainer}>
                <Image style={styles.rightIcon} source={RightIcon.rigntIcon} />
              </View>
            </View>

            <View style={styles.sizeContainer}>
              <View style={styles.sizeFirstContainer}>
                <Text style={styles.size}>{ListItems.size}</Text>
              </View>
              <View style={styles.sizeSecondContainer}>
                <Image style={styles.rightIcon} source={RightIcon.rigntIcon} />
              </View>
            </View>

            <View style={styles.colorContainer}>
              <View style={styles.colorFirstContainer}>
                <Text style={styles.color}>{ListItems.color}</Text>
              </View>
              <View style={styles.colorSecondContainer}>
                <Image style={styles.rightIcon} source={RightIcon.rigntIcon} />
              </View>
            </View>

            <View style={styles.sliderContainer}>
              <View style={styles.sliderInnerContainer}>
                <View style={styles.sliderHeading}>
                  <Text style={styles.headingText}>Fit</Text>
                </View>
                <View style={styles.slider}>
                  <Slider
                    style={{width: 360, height: 90}}
                    minimumValue={0}
                    maximumValue={1}
                    step={0.5}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="black"
                  />
                </View>
                <View style={styles.sliderRange}>
                  <Text style={styles.color}>Tight</Text>
                  <Text style={styles.color}>Perfect</Text>
                  <Text style={styles.color}>Loose</Text>
                </View>
              </View>
              <View style={styles.sliderInnerContainer}>
                <View style={styles.sliderHeading}>
                  <Text style={styles.headingText}>Length</Text>
                </View>
                <View style={styles.slider}>
                  <Slider
                    style={{width: 360, height: 90}}
                    minimumValue={0}
                    maximumValue={1}
                    step={0.5}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="black"
                  />
                </View>
                <View style={styles.sliderRange}>
                  <Text style={styles.color}>Short</Text>
                  <Text style={styles.color}>Perfect</Text>
                  <Text style={styles.color}>Long</Text>
                </View>
              </View>

              <View style={styles.sliderInnerContainer}>
                <View style={styles.sliderHeading}>
                  <Text style={styles.headingText}>Condition</Text>
                </View>
                <View style={styles.slider}>
                  <Slider
                    style={{width: 360, height: 90}}
                    minimumValue={0}
                    maximumValue={1}
                    step={0.5}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="black"
                  />
                </View>
                <View style={styles.sliderRange}>
                  <Text style={styles.color}>Bad</Text>
                  <Text style={styles.color}>Good</Text>
                  <Text style={styles.color}>Great</Text>
                </View>
              </View>
            </View>
            <View style={styles.customContainer}>
              <View style={styles.customInnerContainer}>
                <View style={styles.customHeading}>
                  <Text style={styles.customText}>Location</Text>
                </View>
                <View style={styles.customSecondComponent}>
                  <View style={styles.customItemContainer}>
                    <View style={styles.customItemFirstContainer}>
                      <Text style={styles.customItemText}>
                        {ListItems.address}
                      </Text>
                    </View>
                    <View style={styles.customItemSecondContainer}>
                      <Image
                        style={styles.rightIcon}
                        source={RightIcon.rigntIcon}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.customThirdComponent}>
                  <Divider
                    orientation="horizantal"
                    width={5}
                    color="rgba(230, 230, 230, 1)"
                    // insetType="middle"
                  />
                </View>
              </View>
            </View>

            <View style={styles.customContainer}>
              <View style={styles.customInnerContainer}>
                <View style={styles.customHeading}>
                  <Text style={styles.customText}>Pricing</Text>
                </View>
                <View style={[styles.customSecondComponent, {height: 130}]}>
                  <View style={[styles.customItemContainer, {top: 0}]}>
                    <View style={styles.customInputContainer}>
                      <TextInput
                        style={styles.customInpuText}
                        placeholder="Retail price (include taxes, shipping, duties)"
                      />
                    </View>
                  </View>
                  <View style={[styles.customItemContainer, {top: 10}]}>
                    <View style={[styles.customInputContainer]}>
                      <TextInput
                        style={styles.customInpuText}
                        placeholder="Listing price (include dry cleaning costs if applicable)"
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.customThirdComponent,
                    {top: 2, alignItems: 'center', paddingLeft: 20},
                  ]}>
                  <Text
                    style={[
                      styles.customText,
                      {
                        fontSize: 12,
                        fontWeight: '400',
                        color: 'rgba(84, 84, 84, 1)',
                        // textAlign: 'center',
                      },
                    ]}>
                    We recommend the listing price to be 20% of retail price
                  </Text>
                </View>
                <View
                  style={[
                    styles.customThirdComponent,
                    // {top: 2, alignItems: 'center', paddingLeft: 20},
                  ]}>
                  <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
                  />
                  <Text
                    style={[
                      styles.customText,
                      {
                        fontSize: 16,
                        top: 3,
                        fontWeight: '400',
                        color: 'rgba(73, 69, 79, 1)',
                        // textAlign: 'center',
                      },
                    ]}>
                    Sell your listing
                  </Text>
                </View>
                <View style={[styles.customItemContainer, {top: 10}]}>
                  <View style={[styles.customInputContainer]}>
                    <TextInput
                      style={styles.customInpuText}
                      placeholder="Sell price"
                    />
                  </View>
                </View>
                <View
                  style={[
                    styles.customThirdComponent,
                    {top: 13, alignItems: 'center', paddingLeft: 17},
                  ]}>
                  <Text
                    style={[
                      styles.customText,
                      {
                        fontSize: 12,
                        fontWeight: '400',
                        color: 'rgba(84, 84, 84, 1)',
                        // textAlign: 'center',
                      },
                    ]}>
                    We recommend the listing price to be 50% of retail price
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.customContainer,
                {
                  top: 40,
                },
              ]}>
              <View style={styles.customInnerContainer}>
                <View style={styles.customHeading}>
                  <Text style={styles.customText}>Get paid out</Text>
                </View>
                <View style={[styles.customSecondComponent, {height: 60}]}>
                  {/* <View style={styles.saveButtonContainer}> */}
                  <TouchableOpacity style={styles.bankButton}>
                    <Text style={styles.bankButtonText}>
                      {EditProfile.bank}
                    </Text>
                  </TouchableOpacity>
                  {/* </View> */}
                </View>

                <View
                  style={[
                    styles.customThirdComponent,
                    {top: 5, alignItems: 'flex-start', paddingLeft: 10},
                  ]}>
                  <Text
                    style={[
                      styles.customText,
                      {
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'rgba(84, 84, 84, 1)',
                        // textAlign: 'center',
                      },
                    ]}>
                    Note:
                  </Text>
                  <Text
                    style={[
                      styles.customText,
                      {
                        fontSize: 12,
                        fontWeight: '400',
                        color: 'rgba(84, 84, 84, 1)',
                        // textAlign: 'center',
                      },
                    ]}>
                    Connect bank account details to get paid for your lends.{' '}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.customContainer,
                {
                  top: 60,
                },
              ]}>
              <View style={styles.customInnerContainer}>
                <View style={styles.customHeading}>
                  <Text style={styles.customText}>Availability</Text>
                </View>
                <View style={styles.customSecondComponent}>
                  <View style={styles.customItemContainer}>
                    <View style={styles.customItemFirstContainer}>
                      <Text style={styles.customItemText}>
                        {ListItems.period}
                      </Text>
                    </View>
                    <View style={styles.customItemSecondContainer}>
                      <Image
                        style={styles.downIcon}
                        source={RightIcon.downIcon}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.customSecondComponent}>
                  <View style={styles.customItemContainer}>
                    <View style={styles.customItemFirstContainer}>
                      <Text style={styles.customItemText}>
                        {ListItems.dates}
                      </Text>
                    </View>
                    <View style={styles.customItemSecondContainer}>
                      <Image
                        style={styles.calendarIcon}
                        source={RightIcon.calender}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>{EditProfile.listing}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default ListingForm;

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

  profileInnerSubContainer: {
    // flexDirection: 'row',
    width: 410,
    height: 2100,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  // brand input
  brandContainer: {
    width: 374,
    height: 56,
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
  },
  brand: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    // letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },

  // item container
  itemNameContainer: {
    width: 374,
    height: 56,
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
  },
  item: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    // letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  // description container

  descriptionContainer: {
    width: 374,
    height: 56,
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(230, 230, 230, 1)',
  },
  description: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    // letterSpacing: 0.5,
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

  // category
  categoryContainer: {
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
  categoryFirstContainer: {
    width: 330,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  category: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  categorySecondContainer: {
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

  // subCategory
  subCategoryContainer: {
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
  subCategoryFirstContainer: {
    width: 330,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  subCategory: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  subCategorySecondContainer: {
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

  // occasion
  occasionContainer: {
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
  occasionFirstContainer: {
    width: 330,
    height: 56,
    borderRadius: 4,
    // padding: 8,
    right: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  occasion: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  occasionSecondContainer: {
    width: 40,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  // size

  sizeContainer: {
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
  sizeFirstContainer: {
    width: 330,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  size: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  sizeSecondContainer: {
    width: 40,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  //color container

  colorContainer: {
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
  colorFirstContainer: {
    width: 330,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  color: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  colorSecondContainer: {
    width: 40,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },

  // slider

  sliderContainer: {
    // flexDirection: 'row',
    width: 374,
    // height: 196,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(230, 230, 230, 1)',
  },
  sliderInnerContainer: {
    // flexDirection: 'row',
    width: 374,
    // height: 166,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  sliderHeading: {
    // flexDirection: 'row',
    width: 360,
    height: 36,
    borderRadius: 4,
    padding: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  headingText: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  slider: {
    // flexDirection: 'row',
    width: 360,
    height: 26,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  sliderRange: {
    flexDirection: 'row',
    width: 360,
    height: 26,
    borderRadius: 4,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  // custom styles
  customContainer: {
    // flexDirection: 'row',
    width: 390,
    // height: 596,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  customInnerContainer: {
    // flexDirection: 'row',
    width: 374,
    // height: 166,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  customHeading: {
    // flexDirection: 'row',
    width: 380,
    height: 36,
    borderRadius: 4,
    // padding: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  customText: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  customSecondComponent: {
    // flexDirection: 'row',
    width: 380,
    height: 66,
    borderRadius: 4,
    // padding: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  customThirdComponent: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    // backgroundColor: 'yellow',
  },

  customItemContainer: {
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

  customItemFirstContainer: {
    width: 330,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },

  customItemText: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  customItemSecondContainer: {
    width: 40,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  customInputContainer: {
    width: 362,
    height: 56,
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  customInpuText: {
    color: 'rgba(84, 84, 84, 1)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    // letterSpacing: 0.5,
    alignSelf: 'flex-start',
    // top: 15,
    // left: 15,
  },
  bankButton: {
    width: 374,
    height: 43,
    borderRadius: 8,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(8, 55, 107, 1',

    // backgroundColor: 'green',
  },
  bankButtonText: {
    color: 'rgba(8, 55, 107, 1)',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.5,
    alignSelf: 'center',
    // top: 15,
    // left: 15,
  },

  downIcon: {
    // position: 'absolute',
    width: 16,
    height: 16,
    // top: 56,
    // right: 13,
    color: 'rgba(0, 0, 0, 1)',
  },
  calendarIcon: {
    // position: 'absolute',
    width: 16,
    height: 16,
    // top: 56,
    // right: 13,
    color: 'rgba(0, 0, 0, 1)',
  },

  //BtnContainer
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
});

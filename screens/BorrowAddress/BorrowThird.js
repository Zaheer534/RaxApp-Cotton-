import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useMemo} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {color} from '@rneui/base';

const BorrowThird = () => {
  const [selectedId, setSelectedId] = useState(false);
  const [selected, setSelected] = useState('blue');
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Local pick-Up',
        color: 'rgba(8, 55, 107, 1)',
        borderSize: 3,
        containerStyle: {
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: '400',
          color: 'rgba(51, 51, 51, 1)',
          lineHeight: 24,
          letterSpacing: 0.5,
        },
      },
      {
        id: '2',
        label: 'Shipping',
        color: 'rgba(8, 55, 107, 1)',
        borderSize: 3,
        containerStyle: {
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: '400',
          color: 'rgba(51, 51, 51, 1)',
          lineHeight: 24,
          letterSpacing: 0.5,
        },
      },
      {
        id: '3',
        label: 'Cancel order',
        color: 'rgba(8, 55, 107, 1)',
        borderSize: 3,
        containerStyle: {
          alignItems: 'flex-start',
          alignSelf: 'flex-start',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: '400',
          color: 'rgba(51, 51, 51, 1)',
          lineHeight: 24,
          letterSpacing: 0.5,
        },
      },
    ],
    [],
  );
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.signContainer}>
            <Image
              style={styles.signImage}
              source={require('../../assets/Vector.png')}
            />
          </View>
          <Text style={styles.addressText}>Address Update</Text>
        </View>
        <View style={styles.borrowDetailsContainer}>
          <View style={styles.borrowDetails}>
            <Text style={[styles.borrowText, {textAlign: 'center'}]}>
              Review order request expires in 24:00:00
            </Text>
            <Text style={styles.borrowText}>
              Your lender just updated the address on this borrow.{' '}
            </Text>
            <Text style={styles.borrowText}>Distance to new address </Text>
            <Text style={styles.borrowSubText}>20 kms</Text>
            <Text style={styles.borrowText}>Original method </Text>
            <Text style={styles.borrowSubText}>Local pick-up</Text>
          </View>
          <View style={styles.methodContainer}>
            <View style={styles.methodInnerContainer}>
              <Text style={[styles.borrowText, {right: 10}]}>
                Borrow method{' '}
              </Text>
              <View style={styles.radioContainer}>
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                />
                {/* <Text>Local pick-Up</Text> */}
              </View>
            </View>
            <View style={styles.costContainer}>
              <Text style={[styles.borrowText, {right: 10}]}>
                Estimated shipping cost{' '}
              </Text>
              <Text
                style={[
                  styles.borrowSubText,
                  {right: 10, bottom: 8, fontSize: 14},
                ]}>
                CA $10.00
              </Text>
              <Text style={[styles.borrowText, {right: 10, bottom: 10}]}>
                New total amount{' '}
              </Text>
              <Text
                style={[
                  styles.borrowSubText,
                  {right: 10, bottom: 15, fontSize: 14},
                ]}>
                CA $45.00
              </Text>
            </View>

            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default BorrowThird;

const styles = StyleSheet.create({
  signContainer: {
    backgroundColor: 'rgba(255, 215, 0, 1)',
    borderRadius: 56,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 25,
    padding: 15,
    width: 56,
    height: 56,
  },
  signImage: {
    alignSelf: 'center',
    // margin: 15,
    width: 5,
    height: 28,
  },
  addressText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    bottom: 12,
  },
  borrowDetailsContainer: {
    // margin: 10,
    marginTop: 12,
    backgroundColor: 'rgba(255, 243, 176, 1)',
  },
  borrowDetails: {
    alignItems: 'flex-start',
    margin: 15,
  },
  methodContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    margin: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  methodInnerContainer: {
    width: '88%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 5,
    margin: 5,
  },
  borrowText: {
    width: '90%',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 24,
    margin: 10,
    letterSpacing: 0.5,
    color: 'rgba(0, 0, 0, 1)',
  },
  radioContainer: {
    flexDirection: 'row',
  },
  borrowSubText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.5,
    padding: 5,
    paddingLeft: 12,
    color: 'rgba(0, 0, 0, 1)',
  },

  costContainer: {
    width: '88%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  updateButton: {
    width: '85%',
    height: 43,
    bottom: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },
});

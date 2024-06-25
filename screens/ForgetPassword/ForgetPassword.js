import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
import ForgetPasswordHeaderComponent from './ForgetPasswordHeader';
import EmailComponent from './EmailComponent';
import PasswordResetComponent from './PasswordResetComponent';
import DetailsComponent from './DetailsComponent';
import {Routes} from './Routes';
import Onboarding from 'react-native-onboarding-swiper';

const ForgetPassword = () => {
  //   const navigation = useNavigation();
  const [index, setIndex] = useState(1);
  const [progress, setProgress] = useState(0.5);
  return (
    <View>
      <ForgetPasswordHeaderComponent
        index={index}
        setIndex={setIndex}
        progress={progress}
        setProgress={setProgress}
      />
      <View style={styles.middleContainer}>
        {index === 1 && progress === 0.5 ? (
          <EmailComponent />
        ) : index === 2 && progress === 0.5 ? (
          <PasswordResetComponent />
        ) : (
          <DetailsComponent />
        )}
      </View>
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            index < 4 && setIndex(index + 1);
            // index++;
          }}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  middleContainer: {
    // position: 'absolute',
    bottom: 0,
    width: 410,
    height: 724,
    gap: 25,
    borderColor: 'rgba(230, 230, 230, 1)',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },

  //button
  nextButtonContainer: {
    // position: 'absolute',
    bottom: 0,
    width: 410,
    height: 79,
    gap: 25,
    borderWidth: 1,
    borderColor: 'rgba(230, 230, 230, 1)',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  nextButton: {
    width: 358,
    height: 43,
    borderRadius: 8,
    gap: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(8, 55, 107, 1)',
  },
  nextButtonText: {
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

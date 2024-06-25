import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {EditProfile} from './constants';
import {BackButton, HeaderIcon} from './Images';
import * as Progress from 'react-native-progress';
import EmailComponent from './EmailComponent';
import PasswordResetComponent from './PasswordResetComponent';
import DetailsComponent from './DetailsComponent';
const ForgetPasswordHeaderComponent = props => {
  // const navigation = useNavigation();
  // const [index, setIndex] = useState(1);
  return (
    <View style={styles.editHeaderContainer}>
      <TouchableOpacity
        onPress={() => {
          props.index < 0 && props.setIndex(props.index - 1);
        }}>
        <Image style={styles.image} source={BackButton.back} />
      </TouchableOpacity>
      <View style={styles.progressContainer}>
        <Progress.Bar
          progress={props.index === 1 ? 0.5 : 1}
          width={48}
          style={styles.progress}
          color="rgba(8, 55, 107, 1)"
          height={4}
        />
        <Progress.Bar
          progress={props.index === 2 ? 0.5 : props.index === 3 ? 1 : 0}
          width={48}
          style={styles.progress}
          color="rgba(8, 55, 107, 1)"
          height={4}
        />
        <Progress.Bar
          progress={props.index === 3 ? 0.5 : 0}
          width={48}
          style={styles.progress}
          color="rgba(8, 55, 107, 1)"
          height={4}
        />
      </View>
    </View>
  );
};

export default ForgetPasswordHeaderComponent;

const styles = StyleSheet.create({
  editHeaderContainer: {
    // width: 200,
    flexDirection: 'row',
    // height: 74,
    padding: 20,
    gap: 50,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'red',
  },

  image: {
    width: 21.33,
    height: 26.67,
    alignSelf: 'flex-start',
    top: 15,
    right: 6,
    color: 'rgba(0, 0, 0, 1)',
  },
  progressContainer: {
    // width: 200,
    flexDirection: 'row',
    // height: 74,
    padding: 10,
    top: 15,
    left: 15,
    gap: 5,
    // justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'pink',
  },
  progress: {
    alignSelf: 'center',
  },
});

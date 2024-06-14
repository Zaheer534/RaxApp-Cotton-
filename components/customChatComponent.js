import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TextComponent,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
const CustomChatComponent = ({name}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.custInp}>
      <View style={styles.TextComponent}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.ImageComponent}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: 'rgba(8, 55, 107, 1)', false: 'black'}}
        />
      </View>
    </View>
  );
};

export default CustomChatComponent;

const styles = StyleSheet.create({
  custInp: {
    width: '100%',
    height: 65,
    gap: 6,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingLeft: 0,
    // paddingRight: 15,
    // borderTopWidth: 0,
    borderBottomWidth: 0.6,
    borderColor: 'lightgray',
  },
  TextComponent: {
    width: '80%',
    height: 55,
    gap: 6,
    // backgroundColor: 'green',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 15,
    paddingLeft: 0,
    // paddingRight: 15,

    // borderBottomWidth: 0.6,
    borderColor: 'lightgray',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(51, 51, 51, 1)',
    lineHeight: 24,
    letterSpacing: 0.5,
  },

  ImageComponent: {
    width: '15%',
    height: 55,
    gap: 6,
    // backgroundColor: 'yellow',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingLeft: 22,
    // paddingRight: 15,

    // borderBottomWidth: 0.6,
    borderColor: 'lightgray',
  },
});

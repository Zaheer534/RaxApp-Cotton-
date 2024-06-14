import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const data = [
  {
    id: 1,
    Image: (
      <Image
        style={{width: 60, height: 60}}
        source={require('../assets/chatImage.png')}
      />
    ),
    name: (
      <Text
        style={{
          color: 'rgba(51, 51, 51, 1)',
          right: 3,
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        {' '}
        Alex
      </Text>
    ),
    message: (
      <Text
        style={{
          color: 'rgba(51, 51, 51, 1)',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        You: Where do you want to meet up?{' '}
      </Text>
    ),
    status: (
      <Text
        style={{
          color: 'rgba(138, 138, 138, 1)',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '400',
          // lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        Request pending | Aug 6 - 15{' '}
      </Text>
    ),
    time: (
      <Text
        style={{
          color: 'rgba(0, 0, 0, 1)',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '400',
          // lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        2hr
      </Text>
    ),
  },
  {
    id: 2,
    Image: (
      <Image
        style={{width: 60, height: 60}}
        source={require('../assets/chatImage.png')}
      />
    ),
    name: (
      <Text
        style={{
          color: 'rgba(51, 51, 51, 1)',
          right: 3,
          fontSize: 12,
          fontWeight: '700',
          lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        {' '}
        Rohit
      </Text>
    ),
    message: (
      <Text
        style={{
          color: 'rgba(51, 51, 51, 1)',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '700',
          lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        Hello Adam! Where do you want to meet up?{' '}
      </Text>
    ),
    status: (
      <Text
        style={{
          color: 'rgba(138, 138, 138, 1)',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '400',
          // lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        Upcoming borrow | Aug 6 - 15{' '}
      </Text>
    ),
    time: (
      <Text
        style={{
          color: 'rgba(0, 0, 0, 1)',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '400',
          // lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        2hr
      </Text>
    ),
  },
  {
    id: 3,
    Image: (
      <Image
        style={{width: 60, height: 60}}
        source={require('../assets/chatImage.png')}
      />
    ),
    name: (
      <Text
        style={{
          color: 'rgba(51, 51, 51, 1)',
          // textAlign: 'left',
          right: 3,
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        {' '}
        Ashley
      </Text>
    ),
    message: (
      <Text
        style={{
          color: 'rgba(51, 51, 51, 1)',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        You: I have a couple of questions for you ashley. First, how does the
        dress fit? is there...
      </Text>
    ),
    // status: (
    //   <Text
    //     style={{
    //       color: 'rgba(138, 138, 138, 1)',
    //       textAlign: 'left',
    //       fontSize: 12,
    //       fontWeight: '400',
    //       // lineHeight: 24,
    //       letterSpacing: 0.5,
    //     }}>
    //     Request pending | Aug 6 - 15{' '}
    //   </Text>
    // ),
    time: (
      <Text
        style={{
          color: 'rgba(0, 0, 0, 1)',
          textAlign: 'left',
          fontSize: 12,
          fontWeight: '400',
          // lineHeight: 24,
          letterSpacing: 0.5,
        }}>
        2hr
      </Text>
    ),
  },
];
const RenderItem = ({item}) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.imageList}>{item.Image}</View>
      <View style={styles.TextList}>
        {item.name}
        {item.message}
        {item.status}
      </View>
      <View style={styles.Timer}>{item.time}</View>
    </View>
  );
};
const Chat2 = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.innerComponents}>
          <Image
            color={'rgba(0, 0, 0, 1)'}
            source={require('../assets/back-thin.png')}
          />
          <Text style={styles.headerText}>Chats</Text>
        </View>
      </View>
      <View style={styles.Container2}>
        <FlatList data={data} renderItem={RenderItem} />
      </View>
    </View>
  );
};

export default Chat2;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 866,
    // backgroundColor: 'orange',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
  },
  Container2: {
    width: '100%',
    height: 566,
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
  },
  Header: {
    width: '100%',
    height: 64,
    // backgroundColor: 'green',
    paddingTop: 8,
    paddingLeft: 10,
    // justifyContent: 'space-between',
    flexDirection: 'row',
  },
  innerComponents: {
    width: '28%',
    height: 44,
    // backgroundColor: 'yellow',
    paddingTop: 5,
    paddingLeft: 1,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    lineHeight: 24,
    letterSpacing: 0.5,
  },

  listContainer: {
    width: '100%',
    height: 90,
    // backgroundColor: 'yellow',
    borderRadius: 4,
    // paddingTop: 5,
    paddingRight: 30,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: 'rgba(230, 230, 230, 1)',
  },
  imageList: {
    width: '17%',
    height: 80,
    // backgroundColor: 'pink',
    paddingTop: 5,
    left: 6,
    // paddingLeft: 1,
    // gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // flexDirection: 'row',
  },
  TextList: {
    width: '73%',
    height: 80,
    // backgroundColor: 'orange',
    paddingTop: 5,
    paddingLeft: 4,
    left: 3,
    gap: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  Timer: {
    width: '10%',
    height: 30,
    // backgroundColor: 'green',
    alignItems: 'center',
    alignSelf: 'flex-start',
    top: 10,
    paddingTop: 5,
    paddingLeft: 1,
    gap: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
});

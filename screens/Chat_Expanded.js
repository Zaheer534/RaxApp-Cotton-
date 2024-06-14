import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomDress from '../components/CustomDress';

const messages = [
  {message: 'HI', sender: 'a', receiver: 'b'},
  {message: 'HI', sender: 'a', receiver: 'b'},
  {message: 'HI', sender: 'a', receiver: 'b'},
  {message: 'HI', sender: 'a', receiver: 'b'},
  {message: 'HI', sender: 'a', receiver: 'b'},
  {message: 'HI', sender: 'a', receiver: 'b'},
  {message: 'HI', sender: 'a', receiver: 'b'},
];

const data = [
  {
    id: 1,
    person1: (
      <View
        style={{
          width: '85%',
          //   height: 60,
          backgroundColor: 'rgba(51, 51, 51, 1)',
          borderRadius: 8,
          right: 11,
          top: 20,
          gap: 5,
          paddingTop: 8,
          //   paddingLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'left',
            padding: 10,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 16,
            letterSpacing: 0.5,
          }}>
          Hey, How is it going? I wanted to know how the dress fits?
        </Text>
      </View>
    ),
    time: (
      <Text
        style={{
          color: 'rgba(138, 138, 138, 1)',
          padding: 5,
          right: 8,
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 16,
          letterSpacing: 0.5,
        }}>
        9:59 AM
      </Text>
    ),
    person2: (
      <View
        style={{
          width: '85%',
          //   height: 60,
          backgroundColor: 'rgba(57, 95, 137, 1)',
          borderRadius: 8,
          right: 40,
          top: 20,
          gap: 5,
          paddingTop: 8,
          //   paddingLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'left',
            padding: 10,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 16,
            letterSpacing: 0.5,
          }}>
          I normally wear a size L but I had to get this dress in size M
        </Text>
      </View>
    ),
    image: (
      <Image
        style={{width: 30, height: 30}}
        source={require('../assets/chatImage.png')}
      />
    ),
    time2: (
      <Text
        style={{
          color: 'rgba(138, 138, 138, 1)',
          padding: 5,
          right: 35,
          top: 5,
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 16,
          letterSpacing: 0.5,
        }}>
        10:00 AM
      </Text>
    ),
    person1Reply: (
      <View
        style={{
          width: '85%',
          //   height: 60,
          backgroundColor: 'rgba(51, 51, 51, 1)',
          borderRadius: 8,
          right: 11,
          top: 20,
          gap: 5,
          paddingTop: 8,
          //   paddingLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'left',
            padding: 10,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 16,
            letterSpacing: 0.5,
          }}>
          Thanks for letting me know. I don’t think that works for me.
        </Text>
      </View>
    ),
    time3: (
      <Text
        style={{
          color: 'rgba(138, 138, 138, 1)',
          padding: 5,
          right: 8,
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 16,
          letterSpacing: 0.5,
        }}>
        10:01 AM
      </Text>
    ),
    person2Reply: (
      <View
        style={{
          width: '85%',
          //   height: 60,
          backgroundColor: 'rgba(57, 95, 137, 1)',
          borderRadius: 8,
          right: 40,
          top: 20,
          gap: 5,
          paddingTop: 8,
          //   paddingLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'left',
            padding: 10,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 16,
            letterSpacing: 0.5,
          }}>
          No worries, let me cancel your request
        </Text>
      </View>
    ),
    image: (
      <Image
        style={{width: 30, height: 30}}
        source={require('../assets/chatImage.png')}
      />
    ),
    time4: (
      <Text
        style={{
          color: 'rgba(138, 138, 138, 1)',
          padding: 5,
          right: 35,
          top: 5,
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 16,
          letterSpacing: 0.5,
        }}>
        10:02 AM
      </Text>
    ),
    // person2: (
    //   <View
    //     style={{
    //       width: '100%',
    //       //   height: 20,
    //       //   backgroundColor: 'pink',
    //       borderRadius: 8,
    //       right: 25,
    //       top: 0,
    //       gap: 10,
    //       paddingTop: 5,
    //       paddingLeft: 30,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       alignSelf: 'center',
    //       flexDirection: 'row',
    //     }}>
    //     <View
    //       style={{
    //         width: '12%',
    //         //   height: 20,
    //         backgroundColor: 'yellow',
    //         borderRadius: 8,
    //         right: 15,
    //         bottom: 15,
    //         //   gap: 5,
    //         // paddingTop: 10,
    //         paddingLeft: 0,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         alignSelf: 'center',
    //         flexDirection: 'row',
    //       }}>
    //       <Image
    //         style={{width: 30, height: 30}}
    //         source={require('../assets/chatImage.png')}
    //       />
    //     </View>

    //     <View
    //       style={{
    //         width: '84%',
    //         //   height: 20,
    //         backgroundColor: 'rgba(57, 95, 137, 1)',
    //         borderRadius: 8,
    //         right: 25,
    //         top: 0,
    //         //   gap: 5,
    //         paddingTop: 10,
    //         //   paddingLeft: 20,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         alignSelf: 'center',
    //         flexDirection: 'row',
    //       }}>
    //       <Text
    //         style={{
    //           color: 'rgba(255, 255, 255, 1)',
    //           // textAlign: 'center',
    //           padding: 10,
    //           fontSize: 14,
    //           fontWeight: '400',
    //           lineHeight: 16,
    //           letterSpacing: 0.5,
    //         }}>
    //         I normally wear a size L but I had to get this dress in size M
    //       </Text>
    //     </View>
    //     {/* <Text
    //       style={{
    //         color: 'rgba(255, 255, 255, 1)',
    //         // textAlign: 'center',
    //         padding: 10,
    //         fontSize: 14,
    //         fontWeight: '400',
    //         top: 40,
    //         right: 40,
    //         lineHeight: 16,
    //         letterSpacing: 0.5,
    //       }}>
    //       10:00 AM{' '}
    //     </Text> */}
    //   </View>
    // ),
  },
];
const RenderItem = ({item}) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.p1List}>
        {item.person1}
        {item.time}
        {/* {item.person2} */}
      </View>
      <View style={styles.p2List}>
        <View style={styles.p2Img}>{item.image}</View>
        <View style={styles.p2Msg}>
          {item.person2}
          {item.time2}
        </View>
      </View>
      <View style={styles.p1RList}>
        {item.person1Reply}
        {item.time3}
        {/* {item.person2} */}
      </View>
      <View style={styles.p2RList}>
        <View style={styles.p2Img}>{item.image}</View>
        <View style={styles.p2Msg}>
          {item.person2Reply}
          {item.time4}
        </View>
      </View>
    </View>
  );
};
const Chat_Expanded = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.innerComponents}>
          <Image
            color={'rgba(0, 0, 0, 1)'}
            source={require('../assets/back-thin.png')}
          />
          <Text style={styles.headerText}>Alex</Text>
        </View>
      </View>
      <View style={styles.Container2}>
        <CustomDress
          brand="Zara"
          date="Aug 3rd - Aug 7th"
          type_size="Dress, S"
          price="CA $35.00"
        />
        <FlatList data={data} renderItem={RenderItem} />
      </View>
    </View>
  );
};

export default Chat_Expanded;

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
    height: 787,
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
  },
  Header: {
    width: '100%',
    // height: 64,
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
    width: 410,
    height: 500,
    // backgroundColor: 'yellow',
    borderRadius: 4,
    paddingRight: 0,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  p1List: {
    width: 350,
    height: 100,
    // backgroundColor: 'green',
    borderRadius: 4,
    paddingRight: 0,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  p2List: {
    width: 350,
    height: 100,
    // backgroundColor: 'green',
    borderRadius: 4,
    paddingRight: 10,
    bottom: 15,
    gap: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  p2Img: {
    width: 50,
    height: 50,
    // backgroundColor: 'pink',
    bottom: 13,
    borderRadius: 4,
    paddingRight: 0,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  p2Msg: {
    width: 290,
    height: 98,
    // backgroundColor: 'orange',
    borderRadius: 4,
    // paddingRight: 10,
    right: 5,
    gap: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
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
  p1Chat: {
    width: '88%',
    // height: 80,
    backgroundColor: 'orange',
    paddingTop: 5,
    paddingLeft: 4,
    left: 30,
    gap: 0,
    // justifyContent: 'center',
    alignSelf: 'flex-end',
    // flexDirection: 'row',
  },
  p2Chat: {
    width: '88%',
    // height: 80,
    // backgroundColor: 'orange',
    paddingTop: 5,
    paddingLeft: 4,
    top: 10,
    left: 3,
    gap: 0,
    alignSelf: 'flex-start',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  p1RList: {
    width: 350,
    height: 100,
    // backgroundColor: 'green',
    borderRadius: 4,
    bottom: 30,
    paddingRight: 0,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  p2RList: {
    width: 350,
    height: 100,
    // backgroundColor: 'green',
    borderRadius: 4,
    paddingRight: 10,
    bottom: 45,
    gap: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
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
  Container3: {
    width: '100%',
    height: 366,
    gap: 20,
    backgroundColor: 'green',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
  },
});

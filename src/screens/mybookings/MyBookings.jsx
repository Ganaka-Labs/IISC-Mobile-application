/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../utilities/colors';

const MyBookings = () => {
  const data = [
    {
      id: '1',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '2',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '3',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '4',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '5',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '1',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '2',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '3',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '4',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
    {
      id: '5',
      text: 'Tea',
      time: '7:40AM to 0840 Am',
      date: '11/12/2024',
      bottomText: 'Room No: 02',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.titleText}>{item.text}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subTitleText}>{item.time}</Text>
            <Text style={styles.subTitleText}>{item.date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subTitleText}>{item.bottomText}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginVertical: 10,
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    margin: 10,
    padding: 12,
    marginBottom:2,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
    // width: '100%',
    height: 'auto',
    minWidth: '94%',
    display: 'flex',
    // flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  circle: {
    width: '40',
    height: '40',
    borderRadius: '50%',
    backgroundColor: 'red',
  },
  titleText: {
    color: COLORS.titleColor,
    fontSize: 20,
    marginBottom: 8,
    marginTop: 4
  },
  subTitleText: {
    color: COLORS.subTitleColor,
    fontSize: 15,
    marginBottom: 4,
    marginTop: 4
  },
});

export default MyBookings;

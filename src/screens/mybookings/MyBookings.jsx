/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View } from 'react-native';
import BookingItem from './BookingItem';

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
  ];

  const renderItem = ({item}) => BookingItem(item);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyBookings();

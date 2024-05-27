/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../utilities/colors';
import { getAllBookings } from '../apis/services';
import { CommonStyles } from '../components/CommonStyles';

const MyBookings = () => {

  const [myBookings, setMyBookings] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      const bookings = await getAllBookings();
      setMyBookings(bookings.data);
      setLoading(false);
    };

    fetchBookings();
  }, []);

  const bookedStatusIndicator = (bookingStatus) => {
    if (bookingStatus == 'Booked') {
      return <View style={styles.bookedCircle} />
    } else if (bookingStatus == 'Closed') {
      return <View style={styles.closedCircle} />
    } else {
      return <View style={styles.requestedCircle} />
    }
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.titleText}>{item.booking_title}</Text>
            {bookedStatusIndicator(item.resource_booking_status)}
          </View >
          <View style={styles.row}>
            <Text style={styles.subTitleText}>{item.start_time} To {item.end_time}</Text>
            <Text style={styles.subTitleText}>{item.booking_date}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subTitleText}>{item.resource_name}</Text>
          </View>
        </View >
      </View>
    );
  };

  return (
    <>
      {isLoading && (
        <ActivityIndicator style={CommonStyles.loader} size="large" />
      )}
      <View style={styles.container}>
        <FlatList
          data={myBookings}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>

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
    marginBottom: 2,
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
  bookedCircle: {
    width: 20,
    height: 20,
    borderRadius: 40 / 2,
    backgroundColor: '#55D55A',
  },
  requestedCircle: {
    width: 20,
    height: 20,
    borderRadius: 40 / 2,
    backgroundColor: '#FFCC68',
  },
  closedCircle: {
    width: 20,
    height: 20,
    borderRadius: 40 / 2,
    backgroundColor: '#FF0F00',
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

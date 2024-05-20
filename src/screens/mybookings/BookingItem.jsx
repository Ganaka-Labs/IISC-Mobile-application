/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Card, StyleSheet} from 'react-native';

const BookingItem = item => {
  return (
    <View>
      <Card style={styles.card}>
        <View class="row1">
          <Text>{item.text}</Text>
        </View>
        <View class="row2">
          <Text>{item.time}</Text>
          <Text>{item.date}</Text>
        </View>
        <View class="row3">
          <Text>{item.bottomText}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100',
  },
});

export default BookingItem();

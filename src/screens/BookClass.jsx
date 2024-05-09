/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const BookClass = () => {
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingRoom, setMeetingRoom] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingStartTime, setMeetingStartTime] = useState('');
  const [meetingEndTime, setMeetingEndTime] = useState('');
  const [remarks, setRemarks] = useState('');
  const navigation = useNavigation();

  const handleBookRoom = () => {
    console.log("Book room");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Meeting Title</Text>
      <TextInput
        style={styles.input}
        value={meetingTitle}
        onChangeText={setMeetingTitle}
        keyboardType="default"
        autoCapitalize="sentences"
      />
      <Text style={styles.label}>Meeting Room No</Text>
      <TextInput
        style={styles.input}
        value={meetingRoom}
        onChangeText={setMeetingRoom}
        keyboardType="default"
        autoCapitalize="sentences"
      />

      <Text style={styles.label}>Meeting Date</Text>
      <TextInput
        style={styles.input}
        value={meetingDate}
        onChangeText={setMeetingDate}
        secureTextEntry
      />

      <Text style={styles.label}>Time</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Start"
          value={meetingStartTime}
          onChangeText={setMeetingStartTime}
        />
        <TextInput
          style={styles.input}
          placeholder="End"
          value={meetingEndTime}
          onChangeText={setMeetingEndTime}
        />
      </View>
      <Text style={styles.label}>Remarks</Text>
      <TextInput
        style={styles.input}
        value={remarks}
        onChangeText={setRemarks}
        keyboardType="default"
        autoCapitalize="sentences"
      />
      <Button title="Book Room" onPress={handleBookRoom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 100,
    marginBottom: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'rowww',
  },
});

export default BookClass;

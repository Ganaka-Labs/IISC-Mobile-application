/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
      <View>
        <Text style={styles.label}>Meeting Title</Text>
        <TextInput
          style={styles.input}
          value={meetingTitle}
          onChangeText={setMeetingTitle}
          keyboardType="default"
          autoCapitalize="sentences"
          placeholder='Type here'
        />
        <Text style={styles.label}>Meeting Room No</Text>
        <TextInput
          style={styles.input}
          value={meetingRoom}
          onChangeText={setMeetingRoom}
          keyboardType="default"
          autoCapitalize="sentences"
          placeholder='Type here'
        />

        <Text style={styles.label}>Meeting Date</Text>
        <TextInput
          style={styles.input}
          value={meetingDate}
          onChangeText={setMeetingDate}
          secureTextEntry
          placeholder='pick a date'
        />
      </View>

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
      <View>
        <Text style={styles.label}>Remarks</Text>
        <TextInput
          style={styles.input}
          value={remarks}
          onChangeText={setRemarks}
          keyboardType="default"
          autoCapitalize="sentences"
          placeholder='Type here'
        />


        <Button title="Book Room" onPress={handleBookRoom} style={styles.button} />
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,

  },
  label: {
    fontSize: 15,
    marginBottom: 0,
    marginTop: 10,
    flex: 0,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // paddingHorizontal: 100,
    marginBottom: 20,
    float: 'left',

  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'Wrap',
    

  },

  button: {
    width: '50%',
    paddingTop: 40,
    marginBottom: 50,
  },



});

export default BookClass;

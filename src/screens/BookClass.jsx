/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {TimerPicker, TimerPickerModal} from 'react-native-timer-picker';

const BookClass = () => {
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingRoom, setMeetingRoom] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingStartTime, setMeetingStartTime] = useState('');
  const [meetingEndTime, setMeetingEndTime] = useState('');
  const [isItStartTime, setIsItStartTime] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [datePicker, toggleDatePicker] = useState(false);
  const [timePicker, toggleTimePicker] = useState(false);
  const [timePickerTitle, setTimePickerTitle] = useState('');
  const navigation = useNavigation();

  const handleBookRoom = () => {
    console.log('Book room');
  };

  const handleTimePicker = (shdStartTime) => {
    console.log('Time picker');
    Keyboard.dismiss();
    toggleTimePicker(!timePicker);
    if (shdStartTime) {
      setIsItStartTime(true);
      setTimePickerTitle('Start Time');
    } else {
      setIsItStartTime(false);
      setTimePickerTitle('End Time');
    }
  };

  const setTime = (time) => {
    console.log('Start time');
    if (isItStartTime) {
      setMeetingStartTime(time);
    } else {
      setMeetingEndTime(time);
    }
  };

  const handleDataPicker = () => {
    console.log('Handle DP');
    Keyboard.dismiss();
    toggleDatePicker(!datePicker);
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

      <Text style={styles.label}>Meeting Date</Text>
      {datePicker && (
        <Calendar
          onDayPress={day => {
            console.log('selected day', day);
            setMeetingDate(day.dateString);
            toggleDatePicker(!datePicker);
          }}
          minDate={new Date()}
        />
      )}
      <TouchableOpacity onPress={() => handleDataPicker(true)}>
        <View pointerEvents="none">
          <TextInput
            style={styles.input}
            value={meetingDate}
            onChangeText={setMeetingDate}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>Time</Text>

      {timePicker && (
        <TimerPickerModal
          visible={timePicker}
          setIsVisible={toggleTimePicker}
          onConfirm={pickedDuration => {
            console.log('Picked duration: ', pickedDuration);
            setTime(pickedDuration.hours + ' : ' + pickedDuration.minutes);
            toggleTimePicker(!timePicker);
          }}
          modalTitle={timePickerTitle}
          onCancel={() => toggleTimePicker(!timePicker)}
          closeOnOverlayPress
          use12HourPicker
          hideSeconds
          styles={{
            theme: 'light',
          }}
        />
      )}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleTimePicker(true)}>
          <View pointerEvents="none">
            <TextInput
              style={styles.input}
              placeholder="Start time"
              value={meetingStartTime}
              onChangeText={setMeetingStartTime}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTimePicker(false)}>
          <View pointerEvents="none">
            <TextInput
              style={styles.input}
              placeholder="End time"
              value={meetingEndTime}
              onChangeText={setMeetingEndTime}
            />
          </View>
        </TouchableOpacity>
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

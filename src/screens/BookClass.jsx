/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { TimerPicker, TimerPickerModal } from 'react-native-timer-picker';
import { getAllRooms, submitRoomReq } from '../apis/services';
import { CommonStyles, Styles } from '../components/CommonStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { ShowToast } from '../utilities/Utils';
import { getUser, getUserFromLocal } from '../utilities/LocalStorage';

const BookClass = () => {
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingStartTime, setMeetingStartTime] = useState('');
  const [meetingEndTime, setMeetingEndTime] = useState('');
  const [isItStartTime, setIsItStartTime] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [datePicker, toggleDatePicker] = useState(false);
  const [timePicker, toggleTimePicker] = useState(false);
  const [timePickerTitle, setTimePickerTitle] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({});
  const navigation = useNavigation();


  // const rooms = [];
  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      const response = await getAllRooms();
      // rooms = response.data
      const rooms = response.data.map((room) => {
        return { roomId: room.id, roomLabel: room.resource_name };
      });
      setRooms(rooms);
      setLoading(false);
    };

    fetchRooms();
  }, []);

  const handleBookRoom = () => {
    submitReq()
  };

  const submitReq = async () => {
    const loggedInUser = await getUserFromLocal();
    const payload = {
      'user_id': loggedInUser['id'],
      'resource_id': selectedRoom.roomId,
      'booking_date': meetingDate,
      'booking_title': meetingTitle,
      'remarks': remarks,
      'start_time': meetingStartTime,
      'end_time': meetingEndTime
    }
    console.log('Payload: ', payload);
    setLoading(true);
    const response = await submitRoomReq(payload);
    setLoading(false);
    if (response?.id) {
      ShowToast("Booking request submitted successfully..")
    } else {
      ShowToast("Error while submitting booking request")
    }
  }

  const handleTimePicker = shdStartTime => {
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

  const setTime = time => {
    console.log('Start time');
    if (isItStartTime) {
      setMeetingStartTime(time);
    } else {
      setMeetingEndTime(time);
    }
  };

  const handleDataPicker = () => {
    Keyboard.dismiss();
    toggleDatePicker(!datePicker);
  };

  return (
    <>
      {isLoading && (
        <ActivityIndicator style={CommonStyles.loader} size="large" />
      )}
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.label}>Meeting Title</Text>
            <TextInput
              style={styles.input}
              value={meetingTitle}
              onChangeText={setMeetingTitle}
              keyboardType="default"
              autoCapitalize="sentences"
              placeholder="Type here"
            />

            <Text style={styles.label}>Select Meeting Room</Text>
            <Dropdown style={styles.dropdown} data={rooms}
              inputSearchStyle={styles.inputSearchStyle}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              labelField='roomLabel'
              valueField='roomId'
              placeholder='Select room'
              value={selectedRoom}
              onChange={(room) => {
                setSelectedRoom(room)
              }
              }
            />
          </View>

          <Text style={styles.label}>Meeting Date</Text>
          {datePicker && (
            <Calendar
              placeholder='Select date'
              onDayPress={selectedDate => {
                const concatSelectedDate = selectedDate.day.toString().concat('/', selectedDate.month).concat('/', selectedDate.year);
                console.log('selected date', concatSelectedDate);
                setMeetingDate(concatSelectedDate);
                toggleDatePicker(!datePicker);
              }}
              minDate={new Date().toString()}
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
                setTime(pickedDuration.hours + ':' + pickedDuration.minutes);
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
                  style={[styles.input, styles.endTime]}
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
      </ScrollView>
    </>
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
    marginBottom: 20,
    float: 'left',
  },
  endTime: {
    marginLeft: 20
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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default BookClass;

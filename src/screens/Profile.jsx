/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-Styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View, Text, TextInput, Stylesheet, StyleSheet } from 'react-native';
import { doLogout } from '../apis/services';
import { useNavigation } from '@react-navigation/native';
import { ShowToast } from '../utilities/Utils';
import { useState } from 'react';



const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleProfile = async () => {
    const Profile = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };

  };

  const handleLogout = () => {
    doLogout();
    ShowToast('Logout successfully..')
    navigation.reset({ index: 0, routes: [{ name: 'login' }] });
  };
  const EditChanges = () => {
    handleProfile();
    ShowToast('Changes edited successfully.');
  };

  return (
    <>
      <View style={Styles.container1}>
        <Text style={Styles.label}>Firstname</Text>
        <TextInput
          style={Styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          keyboardType="text"
          autoCapitalize="sentences"
        />
        <Text style={Styles.label}>Lastname</Text>
        <TextInput
          style={Styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
          keyboardType="text"
          autoCapitalize="sentences"
        />
        <Text style={Styles.label}>Email</Text>
        <TextInput
          style={Styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-adress"
          autoCapitalize="sentences"
        />
        <Text style={Styles.label}>Phone</Text>
        <TextInput
          style={Styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone"
          keyboardType="Phone-pad"
          autoCapitalize="sentences"
        />
        <View style={Styles.editButton}>
          <Button title="Edit Changes" onPress={EditChanges} />
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container1: {
    // flex: 1,
    justifyContent: 'center',
    padding:5
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    float: 'left'
  },
  label: {
    fontsize: 18,
    marginBottom: 5,
    marginTop: 10,
    flex: 0,
    textAlign: 'left',
  },
  editButton: {
    display:'flex',
    flexDirection:"column",
    gap:10 
  },

});


export default Profile;

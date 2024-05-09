/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import {NavigationActions} from 'react-navigation';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegistration = async () => {
    // Implement your login logic here
    // const response = await fetchDetails();
    const resposne = await doRegistration();
    // console.log('Doing reg..: ', resposne);
    if(true) {
        // navigation.navigate('Home');
        navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
        });
    }
  };

  const doRegistration = async () => {
    try {
      setTimeout({
            return: true,
        }, 2000);
      // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    } catch (error) {
        return false;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        keyboardType="text"
        autoCapitalize="sentences"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        autoCapitalize="sentences"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} />
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
});

export default RegistrationScreen;

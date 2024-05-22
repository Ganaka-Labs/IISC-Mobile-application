/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import { NavigationActions } from 'react-navigation';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { doRegistration } from '../apis/services';
import { ShowToast } from '../utilities/Utils';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleRegistration = async () => {
    setLoading(true);
    const payload = {
        email: email,
        password: password,
        name: name,
        phone: phone,
      };
    const resposne = await doRegistration(payload);
    console.log('User Registered: ', resposne);
    setLoading(false);
    if (resposne) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'login' }],
      });
      ShowToast('User registered successfully, please login..');
    } else {
      ShowToast(resposne.message);
    }
  };

  return (
    <>
    {isLoading && (
      <ActivityIndicator style={StyleSheet.loader}/>
    )}
      <View style={styles.container}>
      <View style={styles.form} >
        <Text style={styles.There}>Hi There!</Text>
        <Text style={styles.SignUp}>Sign Up</Text>
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
    </View>
    </>
    


  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    paddingHorizontal: 15,
    marginTop: 80,
  },
  form: {
    padding:10,
    paddingBottom:50,
    borderWidth:2,
    borderColor:'#F5F5F5',
    backgroundColor:'white',
    borderRadius:5,
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

  SignUp: {
    fontSize: 22,
    marginBottom: 40,
    fontWeight: 'bold',
  }
});

export default RegistrationScreen;

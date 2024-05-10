/* eslint-disable prettier/prettier */
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import fetchDetails from '../apis/services';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // const response = await fetchDetails();
    // console.log('Response: fetched');
    // navigation.navigate('Home');
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  const handleRegistration = async () => {
    // Implement your login logic here
    try {
      navigation.reset({
        index: 0,
        routes: [{name: 'Registration'}],
      });
      // return true;
      // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    } catch (error) {
      return false;
    }
  };
  return (
    <View style={styles.container}>
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
      <Button title="Login" onPress={handleLogin} />

      <Text style={{color: '#000'}}>Don't have account?
        <Text onPress={() => {
          handleRegistration();
          }}
          style={{color: '#00F'}}>
          Do Registeration.
        </Text>
      </Text>
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

export default LoginScreen;

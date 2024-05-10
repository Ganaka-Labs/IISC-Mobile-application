/* eslint-disable prettier/prettier */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
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
      routes: [{ name: 'Home' }],
    });
  };

  const handleRegistration = async () => {
    // Implement your login logic here
    try {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Registration' }],
      });
      // return true;
      // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    } catch (error) {
      return false;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>

      <View style={styles.header}>
        <Text style={styles.welcome}>WelcomeBack!</Text>
        <Text style={styles.signin}>Sign in to your Account </Text>
       
        <Text style={styles.label}> Your email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
         placeholder='Enter your email'

        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        placeholder='Enter your password'

        />
       
        <Button title="Sign in" onPress={handleLogin} style={styles.button} />
        
        
      
      </View>

      <Text style={{ color: '#000' }}>Don't have account?{'\n'}
        <Text onPress={() => {
          handleRegistration();
        }}
          style={{ color: '#00F' }}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 100,
    marginBottom: 20,

  },
  button: {
    width: '50%',
    paddingTop: 40,
    marginBottom: 50,
  },


  logo: {
    fontSize: 40,
    color: "black",
    fontWeight: 'bold',
    marginBottom: 30,

  },

  signin: {
    fontsize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  header:{
    padding:10,
    borderWidth:2,
    borderColor:'#F5F5F5',
    backgroundColor:'white',
    borderRadius:10,
  }


});

export default LoginScreen;

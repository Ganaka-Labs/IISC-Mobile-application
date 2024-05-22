/* eslint-disable no-trailing-spaces */
/* eslint-disable func-call-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import fetchDetails, { doLogin } from '../apis/services';
import { ShowToast } from '../utilities/Utils';

const LoginScreen = () => {
  // const LoginState = {
  //   isLoading: false,
  //   email: '',
  //   password: '',
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  // const [loginState, setLoginState] = useState(LoginState());
  const navigation = useNavigation();

  const handleLogin = async () => {
    setLoading(true);
    const payload = {
      email: email,
      password: password,
    };
    const response = await doLogin(payload);
    console.log('Response: fetched');
    setLoading(false);
    if(response) {
      navigation.reset({
        index: 0,
        routes: [{name: 'home'}],
      });
    } else {
      ShowToast(response.message);
    }
  };

  const navigateRegistration = () => {
      navigation.navigate('registration');
  };
  return (
    <>
      {isLoading && (
        <ActivityIndicator style={StyleSheet.loader}/>
      )}
      <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../asset/images/IIsc_image.png')}
            alt=""
          />

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
              placeholder="Enter your email"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Enter your password"
            />

            <Button
              title="Sign in"
              onPress={handleLogin}
              style={styles.button}
            />
          </View>

          <Text style={{color: '#000', marginTop: 20}}>
            Don't have account?
          </Text>
          <Text
            onPress={() => {
              navigateRegistration();
            }}
            style={{color: '#00F', width: '100%', textAlign: 'center'}}>
            Sign Up
          </Text>
        </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center-top',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 100,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    paddingTop: 50,
    marginTop: 50,
  },

  logo: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 200,
  },

  signin: {
    fontsize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  header: {
    padding: 10,
    paddingBottom: 50,
    borderWidth: 2,
    borderColor: '#F5F5F5',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  loader: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginScreen;

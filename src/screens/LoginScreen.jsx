/* eslint-disable no-trailing-spaces */
/* eslint-disable func-call-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import fetchDetails, {doLogin} from '../apis/services';
import {ShowToast} from '../utilities/Utils';
import {
  USER_DETAILS,
  getData,
  getFromLocal,
  jsonToStringify,
  setData,
  setToLocal,
  stringifyToJSON,
} from '../utilities/LocalStorage';
import { CommonStyles } from '../components/CommonStyles';

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

  const isLoggedIn = async () => {
    const localData = await getFromLocal(USER_DETAILS);
    const user = JSON.parse(localData);
    if (user.token) {
      navigateToHome();
    }
  };

  useEffect(() => {
    isLoggedIn();
  });

  const navigateToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'home'}],
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    const payload = {
      email: email,
      password: password,
    };
    try {
      const response = await doLogin(payload);
      const userString = await JSON.stringify(response);
      await setToLocal(USER_DETAILS, userString);
      // const localData = await getFromLocal(USER_DETAILS);
      // console.log('Local Data user: ', localData);
      // const user = await JSON.parse(localData);
      // console.log('Local Data JSON obj: ', user);
      // console.log('Token: ',user.token);
      // console.log('Email: ',user.email);
      setLoading(false);
      if (response) {
        ShowToast('Login successful..');
        navigateToHome();
      } else {
        ShowToast(response.message);
      }
    } catch (error) {
      setLoading(false);
      ShowToast('Error communication with server..');
    }
  };

  const navigateRegistration = () => {
    navigation.navigate('registration');
  };
  return (
    <>
      {isLoading && <ActivityIndicator style={CommonStyles.loader} size='large' />}
      <View style={styles.loginContainer}>
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

          <Button title="Sign in" onPress={handleLogin} style={styles.button} />
        </View>

        <Text style={{color: '#000', marginTop: 20}}>Don't have account?</Text>
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
  loginContainer: {
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
    alignItems: 'center',
  },
});

export default LoginScreen;

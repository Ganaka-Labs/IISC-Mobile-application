/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, View} from 'react-native';
import { doLogout } from '../apis/services';
import { CommonStyles, Styles } from '../components/CommonStyles';
import { useNavigation } from '@react-navigation/native';
import { ShowToast } from '../utilities/Utils';



const Profile = () => {

  const navigation = useNavigation();

  const handleLogout = () => {
    doLogout();
    ShowToast('Logout successfully..')
    navigation.reset({index: 0, routes: [{name: 'login'}]});
  };

  return (
    <View style={CommonStyles.container}>
      <Button style={CommonStyles.button} title="Logout" onPress={handleLogout}/>
  </View>
);
};

export default Profile;

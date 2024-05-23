/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import { clearLocalStorage } from '../utilities/LocalStorage';

const BaseUrl =
  'http://ec2-3-108-67-174.ap-south-1.compute.amazonaws.com:8000/';
const Login = 'user/signin';
const Registration = 'user/signup';

export const doLogin = async (payload) => {
  try {
    const resposne = await axios.post(BaseUrl + Login, payload);
    console.log('Success: ', resposne.data);
    return resposne.data;
  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
};

export const doRegistration = async (payload) => {
  try {
    const resposne = await axios.post(BaseUrl + Registration, payload);
    console.log('Success: ', resposne.data);
    return resposne.data;
  } catch (error) {
    console.log('Error: ', error);
    return error;
  }
};

export const doLogout = async () => {
  await clearLocalStorage();
}

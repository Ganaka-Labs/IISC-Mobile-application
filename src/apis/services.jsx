/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import { clearLocalStorage } from '../utilities/LocalStorage';

const BaseUrl =
  'http://ec2-3-108-67-174.ap-south-1.compute.amazonaws.com:8000/';
const Login = 'user/signin';
const Registration = 'user/signup';
const Rooms = 'resource/';
const CreateBooking = 'booking/';
const AllBookings = 'booking';

export const doLogin = async (payload) => {
  try {
    const resposne = await axios.post(BaseUrl + Login, payload);
    console.log('Success: ', resposne.data);
    return resposne.data;
  } catch (error) {
    ShowToast("Error while communicating with the server..")
    return error;
  }
};

export const doRegistration = async (payload) => {
  try {
    const resposne = await axios.post(BaseUrl + Registration, payload);
    console.log('Success: ', resposne.data);
    return resposne.data;
  } catch (error) {
    ShowToast("Error while communicating with the server..")
    return error;
  }
};

export const doLogout = async () => {
  await clearLocalStorage();
}

export const getAllRooms = async () => {
  try {
    const response = await axios.get(BaseUrl + Rooms);
    if (response) { return response.data };
  } catch (error) {
    ShowToast("Error while communicating with the server..")
    return error;
  }
}

export const submitRoomReq = async (payload) => {
  try {
    const response = await axios.post(BaseUrl + CreateBooking, payload);
    console.log('Submit Req res: ', response.data);
    if (response) { return response.data };
  } catch (error) {
    ShowToast("Error while communicating with the server..")
    return error;
  }
}

export const getAllBookings = async () => {
  try {
    const response = await axios.get(BaseUrl + AllBookings);
    if (response) { return response.data };
  } catch (error) {
    ShowToast("Error while communicating with the server..")
    return error;
  }
}

/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { ToastAndroid } from 'react-native';

export const ShowToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };
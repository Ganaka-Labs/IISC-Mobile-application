/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */

import AsyncStorage from "@react-native-async-storage/async-storage";

export const USER_DETAILS = 'user_details';

export const jsonToStringify = (jsonObj) => {
  return JSON.stringify(jsonObj);
}

export const stringifyToJSON = (jsonString) => {
  return JSON.parse(jsonString);
}


export const setToLocal = async (key, data) => {
    try {
        // await AsyncStorage.setItem(key, data);
        await AsyncStorage.setItem(key, data);
      } catch (error) {
        console.log('Error while saving detials on local S');
        // Error saving data
      }
};

export const getFromLocal = async (key) => {
    try {
        return await AsyncStorage.getItem(key, null);
      } catch (error) {
        return null;
      }
};

export const clearLocalStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch(error) {
        console.log('Error while clearing the storage');
    }
};
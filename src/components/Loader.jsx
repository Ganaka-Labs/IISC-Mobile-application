/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator style={Styles.loader} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    opacity: '0.5';
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',

  },
  loader: {
    // width: 40,
    // height: 40,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
});

export default Loader;

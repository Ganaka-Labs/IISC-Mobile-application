/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import Loader from './Loader';

export const CommonStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    marginTop: 12,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    paddingTop: 50,
    marginTop: 50,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

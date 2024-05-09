/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import BookClass from './BookClass';
import MyBooking from './MyBookings';
import Profile from './Profile';

// const FirstRoute = () => (
//     <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
//   );

//   const SecondRoute = () => (
//     <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
//   );

const tabs = SceneMap({
  book_class: BookClass,
  my_bookings: MyBooking,
  profile: Profile,
});

const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'book_class', title: 'Book Class'},
    {key: 'my_bookings', title: 'My Bookings'},
    {key: 'profile', title: 'Profile'},
  ]);
  return (
    // <Text>Home Screen</Text>
    <TabView
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={tabs}
    />
  );
};

export default HomeScreen;

import {Ionicons} from '@expo/vector-icons';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {Tabs} from 'expo-router';
import React from 'react';

const screenOptions = (route: any, color: string) => {
  switch (route.name) {
    case 'index':
      return <Ionicons name="home-outline" color={color} size={24} />;
    case 'ticket':
      return <Ionicons name="tv-outline" color={color} size={24} />;
    default:
      return <Ionicons name="home-outline" color={color} size={24} />;
  }
};

const HomeTab = () => {
  return (
    <Tabs
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        headerShown: false,
        tabBarActiveTintColor: 'yellow',
        tabBarStyle: {
          height: 80,
          backgroundColor: '#3B1578',
          elevation: 2,
        },
      })}
      tabBar={props => <BottomTabBar {...props} />}>
      <Tabs.Screen name="index" options={{title: 'Home'}} />
      <Tabs.Screen name="ticket" options={{title: 'Cinema'}} />
    </Tabs>
  );
};

export default HomeTab;

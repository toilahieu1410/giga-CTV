import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/home/index'
import Favorite from '../screens/favorite/index'
import CongDong from '../screens/congDong/index'
import Order from '../screens/order/order'
import Profile from '../screens/profile/profile'

const Tab = createBottomTabNavigator()

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      shifting={true}
      screenOptions={{
        tabBarActiveTintColor: '#048ad1',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'white',}
      }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <Icon name="ios-home" size={size} color={color}/>,
          headerShown: false,
        }}/>
      <Tab.Screen
        name='Yêu thích'
        component={Favorite}
        options={{
          tabBarLabel: 'Yêu thích',
          tabBarIcon: ({color, size}) => <Icon name="ios-heart" size={size} color={color}/>,
          headerShown: false,
        }}/>
      <Tab.Screen
        name='Cộng đồng'
        component={CongDong}
        options={{
          tabBarLabel: 'Cộng đồng',
          tabBarIcon: ({color, size}) => <Icon name="ios-chatbubbles" size={size} color={color}/>,
          headerShown: false,
        }}/>
      <Tab.Screen
        name='Đơn hàng'
        component={Order}
        options={{
          tabBarLabel: 'Đơn hàng',
          tabBarIcon: ({color, size}) => <Icon name="md-clipboard" size={size} color={color}/>,
          headerShown: false,
      }}/>
      <Tab.Screen
        name='Cá nhân'
        component={Profile}
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({color, size}) => <Icon name="ios-person" size={size} color={color}/>,
          headerShown: false,
      }}/>
    </Tab.Navigator>
  )
}

export default MainTab
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider} from 'native-base'

import MainStack from './mainStack'
import Login from '../screens/auth/login'
import Signup from '../screens/auth/signup'
import AuthPhone from '../screens/auth/authPhone'
import Forgot from '../screens/auth/forgotPassword'
import DieuKhoan from '../screens/auth/dieuKhoan'
import InputPassword from '../screens/auth/inputPassword'
import { checkLogin } from  '../redux/auth/action'

const Stack = createStackNavigator()

const AuthStack = () => {

  const dispatch = useDispatch()

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn)

  useEffect(() => {
    dispatch(checkLogin())
  }, [])

  return (
    <NavigationContainer independent={true}>
      <NativeBaseProvider >
        {
          !isLoggedIn ? (
            <Stack.Navigator screenOptions={{headerMode:'none'}}>
              <Stack.Screen name='Login' component={Login}/>
              <Stack.Screen name='Signup' component={Signup}/>
              <Stack.Screen name='AuthPhone' component={AuthPhone}/>
              <Stack.Screen name='Forgot' component={Forgot}/>
              <Stack.Screen name='DieuKhoan' component={DieuKhoan}/>
              <Stack.Screen name='InputPassword' component={InputPassword}/>
            </Stack.Navigator>
          )  : (
            <Stack.Navigator screenOptions={{headerMode:'none'}}>
              <Stack.Screen name='MainStack' component={MainStack}/>
            </Stack.Navigator>
          )
        }
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default AuthStack
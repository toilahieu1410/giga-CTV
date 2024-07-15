import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import {  
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput
} from 'react-native'
import { setting } from '../../assets/css/setting'
import { moderateScale } from '../../assets/css/size'
import { changePassword } from '../../redux/profile/action'
import Header from '../layout/header'
import { showAlert } from '../../utilities/function'
// import 

const ChangePassword = ({navigation}) => {
  const dispatch = useDispatch()

  const { control, handleSubmit, formState: { errors }, reset } = useForm()

  const confirmPassWord = (data) => {
    const body = {
      oldPassword: data.oldPassword,
      password: data.password,
      confirmPassword: data.confirmPassword
    }
    if(data.password != data.confirmPassword){
      showAlert("Thông báo","Mật khẩu không giống nhau")
    }
    else if (data.password.length < 6 || data.confirmPassword.length < 6) {
      showAlert("Thông báo","Mật khẩu quá ngắn")
    }
    else if (data.password.length > 20 || data.confirmPassword.length > 20) {
      showAlert("Thông báo","Mật khẩu quá dài")
    }
    else {
      dispatch(changePassword(body, navigation))
    }
  }
  
  return (
    <View style={styles.container}>
      <Header
        title ='Đổi mật khẩu'
        onPress = {() => navigation.goBack()}
      />
      <View style={styles.form}>
        <Text style={styles.subTitle}>Nhập vào mật khẩu </Text>

        <Controller
          control={control}
          rules={{ required: true }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Password'
            />
          )}
          name='oldPassword'
        />
        {errors.oldPassword && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}

        <Text style={styles.subTitle}>Nhập vào mật khẩu mới</Text>
        
        <Controller
          control={control}
          rules={{ required: true }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Password'
            />
          )}
          name='password'
        />
        {errors.password && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}

        <Controller
          control={control}
          rules={{ required: true }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.textInput}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Confirm Password'
            />
          )}
          name='confirmPassword'
        />
        {errors.confirmPassword && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={handleSubmit(confirmPassWord)} style={styles.btnNext}>
            <Text style={styles.textNext}>Đổi mật khẩu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: moderateScale(15),
    backgroundColor: '#fff',
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(20),
    borderRadius: moderateScale(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  subTitle: {
    fontSize: setting.fontDefault,
    marginBottom: moderateScale(20),
    color: '#444'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: moderateScale(20),
    borderRadius: moderateScale(20),
    height: moderateScale(45),
    marginBottom: moderateScale(20)
  },
  formText: {
    alignItems: 'center'
  },
  formText1: {
    fontSize: setting.fontDefault,
  },
  formText2: {
    fontWeight: '700',
    color: setting.backgroundBlue
  },
  btnContainer: {
    alignItems: 'center'
  },
  btnNext: {
    backgroundColor: setting.backgroundBlue,
    width: '100%',
    height: moderateScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(50)
  },
  textNext: {
    fontSize: setting.fontDefault,
    color: 'white',
  }
})
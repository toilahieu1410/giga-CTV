import React from "react"
import { useForm, Controller } from 'react-hook-form'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import Header from '../../components/layout/header'
import {moderateScale} from '../../assets/css/size'
import {setting} from '../../assets/css/setting'

const ForgotPassword = ({navigation}) => {

  const { control, handleSubmit, formState: { errors } } = useForm()


  return (
    <View style={styles.container}>
      <Header title={'Quên mật khẩu'} onPress={() => navigation.goBack()}/>
      <View style={styles.form}>
        {/* <Text style={styles.title}>Quên mật khẩu?</Text> */}
        <Text style={styles.subTitle}>Nhập số điện thoại đăng ký tài khoản của bạn</Text>
        <View style={{width:'100%'}}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.textInput}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder='Nhập số điện thoại'
                keyboardType="numeric"
              />
            )}
            name='username'
            defaultValue={''}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnConfirm}>
            <Text style={styles.textConfirm}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    alignItems: 'center',
    marginTop: moderateScale(30),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },
  title: {
    fontSize: setting.fontDefault + 4,
    fontWeight: '700',
    marginBottom: moderateScale(20)
  },
  subTitle: {
    fontSize: setting.fontDefault,
    marginBottom: moderateScale(30)
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: moderateScale(20),
    borderRadius: moderateScale(20)
  },
  btnContainer: {
    marginTop: moderateScale(40)
  },
  btnConfirm: {
    backgroundColor: setting.backgroundBlue,
    width: moderateScale(300),
    height: moderateScale(45),
    borderRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textConfirm: {
    color: 'white',
    fontSize: setting.fontDefault + 4,
    fontWeight: '700'
  }
})
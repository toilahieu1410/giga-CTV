import React, {useState} from "react"
import { useDispatch } from "react-redux"
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import Header from '../../components/layout/header'
import {moderateScale} from '../../assets/css/size'
import {setting} from '../../assets/css/setting'
import { postApiSignUp } from "../../redux/auth/action"
import { showMessage } from "react-native-flash-message"
import auth from '@react-native-firebase/auth'
import { showAlert } from "../../utilities/function"

const InputPassword = ({navigation, route}) => {
  const dispatch = useDispatch()

  const phone = route.params.phone

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPass, setShowPass] = useState(true)

  const confirmPassWord = () => {
    const body = {
      phone: phone,
      password: password,
      confirmPassword: confirmPassword
    }
    
    if(password != confirmPassword){
      showAlert("Thông báo", "Mật khẩu không giống nhau")
    }
    else if (password.length < 6 && confirmPassWord.length < 6) {
      showAlert("Thông báo", "Mật khẩu quá ngắn")
    }
    else if (password.length > 20 && confirmPassWord.length > 20) {
      showAlert("Thông báo", "Mật khẩu quá dài")
    }
    else {
      dispatch(postApiSignUp(body, navigation))
    }
  }
  
  return (
    <View style={styles.container}>
      <Header title={'Tạo mật khẩu'} onPress={() => navigation.goBack()}/>
      <View style={styles.form}>
        <View>
          <Text style={styles.subTitle}>Nhập vào mật khẩu của bạn</Text>
          <View>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={showPass}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm password"
              secureTextEntry={showPass}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={confirmPassWord} style={styles.btnNext}>
            <Text style={styles.textNext}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default InputPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    padding: moderateScale(15)
  },
  subTitle: {
    fontSize: setting.fontDefault,
    marginBottom: moderateScale(20)
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
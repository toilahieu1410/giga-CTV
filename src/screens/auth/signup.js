import React, {useState} from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import Header from '../../components/layout/header'
import {moderateScale} from '../../assets/css/size'
import {setting} from '../../assets/css/setting'
import { showMessage } from "react-native-flash-message"
import auth from '@react-native-firebase/auth'

const Signup = ({navigation}) => {

  const [phone, setPhone] = useState('')
  const [confirm, setConfirm] = useState(null)

  // const phoneAuth = async () => {
  //   if(phone != '') {
  //     const confirmation = await auth().signInWithPhoneNumber('+84' + phone)
  //     if(confirmation) {
  //       setConfirm(confirmation)
  //       navigation.navigate('AuthPhone', {confirm: confirm})
  //     }
  //   } else {
  //     showMessage({
  //       message: 'Chưa nhập số điện thoại',
  //       type: 'info'
  //     })
  //   }
  // }
  const SignUp = () => {
    navigation.navigate('InputPassword', {phone})
  }
  return (
    <View style={styles.container}>
      <Header title={'Nhập số điện thoại'} onPress={() => navigation.goBack()}/>
      <View style={styles.form}>
        <View>
          <Text style={styles.subTitle}>Vui lòng nhập số điện thoại của bạn để nhận mã xác thực</Text>
          <View>
            <TextInput
              style={styles.textInput}
              value={phone}
              onChangeText={setPhone}
              placeholder="Nhập số điện thoại"
              keyboardType="numeric"
            />
          <View styles={styles.formText}>
            <Text style={styles.formText1}>Khi ấn tiếp tục, nghĩa là bạn đã đồng ý với 
              <Text style={styles.formText2}> Điều khoản sử dụng </Text>
            của chúng tôi</Text>
          </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={SignUp} style={styles.btnNext}>
          {/* <TouchableOpacity onPress={() => phoneAuth()} style={styles.btnNext}> */}
            <Text style={styles.textNext}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Signup

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
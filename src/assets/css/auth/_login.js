import { StyleSheet } from 'react-native'
import {moderateScale} from '../size'
import {setting} from '../setting'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: setting.backgroundColor
  },
  logoLogin: {
    alignItems: 'center',
    marginTop: moderateScale(90)
  },
  logoImage: {
    width: moderateScale(250),
    height: moderateScale(42)
  },
  loginForm: {
    marginTop: moderateScale(50),
    padding: moderateScale(20)
  },
  inputForm: {
    flex: 1,
    marginVertical:moderateScale(15)
  },
  textLogin: {
    fontSize: setting.fontDefault,
    marginBottom: moderateScale(10)
  },
  textInputLogin: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: moderateScale(20),
    borderRadius: moderateScale(20),
    width: '100%'
  },
  password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  textInputPass: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: moderateScale(20),
    borderRadius: moderateScale(20),
    width: '100%'
  },
  btnEye: {
    justifyContent: 'center',
    position: 'absolute',
    right: moderateScale(15),
    top: moderateScale(12)
  },
  btnLoginForm: {
    alignItems: 'center',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20)
  },
  btnLogin: {
    backgroundColor: setting.backgroundBlue,
    width: '100%',
    height: moderateScale(45),
    borderRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTextLogin: {
    color: 'white',
    fontSize: setting.fontDefault + 4,
    fontWeight: '700'
  },
  forgotPassword: {
    fontWeight: '700',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
    fontStyle: 'italic',
    fontSize: setting.fontDefault + 1
  },
  btnSignin: {
    flexDirection: 'row',
    marginBottom: moderateScale(20)
  },
  textSignin1: {
    fontSize: setting.fontDefault + 1
  },
  textSignin2: {
    fontSize: setting.fontDefault + 1,
    color: setting.backgroundBlue,
    fontWeight: '700',
  },
  dieuKhoan: {
    fontSize: setting.fontDefault + 1,
    fontWeight: '700',
    textDecorationLine: "underline"
  }
})
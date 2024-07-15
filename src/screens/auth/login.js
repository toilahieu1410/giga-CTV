import React, {useState} from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../assets/css/auth/_login'
import { getApiSignIn } from '../../redux/auth/action'

const Logo = 'https://gigadigital.vn/static/media/Giga-logo.79229c15b9dd11358d9b.png'

const Login = ({navigation}) => {

  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm()

  const [showPass, setShowPass] = useState(true)

  const onLogin = (data) => {
    console.log(data,'daaaa')
    const params = {
      username: data.username,
      password: data.password
    }
    dispatch(getApiSignIn(params))
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.logoLogin}>
            <Animatable.Image
              animation={'fadeIn'}
              duration={1000}
              style={styles.logoImage}
              source={{uri: Logo}}
              />
          </View>
          <View style={styles.loginForm}>
            <View style={styles.inputForm}>
              <Text style={styles.textLogin}>Email / Số điện thoại:</Text>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.textInputLogin}
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
              {errors.username && <Text>This is required.</Text>}
            </View>
            <View style={styles.inputForm}>
              <Text style={styles.textLogin}>Mật khẩu:</Text>
              <View style={styles.password}>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={styles.textInputPass}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder='Nhập mật khẩu'
                      secureTextEntry={showPass}
                    />
                  )}
                  name='password'
                />
                {errors.password && <Text>This is required.</Text>}
                <TouchableOpacity
                  style={styles.btnEye}
                  onPress={() => setShowPass(!showPass)}>
                    {showPass ? (
                      <Icon name={'ios-eye-outline'} size={24} color={'#000'} />
                    ) : (
                      <Icon name={'ios-eye-off-outline'} size={24} color={'#000'} />
                    )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.btnLoginForm}>
            <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit(onLogin)}>
              <Text style={styles.btnTextLogin}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
            </TouchableOpacity>
            <View style={styles.btnSignin}>
              <Text style={styles.textSignin1}>Chưa có tài khoản? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                <Text style={styles.textSignin2}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('DieuKhoan')}>
              <Text style={styles.dieuKhoan}>Điều khoản sử dụng</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login
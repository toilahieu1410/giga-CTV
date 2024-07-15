import React, {useState} from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import Header from '../../components/layout/header'
import {moderateScale, width} from '../../assets/css/size'
import {setting} from '../../assets/css/setting'
import { showMessage } from "react-native-flash-message"
import { NavigationContainer } from "@react-navigation/native"
import auth from '@react-native-firebase/auth'

const CELL_COUNT = 6

const AuthPhone = ({navigation, route}) => {

  const confirm = route.params.confirm

  const [value, setValue] = useState('')

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  const submitCode = async () => {
    try {
      const data = await confirm.confirm(value)
    } catch (error) {
      console.log('Invalid code!')
      showMessage({
        message: 'Invalid code!',
        type: 'info'
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title={'Nhập mã xác thực'} onPress={() => navigation.goBack()}/>
      <View style={styles.body}>
        <View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Mã xác thực đã được gửi vào số điện thoại của bạn</Text>
          </View>
          <View style={styles.codeFieldContainer}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>Gửi lại sau  </Text>
            <Text style={styles.time}>04 : 05</Text>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <TouchableOpacity 
            style={styles.btnSubmit}
            disabled={ value.length = 6 ? false : true }
            onPress={() => submitCode()}>
            <Text style={styles.textSubmit}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AuthPhone

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    padding: moderateScale(20),
    marginTop: moderateScale(10),
    flex: 1,
    justifyContent: 'space-between',
  },
  subTitleContainer: {
    alignItems: 'center'
  },
  subTitle: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue,
    fontWeight: '500'
  },
  codeFieldContainer: {
  },
  codeFieldRoot: {
    marginTop: moderateScale(20)
  },
  cell: {
    width: moderateScale(40),
    height: moderateScale(40),
    lineHeight: moderateScale(38),
    fontSize: setting.fontDefault + 10,
    borderBottomWidth: 2,
    borderColor: '#048ad130',
    textAlign: 'center'
  },
  focusCell: {
    borderColor: '#048ad1',
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(40),
    justifyContent: 'center'
  },
  timeText: {
    fontSize: setting.fontDefault + 2
  },
  time: {
    fontSize: setting.fontDefault + 2,
    color: setting.backgroundBlue,
    fontWeight: '700'
  },
  submitContainer: {
    alignItems: 'center'
  },
  btnSubmit: {
    backgroundColor: setting.backgroundBlue,
    width: width - moderateScale(50),
    height: moderateScale(40),
    borderRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSubmit: {
    fontSize: setting.fontDefault + 2,
    color: setting.backgroundColor,
    fontWeight: '700'
  }
})
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import * as Animatable from 'react-native-animatable'
import {Picker} from '@react-native-picker/picker'
import Header from '../layout/header'
import { getListBank, updateApiProfile } from '../../redux/profile/action'
import { _checkPassword } from '../../apis/profile'
import { styles } from '../../assets/css/profile/_backAccount'

const BankAccount = ({navigation, route}) => {

  const dispatch = useDispatch()

  const listProfile = route.params.listProfile

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: listProfile
  })

  const listBank = useSelector((store) => store.profile.listBank)

  const [bankName, setbankName] = useState("")

  useEffect(() => {
    reset(listProfile)
  },[])

  useEffect(() => {
    dispatch(getListBank())
  },[])

  const onSubmit = (data) => {
    const body = {
      nganHang: bankName,
      chiNhanhNH: data.chiNhanhNH,
      chuTaiKhoanNH: data.chuTaiKhoanNH,
      soTaiKhoanNH: data.soTaiKhoanNH,
    }
    dispatch(updateApiProfile(body, navigation))
  }
  
  return (
    <View style={styles.container}>
      <Header 
        onPress={() => navigation.goBack()}
        title='Tài khoản ngân hàng'
      />
      <ScrollView>
        {
          listProfile && listProfile.nganHang == null ?
          <View style={styles.bankAccount}>
            <Text style={styles.bankName}>Tên ngân hàng</Text>
            <View style={styles.pickerBank}>
              <Picker
                selectedValue={bankName}
                style={styles.selectOption}
                onValueChange={(itemValue, itemIndex) => {setbankName(itemValue)}}
              >
                <Picker.Item label={'Chọn ngân hàng'} value={''} />
                { 
                  listBank && listBank.map((item)=>(
                    <Picker.Item label={`${item.short_name} - ${item.name}`} value={item.name} key={item.id} />
                  ))
                }
              </Picker>
            </View>
            {
              bankName !== '' && 
              <Animatable.View 
                style={styles.bankInfo}
                animation={'fadeInDown'}
                duration={500}
              >
                <View style={styles.bankInfoRow}>
                  <Text style={styles.bankInfoTitle}>Số tài khoản ngân hàng</Text>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Nhập số tài khoản ngân hàng'
                        keyboardType="numeric"
                      />
                    )}
                    name='soTaiKhoanNH'
                  />
                  {errors.soTaiKhoanNH && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}
                </View>
                <View style={styles.bankInfoRow}>
                  <Text style={styles.bankInfoTitle}>Chi nhánh</Text>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Nhập chi nhánh'
                      />
                    )}
                    name='chiNhanhNH'
                  />
                  {errors.chiNhanhNH && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}
                </View>
                <View style={styles.bankInfoRow}>
                  <Text style={styles.bankInfoTitle}>Chủ tài khoản</Text>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Nhập tên chủ tài khoản'
                      />
                    )}
                    name='chuTaiKhoanNH'
                  />
                  {errors.chuTaiKhoanNH && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}
                </View>
                <TouchableOpacity 
                  style={styles.btnSave} 
                  onPress={handleSubmit(onSubmit)}>
                  <Text style={styles.textBtnSave}>Hoàn tất</Text>
                </TouchableOpacity>
              </Animatable.View> 
            }
          </View>
          : 
          <View style={styles.bankAccount}>
            <Text style={styles.bankName}>Tên ngân hàng</Text>
            <View style={styles.pickerBank}>
              <Picker
                selectedValue={listProfile && listProfile.nganHang}
                style={styles.selectOption}
                onValueChange={(itemValue) => {setbankName(itemValue)}}
              >
                <Picker.Item label={'Chọn ngân hàng'} value={''} />
                { 
                  listBank && listBank.map((item)=>(
                    <Picker.Item label={`${item.short_name} - ${item.name}`} value={item.name} key={item.id} />
                  ))
                }
              </Picker>
            </View>
            {
              listProfile && listProfile.nganHang != null  && 
              <Animatable.View 
                style={styles.bankInfo}
                animation={'fadeInDown'}
                duration={500}
              >
                <View style={styles.bankInfoRow}>
                  <Text style={styles.bankInfoTitle}>Số tài khoản ngân hàng</Text>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Nhập số tài khoản ngân hàng'
                        keyboardType="numeric"
                      />
                    )}
                    name='soTaiKhoanNH'
                  />
                  {errors.soTaiKhoanNH && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}
                </View>
                <View style={styles.bankInfoRow}>
                  <Text style={styles.bankInfoTitle}>Chi nhánh</Text>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Nhập chi nhánh'
                      />
                    )}
                    name='chiNhanhNH'
                  />
                  {errors.chiNhanhNH && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}
                </View>
                <View style={styles.bankInfoRow}>
                  <Text style={styles.bankInfoTitle}>Chủ tài khoản</Text>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <TextInput
                        style={styles.textInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Nhập tên chủ tài khoản'
                      />
                    )}
                    name='chuTaiKhoanNH'
                  />
                  {errors.chuTaiKhoanNH && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}
                </View>
                <TouchableOpacity 
                  style={styles.btnSave} 
                  onPress={handleSubmit(onSubmit)}>
                  <Text style={styles.textBtnSave}>Chỉnh sửa</Text>
                </TouchableOpacity>
              </Animatable.View> 
            }
          </View>
        }
      </ScrollView>
    </View>
  )
}

export default BankAccount
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  Image,
 } from 'react-native'
 import moment from 'moment'
import Header from '../layout/header'
import iconUser from '../../assets/images/icon/icon-user.png'
import iconPhone from '../../assets/images/icon/icon-phone.png'
import iconMail from '../../assets/images/icon/icon-mail.png'
import iconCalendar from '../../assets/images/icon/icon-calendar.png'
import iconKey from '../../assets/images/icon/icon-key.png'
import iconCode from '../../assets/images/icon/icon-code.png'
import { updateApiProfile } from '../../redux/profile/action'
import { styles } from '../../assets/css/profile/_profileInfo'
import { regex } from '../../utilities/regex'

const ProfileInfo = ({navigation, route}) => {

  const dispatch = useDispatch()

  const listProfile = route.params.listProfile
  
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: listProfile
  })

  useEffect(() => {
    reset(listProfile)
  },[])

  const onSubmit = (data) => {
    const body = {
      name: data.name,
      email: data.email,
    }
    dispatch(updateApiProfile(body, navigation))
  } 
  
  return (
    <View style={styles.container}>
      <Header 
        onPress={() => navigation.goBack()}
        title="Thông tin cá nhân"
      />
      <ScrollView>
        <View style={styles.info}>
          <View style={styles.infoRow}>
            <Image source={iconUser} style={styles.imageInfo} />
            <View style={styles.changeInfo}>
              <Text style={styles.infoTitle}> Họ và tên </Text>
              <Controller
                control={control}
                rules={{ required: true }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.textInput}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder='Nhập họ và tên'
                  />
                )}
                name='name'
              />
              {errors.name && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}
            </View>
          </View>
          <View style={styles.infoRow}>
            <Image source={iconPhone} style={styles.imageInfo} />
            <View style={styles.changeInfo1}>
              <Text style={styles.infoTitle}>Số điện thoại </Text>
              <Text style={styles.infoContent}>{listProfile && listProfile.phone}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Image source={iconMail} style={styles.imageInfo} />
            <View style={styles.changeInfo}>
              <Text style={styles.infoTitle}> Email </Text>
              <Controller
                control={control}
                rules={{ required: true, pattern: regex.email }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.textInput}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder='@gmail.com'
                  />
                )}
                name='email'
              />
              {errors.email && <Text style={{color: 'red', fontStyle: 'italic'}}>This is required.</Text>}
            </View>
          </View>
          <View style={styles.infoRow}>
            <Image source={iconCalendar} style={styles.imageInfo} />
            <View style={styles.changeInfo1}>
              <Text style={styles.infoTitle}>Ngày tham gia </Text>
              <Text style={styles.infoContent}>{listProfile && moment(listProfile.createdAt).format('DD/MM/YYYY') }</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Image source={iconKey} style={styles.imageInfo} />
            <View style={styles.changeInfo1}>
              <Text style={styles.infoTitle}>Mật khẩu </Text>
              <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                <Text style={styles.infoContent}>Đổi mật khẩu</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoRow}>
            <Image source={iconCode} style={styles.imageInfo} />
            <View style={styles.changeInfo1}>
              <Text style={styles.infoTitle}>Mã giới thiệu </Text>
              <Text style={styles.infoContent}>{listProfile &&listProfile.maGioiThieu}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnSave} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.textBtnSave}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfileInfo

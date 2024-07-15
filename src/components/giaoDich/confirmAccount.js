import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Header from '../layout/header'
import { styles } from '../../assets/css/giaoDich/_confirmAccount'

const imageDefault = 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png'

const ConfirmAccount = ({navigation}) => {

  const [frontImage, setFrontImage] = useState(imageDefault)
  const [afterImage, setAfterImage] = useState(imageDefault)

  const takeFrontPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      setFrontImage(image.path)
    })
   }
   const takeAfterPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      setAfterImage(image.path)
    })
   }
   
  return(
    <View style={styles.container}>
      <Header 
        onPress={() => navigation.goBack()}
        title='Xác minh tài khoản'
      />
      <ScrollView>
        <View style={styles.confirm}>
          <View style={styles.confirmHeader}>
            <Text style={styles.confirmTitle}>Số CMND/CCCD: </Text>
            <TextInput 
              placeholder='Nhập số CMND/CCCD'
              keyboardType='default'
              style={styles.confirmInput}
            />
          </View>
          <View style={styles.takePhoto}>
            <View style={styles.itemPhoto}>
              <Text style={styles.itemPhotoTitle}>Ảnh mặt trước CMND/CCCD</Text>
              
              <TouchableOpacity style={styles.frontImageBtn} onPress={takeFrontPhoto}>
                <Image style={styles.frontImage} source={{uri:frontImage}}/>
              </TouchableOpacity>
            </View>
            <View style={styles.itemPhoto}>
              <Text style={styles.itemPhotoTitle}>Ảnh mặt sau CMND/CCCD</Text>
              
              <TouchableOpacity style={styles.frontImageBtn} onPress={takeAfterPhoto}>
                <Image style={styles.frontImage} source={{uri:afterImage}}/>
              </TouchableOpacity>
            </View>
            
          </View>
          <TouchableOpacity style={styles.btnConfirm}>
            <Text style={styles.btnConfirmText}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default ConfirmAccount
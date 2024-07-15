import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { styles } from '../../assets/css/cart/_cart'


const Payment = (props) => {
  const {thanhToan, setThanhToan} = props
  return (
    <View style={styles.payment}>
      <Text style={styles.paymentTitle}>Hình thức thanh toán</Text>
        <View style={styles.radioPayment}>
          <RadioButton
            status={ thanhToan === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setThanhToan('first')}
            color='#3590de'
          />
          <Text style={styles.textPayment}>
            Qua ví điện tử
          </Text>
        </View> 
        <View style={styles.radioPayment}>
          <RadioButton
            status={ thanhToan === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setThanhToan('second')}
            color='#3590de'
          />
          <Text style={styles.textPayment}>
            Khách thanh toán khi nhận hàng
          </Text>
        </View>
    </View>
  )
}
export default Payment
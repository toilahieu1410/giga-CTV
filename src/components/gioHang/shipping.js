import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import { styles } from '../../assets/css/cart/_cart'


const Shipping = (props) => {
  const {shipping, setShipping} = props
  return (
    <View style={styles.payment}>
      <Text style={styles.paymentTitle}>Hình thức giao hàng</Text>
      <View style={styles.radioPayment}>
        <RadioButton
          status={ shipping === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setShipping('first')}
          color='#3590de'
        />
        <Text style={styles.textPayment}>
          Đi giao hàng
        </Text>
      </View> 
      <View style={styles.radioPayment}>
        <RadioButton
          status={ shipping === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setShipping('second')}
          color='#3590de'
        />
        <Text style={styles.textPayment}>
          Đến cửa hàng
        </Text>
      </View>
    </View>
  )
}
export default Shipping
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../assets/css/cart/_cart'

const GiftCustomer = () => {
  return (
    <View style={styles.receiverInfo}>
      <Text style={styles.paymentTitle}>Quà tặng cho khách</Text>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.chooseReceiver}>
          <Text style={styles.chooseReceiverText}>+ Thêm quà tặng</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GiftCustomer
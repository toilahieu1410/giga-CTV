import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../assets/css/cart/_cart'
import { moderateScale } from '../../assets/css/size'


const Bonus = (props) => {
  const {navigation} = props
  return (
    <View style={styles.payment}>
      <Text style={styles.paymentTitle}>Chương trình thưởng cho CTV</Text>
      <TouchableOpacity style={styles.bonusBtn} onPress = {() => navigation.navigate('ListCTThuong')}>
        <Text style={styles.bonusText}>
          Chọn chương trình thưởng
        </Text>
        <Icon name='chevron-forward' size={moderateScale(24)} color='#444' />
      </TouchableOpacity>
          
    </View>
  )
}
export default Bonus
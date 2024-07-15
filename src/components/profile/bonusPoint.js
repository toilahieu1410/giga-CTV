import React from 'react'
import { 
  View,
  Text,

} from 'react-native'

import Header from '../layout/header'


const BonusPoint = ({navigation}) => {
  return(
    <View>
      <Header
        onPress={() => navigation.goBack()}
        title="Quản lý điểm thưởng"
      />

    </View>
  )
}
export default BonusPoint
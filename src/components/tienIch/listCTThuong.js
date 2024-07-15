import React from 'react'
import { Text, View } from 'react-native'
import Header from '../layout/header'

const ListCTThuong = ({navigation}) => {
  return (
    <View>
      <Header
        title = 'DS chương trình thưởng'
        onPress = {() => navigation.goBack()}
      />
      <View>
        <Text></Text>
      </View>
    </View>
  )
}
export default ListCTThuong
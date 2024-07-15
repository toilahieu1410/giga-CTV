import React from 'react'
import { 
  View,
  Text,
  ScrollView,

} from 'react-native'
import Header from '../layout/header'

const HDNhanThuong = ({navigation}) => {
  return (
    <View>
      <Header 
        title='Hướng dẫn nhận thưởng'
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>
            Chưa có thông tin
          </Text>
        </View>
      </ScrollView>
    </View>
  )
} 

export default HDNhanThuong
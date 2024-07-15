import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,

} from 'react-native'
import { styles } from '../../assets/css/giaoDich/_rutDiem'
import Header from '../layout/header'

const RutDiem = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Header 
        onPress={() => navigation.goBack()}
        title='Rút điểm'
      />
      <ScrollView>
        <View>
          
        </View>
      </ScrollView>
    </View>
  )
}
export default RutDiem
import React from 'react'
import { View, Text } from 'react-native'
import Header from '../layout/header'
import YoutubePlayer from 'react-native-youtube-iframe'
import { moderateScale,width } from '../../assets/css/size'
const ChiTietHD = ({navigation, route}) => {
  return(
    <View>
      <Header
        title={route.params.data}
        onPress={() => navigation.goBack()}
      />
      <View>
        <YoutubePlayer 
          width={width}
          height={moderateScale(220)}
          play={false}
          videoId='Bc-sq7cJGho'

        />
      </View>
    </View>
  )
}
export default ChiTietHD
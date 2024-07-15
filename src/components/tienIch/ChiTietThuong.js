
import React, { useState } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  Dimensions,
} from 'react-native'
import Header from '../layout/header'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../assets/css/tienIch/_CTThuong'
import { moderateScale } from '../../assets/css/size'
import { onlayout } from '../../utilities/function'
const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJs0CCm8lVnYmX6uMmjxGRTUcQ4KCkiVKYqA&usqp=CAU'


const ChiTietThuong = ({navigation}) => {
  const [ widthLayout, setWidthLayout] = useState(Dimensions.get('screen').width)

  return(
    <View onLayout={() => onlayout(setWidthLayout)}>
      <Header 
        title="Chi tiết chương trình thưởng"
        onPress= {() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.chiTietThuong}>
          <View style={styles.itemThuongR}>
            <Image
              source={{uri: img}}
              style={styles.imageThuong}
            /> 
          </View>
          <View style={[styles.itemThuongL,{ width: widthLayout - moderateScale(120)}]}>
            <Text style={styles.textItemThuong} numberOfLines={2}>
              Deal săn thưởng - Biến tần ATV mới cập nhật lên tới 10%
            </Text>
            <Text>
              HSD: 17:00 27/01/2021
            </Text>
          </View>
        </View>
        <View style={[styles.contentThuong, {width: widthLayout - moderateScale(20)}]}>
          <View style={[styles.content,{width: widthLayout - moderateScale(40)}]}>
            <Icon name='ios-calendar-outline' style={styles.contentIcon} />
            <View style={[styles.contentR, {width: widthLayout - moderateScale(80)}]}>
              <Text style={styles.contentRTitle}>Hạn sử dụng</Text>
              <Text style={styles.contentRText}>10:30 20/02/2021 - 17:00 </Text>
            </View>
            
          </View>
          <View style={[styles.content, {width: widthLayout - moderateScale(40)}]}>
            <Icon name='ios-newspaper-outline' style={styles.contentIcon} />
            <View style={[styles.contentR, {width: widthLayout - moderateScale(80)}]}>
              <Text style={styles.contentRTitle}>Mô tả</Text>
              <Text style={styles.contentRText}>
                Chương trình áp dụng cho các sản phẩm đặc biệt. 
                Trong thời gian có hiệu lực, 
                sử dụng chương trình có thể giảm 10% giá trị đơn hàng
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
export default ChiTietThuong
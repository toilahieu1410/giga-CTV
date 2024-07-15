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
const data = [0,1,2,3,4,5,6,7,8,9]
const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJs0CCm8lVnYmX6uMmjxGRTUcQ4KCkiVKYqA&usqp=CAU'


const CTThuong = ({navigation}) => {
  const [ widthLayout, setWidthLayout] = useState(Dimensions.get('screen').width)

  return(
    <View onLayout={() => onlayout(setWidthLayout)}>
      <Header 
        title="Chương trình thưởng"
        onPress= {() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.searchGroup}>
          <TextInput
            placeholder='Nhập mã khuyến mại'
            style={styles.searchInput}
          />
          <Icon 
            name='ios-search-outline' 
            size={moderateScale(20)}
            style={styles.iconSearch}
          />
        </View>
        <View style={styles.listThuong}>
          <FlatList 
            data={data}
            renderItem={({item, index}) => (
              <TouchableOpacity style={[styles.itemThuong,{
                width: widthLayout - moderateScale(20)
              }]}
                onPress={() => navigation.navigate('ChiTietThuong')}
              >
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
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
}
export default CTThuong
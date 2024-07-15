import React, { useState } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Header from '../layout/header'
import { moderateScale } from '../../assets/css/size'
import { styles } from '../../assets/css/tienIch/_huongDanSD'
const data = [
  {
    id: 1, 
    title: 'Hướng dẫn sử dụng cho CTV',
    image: 'https://colormedia.vn/public/upload/e25e07c68d677b392276.jpg',
  },
  {
    id: 2, 
    title: 'Bước đầu kinh doanh online',
    image: 'https://colormedia.vn/public/upload/e25e07c68d677b392276.jpg',
  },
  {
    id: 3, 
    title: 'Bước guy trì kinh doanh Online',
    image: 'https://colormedia.vn/public/upload/e25e07c68d677b392276.jpg',
  },
  {
    id: 4, 
    title: 'Tạo video review sản phẩm',
    image: 'https://colormedia.vn/public/upload/e25e07c68d677b392276.jpg',
  },
  {
    id: 5, 
    title: 'Hướng dẫn bán hàng với shop cá nhân và tên miền riêng',
    image: 'https://colormedia.vn/public/upload/e25e07c68d677b392276.jpg',
  },
]

const HuongDanBH = ({navigation}) => {
  const [ widthLayout, setWidthLayout] = useState(Dimensions.get('screen').width)
  
  return(
    <View style={styles.container}>
      <Header 
        title="Hướng dẫn bán hàng"
        onPress= {() => navigation.goBack()}
      />
      <ScrollView>
         <View style={styles.huongDan}>
          <FlatList 
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem= {({item, index}) => (
              <TouchableOpacity onPress={() => navigation.navigate('ChiTietHD',{data: item.title})}  style={styles.btnItem}>
                <ItemHD 
                  title={item.title}
                  image={item.image}
                  widthLayout={widthLayout}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
}
export default HuongDanBH

const ItemHD = (props) => {
 
  const {title, image, widthLayout} = props
  return(
    <View style={styles.itemHD}>
      <Image 
        source={{uri: image}} 
        style={[styles.imageItem,{ height: moderateScale(160) }]} 
      />
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  )
}
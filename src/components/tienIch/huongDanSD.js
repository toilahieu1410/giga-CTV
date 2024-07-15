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
import { moderateScale } from '../../assets/css/size';
import { styles } from '../../assets/css/tienIch/_huongDanSD';
import Header from '../layout/header'
import { onlayout } from '../../utilities/function';
const data = [
  {
    id: 1, 
    title: 'Hướng dẫn sử dụng cho CTV',
    image: 'https://cafebiz.cafebizcdn.vn/zoom/700_438/pr/2020/1606188961602-0-0-861-1378-crop-1606188965996-63741833406425.jpg',
  },
  {
    id: 2, 
    title: 'Hướng dẫn đăng bán sản phẩm',
    image: 'https://i.ytimg.com/vi/EoykuwsIK7U/maxresdefault.jpg',
  },
  {
    id: 3, 
    title: 'Hướng dẫn đặt hàng và quản lý đơn hàng',
    image: 'https://i.ytimg.com/vi/yF14j8Og1ao/maxresdefault.jpg',
  },
  {
    id: 4, 
    title: 'Hướng dẫn bán hàng',
    image: 'https://i.ytimg.com/vi/qDGXKkzudu0/maxresdefault.jpg',
  },
  {
    id: 5, 
    title: 'Hướng dẫn nạp và rút điểm cuccu',
    image: 'https://i.ytimg.com/vi/_q0hd1V7kxs/maxresdefault.jpg',
  },
]

const HuongDanSD = ({navigation}) => {
  const [ widthLayout, setWidthLayout] = useState(Dimensions.get('screen').width)

  return(
    <View style={styles.container} onLayout={() => onlayout(setWidthLayout)}>
      <Header 
        title="Hướng dẫn sử dụng"
        onPress= {() => navigation.goBack()}
      />
      <ScrollView>
         <View style={styles.huongDan}>
          <FlatList 
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem= {({item, index}) => (
              <TouchableOpacity onPress={() => navigation.navigate('ChiTietHD',{data: item.title})} style={styles.btnItem}>
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
export default HuongDanSD

const ItemHD = (props) => {
 
  const {title, image, widthLayout} = props
  return(
    <View style={styles.itemHD}>
      <Image 
        source={{uri: image}} 
        style={[styles.imageItem,{ height: moderateScale(160)}]} 
      />
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  )
}
import React, { useState } from 'react' 
import { 
  Image, 
  Text, 
  View,
  TouchableOpacity,
  FlatList,
  Dimensions
 } from 'react-native'
import { styles } from '../../assets/css/order/_order'
import { moderateScale } from '../../assets/css/size'
import { onlayout } from '../../utilities/function'

const DraftOrder = (props) => {

  const {navigation, listOrder} = props
  
  const [ widthLayout, setWidthLayout] = useState(Dimensions.get('screen').width)

  return (
    <View style={styles.order} onLayout={() => onlayout(setWidthLayout)}>
      <FlatList 
        data={listOrder}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View style={styles.groupOrder}>
            <View style={[styles.itemOrder,{width: (widthLayout - moderateScale(20)) }]}>
              <View style={styles.flexRow}>
                <Text style={styles.shippingNameDraft}>{item.shipping_name}</Text>
                <TouchableOpacity style={styles.btnShowDetail}>
                  <Text style={styles.btnShowDetailText}>Hủy đơn</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.totalIcon}>
                <Image source={{uri: item.product[0].thumb}} style={styles.imageOrder} />
                <View style={styles.orderProductRight}>
                  <Text style={styles.nameProduct}>{item.product[0].name}</Text>
                  <Text style={styles.nameProduct}>Số lượng: { item.product[0].qty}</Text>
                </View>
              </View>
              <View style={styles.showDetail}>
                <Text style={styles.nameProduct1}>Tổng sản phẩm: {item.total_qty}</Text>
                <TouchableOpacity 
                  style={styles.btnShowDetail3}
                  onPress={() => navigation.navigate('OrderDetail', {id: item._id})}
                >
                  <Text style={styles.btnShowDetailText}>Xem đơn hàng</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.totalMoney}>
                <Text style={styles.textOrder}>Tổng: {item.total_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
                <Text style={styles.textOrder}>Hoa hồng: {item.total_percent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}
export default DraftOrder
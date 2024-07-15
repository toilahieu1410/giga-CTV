import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from 'react-native'
import Header from '../layout/header'
import { styles } from '../../assets/css/cart/_xacNhanDonHang'
import { height, moderateScale, width } from '../../assets/css/size'
import { useDispatch } from 'react-redux'
import { confirmOrder } from '../../redux/cart/action'


const XacNhanDonHang = ({route, navigation}) => {
  const dispatch = useDispatch()
  const donHang = route.params.data

  const onConfirm = (id) => {
    dispatch(confirmOrder(id, navigation))
  }
  return (
    <View style={styles.container}>
      <Header
        title='Xác nhận đơn hàng'
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={[styles.confirm, {justifyContent: donHang.product.length > 2 ? 'space-between': 'flex-start'}]}>
          <View>
            <View style={styles.headerConfirm}>
              <Text style={styles.confirmTitle}>Thông tin đơn hàng</Text>
            </View>
            <Text style={styles.nameReceiver}>Người nhận: <Text style={styles.nameReceiver1}>{donHang.shipping_name}</Text></Text>
            <Text style={styles.nameReceiver}>Số điện thoại: <Text style={styles.nameReceiver1}>{donHang.shipping_phone}</Text></Text>
            {
              donHang.shipping_email && <Text style={styles.nameReceiver}>Email: <Text style={styles.nameReceiver1}>{donHang.shipping_email}</Text></Text>
            }
            <Text style={styles.nameReceiver}>Địa chỉ: 
              <Text style={styles.nameReceiver1}> {donHang.shipping_city}, {donHang.shipping_district}, {donHang.shipping_ward}, {donHang.shipping_address}</Text>
            </Text>
            <View >
              <Text style={styles.confirmRowTitle}>Sản phẩm:</Text>
              <FlatList 
                data={donHang.product}
                keyExtractor={item => item._id}
                renderItem = {({item}) => (
                  <View style={styles.itemProduct}>
                    <Image source={{uri: item.thumb}} style={styles.imageProduct}/>
                    <View style={styles.productRight}>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.productPrice}>
                        Giá: <Text  style={styles.productPrice1}>{item.price_value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)} vnđ</Text>
                      </Text>
                      <View style={styles.flexRow}>
                        <Text style={styles.productPrice}>Số lượng: {item.qty}</Text>
                      </View>
                    </View>
                  </View>
                )}
                ItemSeparatorComponent = {() => <View style={{width: width, backgroundColor: '#ccc', height: 1}}/>}
              />
            </View>
            <View style={styles.diviled} />
            <View style={styles.flexRow}>
              <Text style={styles.productPrice}>Phương thức thanh toán: </Text>
              <Text style={styles.nameReceiver}>{donHang.payment_method == 'bank' ? 'Chuyển khoản' : 'Tiền mặt'}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.productPrice}>Phương thức giao hàng: </Text>
              <Text style={styles.nameReceiver}>{donHang.shipping_method == 'go_deliver' ? 'Đi giao hàng' : 'Đến cửa hàng'}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.productPrice}>Tổng tiền:</Text>
              <Text style={styles.nameReceiver1}>{donHang.total_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.productPrice}>Hoa hồng:</Text>
              <Text style={styles.nameReceiver1}>{donHang.total_percent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={[styles.confirmBtn, {
                marginTop: donHang.product.length > 2 ? 0 : moderateScale(20) 
              }]}
            onPress={() => onConfirm(donHang._id)}
          >
            <Text style={styles.confirmBtnText}>Xác nhận đơn hàng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default XacNhanDonHang
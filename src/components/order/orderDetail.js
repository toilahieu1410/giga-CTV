import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native'
import Header from '../layout/header'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../assets/css/order/_orderDetail'
import { moderateScale, width } from '../../assets/css/size'
import { getDetailOrder, deleteOrder } from '../../redux/cart/action'
import { confirmOrder } from '../../redux/cart/action'
import moment from 'moment'
import { showAlert } from '../../utilities/function'

const ListOrder = ({navigation, route}) => {

  const dispatch = useDispatch()

  const id = route.params.id

  const detailOrder = useSelector((store) => store.cart.detailOrder)

  useEffect(() => {
    dispatch(getDetailOrder(id))
  },[])

  const onConfirm = () => {
    dispatch(confirmOrder(id, navigation))
  }

  const onDeleteOrder = () => {
    const params = {
      shipping_status: [detailOrder.shipping_status]
    }
    showAlert(
      'Xóa đơn hàng',
      'Bạn có chắc chắn muốn xóa',
      () => dispatch(deleteOrder(id, params, navigation))
    )
  }

  return (
    <View style={styles.container}>
      <Header
        title='Chi tiết đơn hàng'
        onPress={() => navigation.goBack()}
      />
      {
        detailOrder && 
        <ScrollView>
          <View style={[styles.confirm, {justifyContent: detailOrder.product.length > 2 ? 'space-between': 'flex-start'}]}>
            <View>
              <View style={styles.flexRow}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name='eye-outline' style={styles.iconTitle} />
                  <Text style={styles.rowTitle}>Trạng thái đơn hàng: </Text>
                </View>
                <Text style={styles.statusOrder}>
                  {
                    detailOrder.shipping_status == 'draft' ? 'Đơn nháp' :
                    detailOrder.shipping_status == 'wait_confirm' ? 'Chờ xác nhận' : 
                    detailOrder.shipping_status == 'shipping' ? 'Đang giao' : 
                    detailOrder.shipping_status == 'shipping_done' ? 'Đã giao' : 
                    detailOrder.shipping_status == 'checkout_done' ? 'Đơn hàng thành công' : 
                    detailOrder.shipping_status == 'cancel' ? 'Đã hủy' : 'Giao không thành công' 
                  }
                </Text>
              </View>
              <View style={styles.diviled} />

              <View style={styles.address}>
                <View style={styles.flexRow}>
                   <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name='md-location-outline' style={styles.iconTitle} />
                    <Text style={styles.rowTitle}>Địa chỉ nhận hàng: </Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name='copy-outline' style={styles.iconCopy} />
                  </TouchableOpacity>
                </View>
               
                <Text style={styles.nameReceiver1}>{detailOrder.shipping_name}</Text>
                <Text style={styles.nameReceiver1}>{detailOrder.shipping_phone}</Text>
                {
                  detailOrder.shipping_email && <Text style={styles.nameReceiver}><Text style={styles.nameReceiver1}>{detailOrder.shipping_email}</Text></Text>
                }
                <Text style={styles.nameReceiver1}>{detailOrder.shipping_city}, {detailOrder.shipping_district}, {detailOrder.shipping_ward}, {detailOrder.shipping_address}</Text>
              </View>

              <View style={styles.diviled} />

              <View >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name='basket-outline' style={styles.iconTitle} />
                  <Text style={styles.rowTitle}>Sản phẩm: </Text>
                </View>
                <FlatList 
                  data={detailOrder.product}
                  keyExtractor={item => item._id}
                  renderItem = {({item}) => (
                    <View style={styles.itemProduct}>
                      <Image source={{uri: item.thumb}} style={styles.imageProduct}/>
                      <View style={styles.productRight}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>Số lượng: {item.qty}</Text>
                        <Text style={styles.productPrice1}>{item.price_value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)} vnđ</Text>
                      </View>
                    </View>
                  )}
                  ItemSeparatorComponent = {() => <View style={{width: width, backgroundColor: '#ccc', height: 1}}/>}
                />
              </View>

              <View style={styles.diviled} />

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='receipt-outline' style={styles.iconTitle} />
                <Text style={styles.rowTitle}>Thông tin thanh toán: </Text>
              </View>

              <View style={styles.flexRow}>
                <Text style={styles.productPrice}>Phương thức thanh toán: </Text>
                <Text style={styles.nameReceiver}>{detailOrder.payment_method == 'bank' ? 'Chuyển khoản' : 'Tiền mặt'}</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.productPrice}>Phương thức giao hàng: </Text>
                <Text style={styles.nameReceiver}>{detailOrder.shipping_method == 'go_deliver' ? 'Đi giao hàng' : 'Đến cửa hàng'}</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.productPrice}>Tổng tiền:</Text>
                <Text style={styles.nameReceiver1}>{detailOrder.total_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.productPrice}>Hoa hồng:</Text>
                <Text style={styles.nameReceiver1}>{detailOrder.total_percent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
              </View>
            </View>

            <View style={styles.diviled} />
            
            <View style={{marginBottom: moderateScale(10)}}>
              <View style={styles.flexRow}>
                <Text style={styles.productPrice}>Mã đơn hàng: </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.nameReceiver}>{id}</Text>
                  <TouchableOpacity>
                    <Icon name='copy-outline' style={styles.iconCopy} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.productPrice}>Ngày tạo:</Text>
                <Text style={styles.nameReceiver1}>{moment(detailOrder.createdAt).format('DD/MM/YYYY - hh:mm') }</Text>
              </View>
              {
                detailOrder.date_submit_draft != null &&
                <View style={styles.flexRow}>
                  <Text style={styles.productPrice}>Ngày xác nhận:</Text>
                  <Text style={styles.nameReceiver1}>{moment(detailOrder.date_submit_draft).format('DD/MM/YYYY - hh:mm') }</Text>
                </View>
              }
              {
                detailOrder.date_admin_confirm != null &&
                <View style={styles.flexRow}>
                  <Text style={styles.productPrice}>Ngày admin xác nhận:</Text>
                  <Text style={styles.nameReceiver1}>{moment(detailOrder.date_admin_confirm).format('DD/MM/YYYY - hh:mm') }</Text>
                </View>
              }
            </View>

            <TouchableOpacity 
              style={[styles.addNoteBtn, {
                marginTop: detailOrder.product.length > 2 ? 0 : moderateScale(20) 
              }]}
            > 
              <Icon name='md-clipboard-outline' style={styles.addNoteBtnIcon} />
              <Text style={styles.addNoteBtnText}>Thêm ghi chú</Text>
            </TouchableOpacity>
           
            {
              detailOrder.shipping_status == 'draft' || detailOrder.shipping_status == 'wait_confirm' ? 
              <TouchableOpacity 
                style={styles.cancelBtn}
                onPress = {onDeleteOrder}
              >
                <Text style={styles.confirmBtnText}>Hủy đơn hàng</Text>
              </TouchableOpacity>
              : 
              <TouchableOpacity 
                style={styles.confirmBtn}
                onPress= {() => navigation.goBack()}
              >
                <Text style={styles.confirmBtnText}>Quay lại</Text>
              </TouchableOpacity>
            }
            {
              detailOrder.shipping_status == 'draft' && 
              <TouchableOpacity 
                style={styles.confirmBtn}
                onPress={onConfirm}
              >
                <Text style={styles.confirmBtnText}>Xác nhận đơn hàng</Text>
              </TouchableOpacity>
            }
          </View>
        </ScrollView> 
      }
    </View>
  )
}
export default ListOrder
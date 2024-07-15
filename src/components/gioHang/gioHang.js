import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  ScrollView, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity, 
  FlatList,
  Dimensions,
  Image,
  RefreshControl
 } from 'react-native'
 import { useForm, Controller } from "react-hook-form"
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../layout/header'
import Payment from './payment'
import Shipping from './shipping'
import { GetListCity, GetListDistrict, GetListWard } from './getLocation'
import { moderateScale } from '../../assets/css/size'
import { styles } from '../../assets/css/cart/_cart'
import { getCart, updateCart, deleteCart, createOrder } from '../../redux/cart/action'
import { onlayout, showAlert } from '../../utilities/function'
import { wait } from '../../utilities/useToken'
import { sumBy } from 'lodash'

const Cart = ({navigation}) => {

  const dispatch = useDispatch()

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {}
  })

  const listCart = useSelector((store) => store.cart.listCart)

  const [widthLayout, setWidthLayout] = useState(Dimensions.get('screen').width)
  const [refresh, setRefresh] = useState(false)
  const [totalMoney , setTotalMoney] = useState(0)
  const [bonus , setBonus] = useState(0)
  const [thanhToan, setThanhToan] = useState('first')
  const [shipping, setShipping] = useState('first')
  const [city, setCity] = useState('')
  const [cityId, setCityId] = useState('')
  const [districtId, setDistrictId] = useState('')
  const [district, setDistrict] = useState('')
  const [ward, setWard] = useState('')

  useEffect(() => {
    dispatch(getCart())
  },[refresh])

  useEffect(() => {
    setTotalMoney( sumBy(listCart && listCart.findByArray, function(item) { return item.price * item.qty}) )
  },[refresh])
  
  useEffect(() => {
    setBonus( sumBy(listCart && listCart.findByArray, function(item) { return item.percent * item.qty}) )
  },[refresh])
  
  const onRefresh = useCallback(() => {
    setRefresh(true)
    wait(1000).then(() => setRefresh(false))
  })

  const onCreate = (data) => {
    if (data.shipping_note == '') {
      const body = {
        payment_method: thanhToan == 'first' ? 'bank' : 'ship_cod' ,
        invoice_required:  false,
        shipping_method: shipping == 'first' ? "go_deliver" : 'store' ,
        shipping_name: data.shipping_name,
        shipping_phone: data.shipping_phone,
        shipping_city: city,
        shipping_district: district,
        shipping_ward: ward,
        shipping_address: data.shipping_address,
        productId: listCart && listCart.findDataByUser.cart
      }
      dispatch(createOrder(body, navigation))
    }
    else {
      const body = {
        payment_method: thanhToan == 'first' ? 'bank' : 'ship_cod' ,
        invoice_required:  false,
        shipping_method: shipping == 'first' ? "go_deliver" : 'store' ,
        shipping_name: data.shipping_name,
        shipping_phone: data.shipping_phone,
        shipping_city: city,
        shipping_district: district,
        shipping_ward: ward,
        shipping_note: data.shipping_note,
        shipping_address: data.shipping_address,
        productId: listCart && listCart.findDataByUser.cart
      }
      dispatch(createOrder(body, navigation))
    }
  }
  
  return (
    <View onLayout={() => onlayout(setWidthLayout)}>
      <Header onPress={() => navigation.goBack()} title='Giỏ hàng'/>
      <ScrollView 
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      >
        {
          listCart && listCart.findByArray && listCart.findByArray.length > 0 ?
          <View style={styles.cart}>
            <View style={styles.chooseProduct}>
              <Text style={styles.chooseProductText}>Sản phẩm</Text>
              <View>
                <FlatList 
                  keyExtractor={ item => item.id }
                  data={listCart && listCart.findByArray}
                  renderItem = {({item, index}) => (
                    <View style={{padding: moderateScale(10)}}>
                      <ItemProductChoose 
                        item={item}
                        dispatch={dispatch}
                        onRefresh={onRefresh}
                      />
                    </View>
                  )}
                  ItemSeparatorComponent={() => <View style={{width: widthLayout, height: 1, backgroundColor: '#ccc'}} />}
                />
                <View style={styles.bill}>
                  <View style={styles.costProduct}>
                    <Text style={styles.textCodeProduct}>Tiền hàng</Text>
                    <Text style={styles.valueCodeProduct}>{totalMoney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
                  </View>
                  <View style={styles.totalMoney}>
                    <Text style={styles.totalValue}>Tổng tiền: {totalMoney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
                    <Text style={styles.moneyBonus}>Hoa hồng: {bonus.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
                  </View>
                </View>
              </View>
            </View>

            <Payment thanhToan={thanhToan} setThanhToan={setThanhToan} />
            <Shipping shipping={shipping} setShipping={setShipping} />
            
            <View style={styles.receiverInfo}>
              <Text style={styles.paymentTitle}>Thông tin người nhận</Text>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.chooseReceiver}>
                  <Text style={styles.chooseReceiverText}>+ Chọn địa chỉ đã lưu</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.groupInputReceiver}>
                <Text style={styles.inputTextReceiver}>Họ và tên</Text>
                <Controller
                  control={control}
                  rules={{required: true,}}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.inputReceiver, {width: widthLayout - moderateScale(20)}]}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder='Nhập vào họ và tên'
                    />
                  )}
                  name="shipping_name"
                />
                {errors.shipping_name && <Text style={styles.textRed}>This is required.</Text>}
              </View>
              <View style={styles.groupInputReceiver}>
                <Text style={styles.inputTextReceiver}>Số điện thoại</Text>
                <Controller
                  control={control}
                  rules={{ required: true,}}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.inputReceiver, {width: widthLayout - moderateScale(20)}]}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder='Nhập vào số điện thoại'
                    />
                  )}
                  name="shipping_phone"
                />
                {errors.shipping_phone && <Text style={styles.textRed}>This is required.</Text>}
                
                <View style={styles.groupInputReceiver}>
                  <Text style={styles.inputTextReceiver}>Tỉnh/ Thành phố</Text>
                  <GetListCity 
                    city={city} 
                    setCity={setCity} 
                    cityId={cityId} 
                    setCityId={setCityId}  />
                </View>

                <View style={styles.groupInputReceiver}>
                  <Text style={styles.inputTextReceiver}>Quận/ Huyện</Text>
                  <GetListDistrict 
                    cityId={cityId} 
                    district={district} 
                    setDistrict={setDistrict} 
                    districtId={districtId}
                    setDistrictId={setDistrictId}  
                  />
                </View>
                <View style={styles.groupInputReceiver}>
                  <Text style={styles.inputTextReceiver}>Phường/ xã</Text>
                  <GetListWard districtId={districtId} ward={ward}  setWard={setWard}  />
                </View>
                <View style={styles.groupInputReceiver}>
                  <Text style={styles.inputTextReceiver}>Địa chỉ</Text>
                  <Controller
                    control={control}
                    rules={{required: true,}}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        style={[styles.inputReceiver, {width: widthLayout - moderateScale(20)}]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Nhập vào số nhà'
                      />
                    )}
                    name="shipping_address"
                  />
                  {errors.shipping_address && <Text style={styles.textRed}>This is required.</Text>}
                </View>
                <View style={styles.groupInputReceiver}>
                  <Text style={styles.inputTextReceiver}>Ghi chú</Text>
                  <Controller
                    control={control}
                    rules={{required: false,}}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        style={[styles.inputReceiver, {width: widthLayout - moderateScale(20)}]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder='Nhập vào ghi chú'
                      />
                    )}
                    name="shipping_note"
                  />
                </View>
              </View>
            </View>
            <View style={styles.createOrder}>
              <TouchableOpacity style={styles.createBtn} onPress={handleSubmit(onCreate)}>
                <Text style={styles.createText}>Tạo đơn</Text>
              </TouchableOpacity>
            </View> 
          </View>
          : 
          <View style={styles.nothingCart}>
            <Text>Không có sản phẩm nào trong giỏ hàng</Text>
          </View>
        }
      </ScrollView>
    </View>
  )
}
export default Cart

const ItemProductChoose = (props) => {

  const { item, dispatch, onRefresh } = props
  const [amount , setAmount] = useState(item.qty)
  
  useEffect(() => {
    const body = {
      productId: item._id,
      qty: amount
    }
    dispatch(updateCart(body))
    wait(1000).then(() => {
      onRefresh()
    })
  },[amount])

  const onHandlePlus = () => {
    setAmount(amount + 1)
  }
  const onHandleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }
 
  const handleDelete = (id) => {
    showAlert(
      'Thông báo',
      'Bạn có chắc chắn muốn xóa?',
      () => dispatch(deleteCart(id))
    )
    wait(1000).then(() => {
      onRefresh()
    })
  }

  return (
    <View style={styles.itemProductChoose}>
      <Image source={{uri: item.thumb}} style={styles.imageProductChoose}/>
      <View style={styles.productChooseRight}>
        <Text style={styles.productChooseName}>{item.name}</Text>
        <Text  style={styles.productChoosePrice}>
          Giá: <Text  style={styles.productChoosePrice1}>{item.price_value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,',)}</Text>
        </Text>
        <View style={styles.flexRow}>
          <View style={styles.productChooseAmount}>
            <TouchableOpacity style={styles.minusBtn} onPress={onHandleMinus}>
              <Text style={{fontSize: moderateScale(18)}}>-</Text>
            </TouchableOpacity>
            <TextInput 
              value={amount.toString()}
              onChangeText={setAmount}
              keyboardType='numeric'
              style={styles.textInputAmount}
            />
            <TouchableOpacity style={styles.plusBtn} onPress={onHandlePlus}>
              <Text style={{fontSize: moderateScale(18)}}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnClose} onPress={() => handleDelete(item._id)}>
            <Icon style={styles.btnIconClose} name='ios-close' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  View, 
  useWindowDimensions
} from 'react-native'
import { TabView,TabBar } from 'react-native-tab-view'
import Header from '../../components/layout/header'
import DraftOrder from '../../components/order/draftOrder'
import WaitOrder from '../../components/order/waitOrder'
import ShippingOrder from '../../components/order/shippingOrder'
import CheckoutDone from '../../components/order/checkoutDone'
import CancelOrder from '../../components/order/cancelOrder'
import { getListOrder } from '../../redux/cart/action'
import { height, moderateScale, width } from '../../assets/css/size'

const Order = ({navigation}) => {

  const dispatch = useDispatch()

  const layout = useWindowDimensions()

  const listOrder = useSelector((store) => store.cart.listOrder)

  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState(['draft'])
  
  useEffect(() => {
    if(index == 0) {
      setStatus(['draft'])
    }
    else if (index == 1) {
      setStatus(['wait_confirm'])
    }
    else if (index == 2) {
      setStatus(['shipping', 'shipping_done'])
    }
    else if (index == 3) {
      setStatus(['checkout_done'])
    }
    else if (index == 4) {
      setStatus(['cancel', 'shipping_false'])
    }
  },[index])

  useEffect(() => {
    const params = {
      shipping_status: status
    }
    dispatch(getListOrder(params))
  },[status])

  const routes =[
    { key: '1', title: 'Đơn nháp' },
    { key: '2', title: 'Chờ xác nhận' },
    { key: '3', title: 'Đang giao' },
    { key: '4', title: 'Thành công' },
    { key: '5', title: 'Đã hủy' },
  ]

  const renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (index == 0 && <DraftOrder navigation={navigation} listOrder={listOrder} />)
      case '2':
        return (index == 1 && <WaitOrder navigation={navigation} listOrder={listOrder} />)
      case '3':
        return (index == 2 && <ShippingOrder navigation={navigation} listOrder={listOrder} />)
      case '4':
        return (index == 3 && <CheckoutDone navigation={navigation} listOrder={listOrder} />)
      case '5':
        return (index == 4 && <CancelOrder navigation={navigation} listOrder={listOrder} />)
      default:
        return null;
    }
  }

  const renderTabBar = props => (
    <TabBar
      scrollEnabled={true}
      tabStyle={{width:width /3}}
      labelStyle={{fontSize:moderateScale(12)}}
      activeColor='#048ad1'
      inactiveColor='#444'
      {...props}
      indicatorStyle={{ backgroundColor: '#048ad1' }}
      style={{ 
        backgroundColor: 'white',
      }}
    />
  )

  return (
    <View>
      <Header 
        title='Đơn hàng' 
        action = {() => navigation.navigate('Cart')}
        icon='ios-cart-outline'
      />
      <View style={{height: height - moderateScale(80), width:'100%'}}>
        <TabView
          style={{flexWrap:'nowrap',flexGrow: 1, flexBasis: 10 }}
          navigationState={{ index, routes }}
          renderTabBar={renderTabBar}
          renderScene={ renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </View>
  )
}

export default Order


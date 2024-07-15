import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import MainTab from './mainTab'

import Cart from '../components/gioHang/gioHang'
import Notification from '../screens/notification/notification'

//order
import OrderDetail from '../components/order/orderDetail'

//product
import Categories from '../screens/categories'
import SearchProduct from '../components/product/searchProduct'
import ProductDetail from '../components/product/productDetail'
import SearchCategory from '../components/product/searchCategory'

//huongdan
import HuongDanSD from '../components/tienIch/huongDanSD'
import HuongDanBH from '../components/tienIch/huongDanBH'
import ListCTThuong from '../components/tienIch/listCTThuong'
import CTThuong from '../components/tienIch/CTThuong'
import ChiTietHD from '../components/tienIch/chiTietHD'
import ChiTietThuong from '../components/tienIch/ChiTietThuong'
import HDNhanThuong from '../components/tienIch/HDNhanThuong'

//profile
import ProfileInfo from '../components/profile/profileInfo'
import BankAccount from '../components/profile/bankAccount'
import BonusPoint from '../components/profile/bonusPoint'
import LichSuGD from '../components/profile/lichSuGD'
import ListGioiThieu from '../components/profile/listGioiThieu'
import GroupCTV from '../components/profile/groupCTV'
import SaleReport from '../components/profile/saleReport'
import ChangePassword from '../components/profile/changePassword'

import PostStatus from '../screens/congDong/postStatus'
import StatusDetail from '../screens/congDong/statusDetail'

//giao dich
import NapDiem from '../components/giaoDich/napDiem'
import RutDiem from '../components/giaoDich/rutDiem'
import ConfirmAccount from '../components/giaoDich/confirmAccount'

import XacNhanDonHang from '../components/gioHang/xacNhanDonHang'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerMode:'none'}}>
      <Stack.Screen name='MainTab' component={MainTab}/>

      <Stack.Screen name='Cart' component={Cart}/>
      <Stack.Screen name='Notification' component={Notification}/>

      <Stack.Screen name='OrderDetail' component={OrderDetail}/>

      <Stack.Screen name='ListCTThuong' component={ListCTThuong}/>
      <Stack.Screen name='HuongDanSD' component={HuongDanSD}/>
      <Stack.Screen name='HuongDanBH' component={HuongDanBH}/>
      <Stack.Screen name='CTThuong' component={CTThuong}/>
      <Stack.Screen name='ChiTietHD' component={ChiTietHD}/>
      <Stack.Screen name='ChiTietThuong' component={ChiTietThuong}/>
      <Stack.Screen name='HDNhanThuong' component={HDNhanThuong}/>

      <Stack.Screen name='Categories' component={Categories}/>

      <Stack.Screen name='ProductDetail' component={ProductDetail}/>
      <Stack.Screen name='SearchProduct' component={SearchProduct}/>
      <Stack.Screen name='SearchCategory' component={SearchCategory}/>

      <Stack.Screen name='ProfileInfo' component={ProfileInfo}/>
      <Stack.Screen name='BankAccount' component={BankAccount}/>
      <Stack.Screen name='BonusPoint' component={BonusPoint}/>
      <Stack.Screen name='LichSuGD' component={LichSuGD}/>
      <Stack.Screen name='ListGioiThieu' component={ListGioiThieu}/>
      <Stack.Screen name='GroupCTV' component={GroupCTV}/>
      <Stack.Screen name='SaleReport' component={SaleReport}/>
      <Stack.Screen name='ChangePassword' component={ChangePassword}/>

      <Stack.Screen name='PostStatus' component={PostStatus}/>
      <Stack.Screen name='StatusDetail' component={StatusDetail}/>

      <Stack.Screen name='NapDiem' component={NapDiem}/>
      <Stack.Screen name='RutDiem' component={RutDiem}/>
      <Stack.Screen name='ConfirmAccount' component={ConfirmAccount}/>

      <Stack.Screen name='XacNhanDonHang' component={XacNhanDonHang}/>

    </Stack.Navigator>
  )
}

export default MainStack
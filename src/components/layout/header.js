import React, { useEffect } from 'react'
import {Appbar} from 'react-native-paper'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { moderateScale, width} from '../../assets/css/size'
import { styles } from '../../assets/css/layout/_header'
import { getCart } from '../../redux/cart/action'
import { useDispatch, useSelector } from 'react-redux'

const Header = (props) => {

  const dispatch = useDispatch()

  const {onPress, title, action, icon, functionIcon, functionAction} = props

  const listCart = useSelector((store) => store.cart.listCart)

  useEffect(() => {
    dispatch(getCart())
  },[])

  return (
    <View>
      <Appbar.Header style={styles.header}>
        <View style={{width: moderateScale(70)}}>
          {onPress ? <Appbar.BackAction onPress={onPress} color={'#fff'} /> : <Text />}
        </View>
        <Appbar.Content title={title} style={[styles.content, {width: width - moderateScale(140)}]}/>
        
        <View style={styles.functionGroup}>
          {
            action && (
              <View style={{position: 'relative'}}>
                <TouchableOpacity onPress={action} style={{marginRight: moderateScale(10)}}>
                  <Icon name={icon} size={moderateScale(24)} style={styles.iconAdd} />
                </TouchableOpacity>
                {/* { 
                  icon == 'ios-cart-outline' && 
                  <View style={styles.countCart}>
                    <Text style={styles.countCartText}>{listCart && listCart.findByArray.length}</Text>
                  </View>
                } */}
                
              </View>
            ) 
          }
          {
            functionIcon && (
              <TouchableOpacity onPress={functionAction}>
                <Icon name={functionIcon} size={moderateScale(26)} style={styles.iconAdd} />
              </TouchableOpacity>
            )
          }
        </View>
      </Appbar.Header>
    </View>
  );
};

export default Header;


import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale, width } from '../size'

export const styles = StyleSheet.create({
   newProHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: moderateScale(10),
      alignItems: 'center'
   },
   newProHeaderTitle: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   textBtn:{
      fontSize: moderateScale(14),
      color: setting.backgroundBlue
   },
   newProTitle: {
      fontSize: moderateScale(15),
      fontWeight: 'bold',
      color: '#444',
      marginLeft: moderateScale(10)
   },

   productItem:{
      margin: moderateScale(5),
      backgroundColor:'#fff',
      borderRadius: moderateScale(5),
   },
   productImage:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      resizeMode:'stretch',
      height: (width - moderateScale(0)) / 2,
      borderRadius: moderateScale(5),
   },
   productHeader: {
      position: 'relative'
   },
   productContent: {
      padding: moderateScale(5)
   },
   itemTitle: {
      width: moderateScale(170),
      fontSize: moderateScale(14),
      fontWeight: 'bold',
      color: '#444',
   },
   itemPrice: {
      fontSize: moderateScale(14),
      marginVertical: moderateScale(5)
   },
   priceValue:{
      fontWeight: 'bold',
      color: '#fd401d',
   },
   discount:{
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   discountText: {
      backgroundColor: '#3590de30',
      borderRadius: moderateScale(5),
      padding: moderateScale(3),
      fontSize:moderateScale(12),
      color: '#3590de'
   },
})
import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale, width } from '../size'


export const styles = StyleSheet.create({
  
   productImage:{
      width: (width - moderateScale(30)) / 2,
      height: (width - moderateScale(30)) / 2,
      borderTopRightRadius: moderateScale(10),
      borderTopLeftRadius: moderateScale(10)
   },
   productItem:{
      marginLeft: moderateScale(10),
      width : (width - moderateScale(30)) / 2,
      marginVertical: moderateScale(5),
      backgroundColor: '#fff',
      borderRadius: moderateScale(10),
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
   },
   productHeader: {
      position: 'relative'
   },
   bonus: {
      position: 'absolute',
		bottom: 0,
		backgroundColor: '#3590de',
		paddingHorizontal: moderateScale(10),
		borderTopRightRadius: moderateScale(40)
   },
   itemTitle: {
      fontSize: moderateScale(14),
      fontWeight: 'bold',
      color: '#444',
   },
   itemPrice: {
      fontSize: moderateScale(12),
      marginVertical: moderateScale(5)
   },
   priceValue:{
      fontWeight: 'bold',
      color: '#3590de'
   },
   discount:{
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   discountText: {
      backgroundColor: '#3590de30',
      borderRadius: moderateScale(5),
      padding: moderateScale(5),
      color: '#3590de',
      fontSize: moderateScale(12)
   },
})
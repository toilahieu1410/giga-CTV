import { StyleSheet } from 'react-native'
import { moderateScale } from '../size'

export const styles = StyleSheet.create({
   container:{
      marginVertical: moderateScale(10),
      paddingVertical: moderateScale(10)
   },
   header: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: moderateScale(10),
      marginBottom: moderateScale(10)
   },
   headerTitle: {
      fontSize: moderateScale(18),
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#444',
      marginLeft: moderateScale(10)
   }
})
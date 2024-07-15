import { StyleSheet } from 'react-native'
import { height, heightScale, moderateScale, width, widthScale } from '../size'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  imageBackground: {
    height: moderateScale(180),
    flexDirection: 'row',
    alignItems: 'flex-end', 
    justifyContent: 'center'
  },
  groupIcon: {
    paddingVertical: moderateScale(10)
  },
  groupList: {
    marginTop:moderateScale(10),
    backgroundColor:'#fff',
    width:width,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  iconBtn:{
    width: widthScale(72),
    height:heightScale(75),
    alignItems : 'center',
    marginTop: moderateScale(10),
    marginRight: moderateScale(7)
  },
  textBtn:{
    textAlign: 'center',
    color: '#444',
    marginTop: moderateScale(5),
    fontSize:moderateScale(12)
  },
  textUppercase: {
    fontSize:moderateScale(14),
    paddingLeft:moderateScale(10)
  }
})
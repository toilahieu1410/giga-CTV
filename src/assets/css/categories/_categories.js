import { StyleSheet } from "react-native"
import { moderateScale, width, height, widthScale, heightScale } from "../size"
import {setting} from '../setting'

export const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'relative'
  },
  listProduct: {
    flex:1,
    flexWrap: 'wrap',
  },
  textFilter: {
    fontWeight:'bold',
    paddingLeft:moderateScale(5)
  },
  selectHang: {
    width: widthScale(120),
    fontSize: moderateScale(10),
  },
  textSize: {
    fontSize: moderateScale(12)
  },
  filterSearch: {
  
  },
  filter: {
    flexDirection: 'row',
  },
  more: {
  
    height:50,
    padding: moderateScale(5),
    top:moderateScale(-2)
  },
  center: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    padding: moderateScale(5),
    color: '#004C8A',
    fontStyle: 'italic',
  }
})
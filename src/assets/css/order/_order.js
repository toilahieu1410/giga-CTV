import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { height, moderateScale, width } from '../size'

export const styles = StyleSheet.create({
  container: {
  },
  searchOrder:{
    padding: moderateScale(10),
    backgroundColor: '#fff',
  },
  searchInput:{
    borderWidth: 1,
    borderColor: '#ccc',
    width: width - moderateScale(60),
    paddingLeft: moderateScale(40),
    borderRadius: moderateScale(30),
    height: moderateScale(40),
    justifyContent: 'center'
  },
  iconSearch: {
    fontSize: moderateScale(24),
    color: '#888',
    position: 'absolute',
    left: moderateScale(10)
  },
  searchBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative'
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupOrder: {
    flexDirection: 'row',
  },
  itemOrder:{
    backgroundColor: '#fff',
    marginLeft: moderateScale(10),
    marginVertical: moderateScale(5),
    padding: moderateScale(15),
    borderRadius: moderateScale(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  shippingNameDraft: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: '#888888'
  },
  shippingNameDraft1: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: setting.backgroundWarning
  },
  shippingNameDraft2: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: '#32a885'
  },
  shippingNameDraft3: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: setting.backgroundBlue
  },
  shippingNameDraft4: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: setting.backgroundDanger
  },
  totalIcon: {
    marginTop: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageOrder: {
    width: moderateScale(60),
    height: moderateScale(70)
  },
  orderProductRight: {
    marginLeft: moderateScale(10)
  },
  nameProduct: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  showDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nameProduct1: {
    fontSize: setting.fontDefault - 2,
    color: setting.textColor,
    fontWeight: 'bold'
  },
  btnShowDetail: {
    backgroundColor: '#888888',
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnShowDetail1: {
    backgroundColor: setting.backgroundWarning,
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnShowDetail2: {
    backgroundColor: '#32a885',
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnShowDetail3: {
    backgroundColor: setting.backgroundBlue,
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnShowDetail4: {
    backgroundColor: setting.backgroundDanger,
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnShowDetailText: {
    color: '#fff',
    fontSize: setting.fontDefault
  },
  totalMoney: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cccccc70',
    marginTop: moderateScale(5),
    padding: moderateScale(5)
  },
  textOrder: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: setting.backgroundBlue,
  },
})
import { StyleSheet }  from 'react-native'
import { setting } from '../setting'
import { height, moderateScale, width } from '../size'

export const styles = StyleSheet.create({
  container: {},
  cart: {
    paddingBottom: moderateScale(90)
  },
  chooseProduct:{
    backgroundColor: '#fff',
    paddingBottom: moderateScale(10)
  },
  searchBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: moderateScale(10),
    marginHorizontal: moderateScale(10)
  },
  searchText: {
    fontSize: setting.fontDefault
  },
  listProductChosse: {
    // maxHeight: moderateScale(400)
  },
  chooseProductText:{
    padding: moderateScale(10),
    fontSize: setting.fontDefault + 2,
    fontWeight: 'bold',
    color: setting.backgroundBlue
  },
  //product
  itemProduct:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageProduct:{
    width: moderateScale(110),
    height: moderateScale(110)
  },
  nameProduct:{
    fontSize: setting.fontDefault + 2,
    color: setting.textColor,
    fontWeight: 'bold'
  },
  priceProduct: {
    fontSize: setting.fontDefault,
    marginTop: moderateScale(5)
  },
  priceProduct1: {
    fontSize: setting.fontDefault,
    color: '#3590de'
  },
  bill: {
    padding: moderateScale(10),
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  costProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: moderateScale(3)
  },
  textCodeProduct: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  valueCodeProduct: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: setting.textColor
  },
  totalMoney: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(5),
    backgroundColor: '#cccccc80',
    paddingVertical: moderateScale(10)
  },
  totalValue: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: setting.textColor,
    marginRight: moderateScale(10),
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    paddingRight: moderateScale(10)
  },
  moneyBonus: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: setting.backgroundBlue
  },
  //payment
  payment: {
    marginTop: moderateScale(10),
    backgroundColor: '#fff',
    padding: moderateScale(10),
    
  },
  paymentTitle: {
    textAlign: 'center',
    fontSize: setting.fontDefault + 2,
    fontWeight: 'bold',
    color: setting.backgroundBlue,
    marginBottom: moderateScale(10)
  },
  radioPayment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPayment: {
    fontSize: setting.fontDefault,
    marginRight: moderateScale(10),
    color: setting.textColor
  },
  textbonusPament: {
    color: setting.backgroundBlue
  },
// bonus

bonusBtn: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: moderateScale(10),
  marginVertical: moderateScale(10)
},
bonusText: {
  backgroundColor: '#cccccc80',
  width: '80%',
  padding: moderateScale(10),
  paddingLeft: moderateScale(20),
  borderRadius: moderateScale(10),
  fontSize: setting.fontDefault,
},

  //receiverInfo
  receiverInfo: {
    backgroundColor: '#fff',
    marginTop: moderateScale(10),
    padding: moderateScale(10)
  },
  chooseReceiver: {
    borderWidth: 1,
    borderRadius: moderateScale(30),
    borderColor: '#3590de',
    padding: moderateScale(10)
  },
  chooseReceiverText: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue
  },
  inputTextReceiver:{
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  inputReceiver: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: moderateScale(10),
    height: moderateScale(40),
    marginTop: moderateScale(10),
    paddingLeft: moderateScale(20)
  },
  groupInputReceiver: {
    marginVertical: moderateScale(5)
  },
  selectOption: {
  },
  pickerReceiver: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
  },
  //gift customer
  createOrder: {
    backgroundColor: '#fff',
    padding: moderateScale(10)
  },
  createBtn: {
    borderRadius: moderateScale(10),
    backgroundColor: '#3590de',
    padding: moderateScale(10),
    alignItems: 'center'
  },
  createText: {
    color: '#fff',
    fontSize: setting.fontDefault
  },
  //product choose 
  itemProductChoose: {
    flexDirection:'row',
    alignItems:'center',
  },
  imageProductChoose: {
    width: moderateScale(110),
    height: moderateScale(110)
  },
  productChooseRight: {
    marginLeft: moderateScale(10)
  },
  productChooseName: {
    fontSize: setting.fontDefault + 2,
    
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnClose: {
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    backgroundColor: setting.backgroundDanger,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(20)
  },
  btnIconClose: {
    fontSize: moderateScale(20),
    color: '#fff'
  },
  productChooseAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cccccc80',
    width: moderateScale(130),
  },
  minusBtn: {
    width: moderateScale(40),
    alignItems:'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(10)
  },
  textInputAmount: {
    width: moderateScale(50),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cccccc80',
    textAlign: 'center',
    color: '#444'
  },
  plusBtn: {
    width: moderateScale(40),
    paddingVertical: moderateScale(10),
    alignItems:'center',
    justifyContent: 'center',
  },
  productChooseNumber:{
    backgroundColor: '#fff',
    width: moderateScale(50),
    paddingVertical: moderateScale(10),
    textAlign: 'center'
  },
  productChoosePrice: {
    fontSize: setting.fontDefault + 2,
    color: setting.textColor,
    marginVertical: moderateScale(5)
  },
  productChoosePrice1: {
    color: setting.backgroundBlue
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: height - moderateScale(100)
  },
  modalView: {
    margin: moderateScale(20),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    padding: moderateScale(15),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width - moderateScale(60)
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(10)
  },
  fieldSearch: {
    position: 'relative'
  },
  iconSearch: {
    position: 'absolute',
    top: moderateScale(10),
    left: moderateScale(10)
  },
  searchInput: {
    width: width - moderateScale(130),
    height: moderateScale(40),
    borderRadius: moderateScale(30),
    backgroundColor: '#cccccc60',
    paddingLeft: moderateScale(35),
    marginRight: moderateScale(10)
  },
  modalText: {
    marginBottom: moderateScale(20),
    color: '#444',
    fontWeight: 'bold',
    fontSize: moderateScale(14)
  },
  textRed: {
    color: setting.backgroundDanger
  },
  nothingCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(500)
  }
})
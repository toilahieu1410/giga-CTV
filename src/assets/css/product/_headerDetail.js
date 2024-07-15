import { StyleSheet } from 'react-native'
import { moderateScale, width, height } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: { },
  header: {
    backgroundColor: '#fff'
  },
  slider: {
    position: 'relative'
  },
  itemSlide: { 
		width, 
		justifyContent: 'center' ,
	},
	imageSlide:{
		height: moderateScale(250),
	},
	pagination: {
    width: moderateScale(7),
    height: moderateScale(7),
  },
  bonusSlider: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    height: moderateScale(20),
    width: moderateScale(120),
    backgroundColor: '#3590de',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: moderateScale(40)
  },
  textBonusSlider: {
    color: '#fff'
  },
  headerContent: {
    padding: moderateScale(10),
    marginTop: moderateScale(10)
  },
  productName: {
    fontSize: setting.fontDefault + 6,
    fontWeight: 'bold',
    color: setting.textColor
  },
  costAndLike: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScale(15)
  },
  headerCost: {},
  headerCostText: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  headerCostValue: {
    fontSize: setting.fontDefault + 4,
    color: setting.backgroundBlue,
    fontWeight: 'bold',
  },
  headerVote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10)
  },
  headerVoteCount: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue,
  },
  btnLike: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#cccccc50', 
    paddingHorizontal: moderateScale(10), 
    borderRadius: moderateScale(10),
  },
  iconBtnLike: {
    fontSize: moderateScale(20),
    color: setting.backgroundDanger,
    marginRight: moderateScale(5)
  },
  btnLikeText: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue,
  },
  linkChiaSe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerLink: {
    fontSize: setting.fontDefault,
    color: setting.textColor,
    width: width - moderateScale(50),
  },
  headerLinkCopy: {
    textDecorationLine: 'underline',
    color: setting.backgroundBlue
  },
  linkCopyBtn: {
    padding: moderateScale(5),
    borderRadius: moderateScale(5)
  },
  linkCopyIcon: {
    fontSize: moderateScale(20),
    color: setting.backgroundBlue
  },
  btnPostSale: {
    marginTop: moderateScale(10),
    width: width - moderateScale(20),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    backgroundColor: setting.backgroundBlue

  },
  itemButton: {
    backgroundColor: setting.backgroundBlue
  },
  titleProduct: {
    fontWeight:'bold'
  },
  listChoose: {
    flexDirection:'row',
    flexWrap:'wrap',
    flexGrow: 1,
    flexShrink:1,
  },
  changeProduct: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  checkbox: {
    padding:moderateScale(5),
    alignItems:'center',
    flexDirection: 'row',
    width:moderateScale(7),
    height:moderateScale(7),
    backgroundColor: '#ececec',
  },
  changeButton: {
    minWidth:moderateScale(70),
    color:'#000',
    backgroundColor:'#fff',
    borderColor:'#ccc',
    borderWidth:2,
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:moderateScale(5),
    margin:moderateScale(5),
    marginLeft:0,
    padding:moderateScale(5)
    // justifyContent:'space-between'
  },
  changeButtonDisabled: {
    minWidth:moderateScale(70),
    backgroundColor:'#fff',
    borderColor:'#dedede',
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:moderateScale(5),
    margin:moderateScale(5),
    marginLeft:0,
    padding:moderateScale(5),
    borderWidth:2,
  },
  changeButtonActive: {
    minWidth:moderateScale(70),
    color:'#fff',
    backgroundColor:'#3590DE',
    borderColor:'#3590DE',
    borderWidth:2,
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:moderateScale(5),
    margin:moderateScale(5),
    marginLeft:0,
    padding:moderateScale(5)
    // justifyContent:'space-between'
  },
  textProduct: {
    color:'#fff',
    zIndex:9,
    textAlign:'left'
  },
  textProductBlack: {
    color:'#000',
    zIndex:9,
    textAlign:'left'
  },
  textProductDisabled: {
    color:'#bebebe',
    zIndex:9,
    textAlign:'left'
  },
  btnPostSaleText: {
    color: '#fff',
    fontSize: setting.fontDefault
  },
  btnDanger: {
    backgroundColor: 'red',
    width: (width - moderateScale(40)) /4,
    alignItems: 'center',
    paddingVertical: moderateScale(5),
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10)
  },
  iconBtnColor: {
    fontSize: setting.fontDefault + 8,
    color: '#fff'
  },
  textBtnColor: {
    color: '#fff'
  },
  // actionsheet
  postSaleTitle: {
    textAlign: 'center',
    fontSize: setting.fontDefault + 6,
    fontWeight: 'bold',
    color: setting.textColor
  },
  contentBtn: {
    borderWidth: 1,
    borderRadius: moderateScale(5),
    padding: moderateScale(7),
    width: moderateScale(100),
    alignItems: 'center',
    borderColor: setting.backgroundBlue
  },
  textContentBtn: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue
  },
  contentPost: {
    fontSize: setting.fontDefault,
    lineHeight: moderateScale(20),
    marginTop: moderateScale(15)
  },
  imagePost: {
    marginTop: moderateScale(30),
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: moderateScale(10)
  },
  btnDownImage: {
    borderWidth: 1,
    borderRadius: moderateScale(5),
    padding: moderateScale(7),
    width: moderateScale(120),
    alignItems: 'center',
    borderColor: setting.backgroundBlue,
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: moderateScale(20)
  },
  iconDownImage: {
    fontSize: setting.fontDefault + 6,
    color: setting.backgroundBlue
  },
  textDownBtn: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue
  },
  itemImageDown:{
    position: 'relative',
    marginRight: moderateScale(10)
  },
  imageItem: {
    width: moderateScale(120),
    height: moderateScale(120),
  },
  iconCheck: {
  },
  iconCheckImage: {
    position: 'absolute',
    bottom: moderateScale(5),
    right: moderateScale(5),
    height: moderateScale(17),
    width: moderateScale(17),
    textAlign: 'center',
    fontSize: setting.fontDefault + 4,
    color: setting.backgroundBlue,
  },
  bottomGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(20)
  },
  btnCacel: {
    width: (width - moderateScale(30)) / 2,
    backgroundColor: "#cccccc60",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    alignItems: 'center'
  },
  textBtnCacel: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  btnSave: {
    backgroundColor: setting.backgroundBlue,
    width: (width - moderateScale(30)) / 2,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginLeft: moderateScale(10),
    alignItems: 'center'
  },
  textBtnSave: {
    fontSize: setting.fontDefault,
    color: '#fff'
  },
})
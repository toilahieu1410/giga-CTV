import { StyleSheet } from 'react-native'
import { moderateScale, width, height, widthScale } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: { 
    flex: 1,
    position: 'relative'
  },
  productDetail: {
    paddingBottom: moderateScale(80),
  },
  middleDetail: {
  },
  bonus: {
    backgroundColor: '#fff', 
    marginTop: moderateScale(10), 
    padding: moderateScale(10)
  },
  contentDetails: {
    height: 'auto',
    overflowY: 'auto',
    position: 'relative'
  },
  buttonAction: {
    top:0,
    zIndex:99
  },
  buttonActionCollapse: {
    top:0,
    zIndex:99
  },
  textMore: {
    fontSize:moderateScale(14),
    marginTop:moderateScale(5),
    color:'#3590DE',
    textAlign:'center'
  },
  image: {
    width: (width - moderateScale(20)),
    height: moderateScale(350),
  },
  headerBonus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bonusText: {
    fontSize: setting.fontDefault + 2,
    color: setting.textColor,
    fontWeight: 'bold',
  },
  bonusBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bonusBtnText: {
    fontSize: setting.fontDefault, 
    color: setting.backgroundBlue
  },
  noActive: {
    borderRadius:20,
    backgroundColor: '#eee',
    color:'#555',
    paddingHorizontal:moderateScale(12),
    paddingVertical:moderateScale(5),
  },
  activeTab: {
    borderRadius:20,
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#fff',
    color: setting.backgroundBlue,
   
    paddingHorizontal:moderateScale(12),
    paddingVertical:moderateScale(5),
   
  },
  bonusBtnIcon: {
    fontSize: setting.fontDefault + 2, 
    color: setting.backgroundBlue
  },
  progressGroup: {
    marginTop: moderateScale(15)
  },
  headerProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progressText: {
    fontSize: setting.fontDefault,
    color: setting.textColor,
  },
  progress: {
    marginVertical: moderateScale(5),
    height: moderateScale(10),
    borderRadius: moderateScale(10)
  },
  progressValue: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue
  },
  shipCode: {
    backgroundColor: '#fff', 
    marginTop: moderateScale(10), 
    padding: moderateScale(10)
  },
  itemShipCode: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: moderateScale(5),

  },
  iconShip: {
    fontSize: setting.fontDefault + 10,
    color: setting.backgroundBlue
  },
  textShip: {
    marginLeft: moderateScale(10),
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  intro: {
    padding: moderateScale(10),
    marginTop: moderateScale(10),
    backgroundColor: '#fff'
  },
  question: {
    padding: moderateScale(10),
    marginTop: moderateScale(10),
    backgroundColor: '#fff'
  },
  titleQuestion: {
    fontSize: setting.fontDefault + 2,
    color: setting.textColor,
    fontWeight: 'bold',
  },
  contentParent: {
    alignItems:'center'
  },
  content: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    flex:1,
    borderWidth:0.5,
    borderColor:'#ccc',
    padding:1,
    borderRadius:20,
    backgroundColor:'#eee'
  },

  introText: {
    lineHeight: moderateScale(20),
    fontSize: setting.fontDefault,
    marginTop: moderateScale(10),
  },
  bottomGroup: {
    height: moderateScale(60),
    width: width, 
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    left: 0,
    flexDirection: 'row',
    alignItems:'center',
    elevation: 5,
  },

  btnWhite: {
    marginLeft: moderateScale(10),
    width: (width - moderateScale(40)) /4,
    alignItems: 'center'
  },
  iconBtnWhite: {
    fontSize: setting.fontDefault + 8,
  },
  textBtnWhite: {
  },
  
  bottomGroupR: {
    flexDirection: 'row',
    marginLeft: moderateScale(10)
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
  bounceIn: {
    width:20,
    height:20,
    backgroundColor:'red',
    borderRadius:50,
    position:'absolute',
    right:50
  },
  btnDark: {
    backgroundColor: setting.textColor,
    width: (width - moderateScale(40)) /4,
    alignItems: 'center',
    paddingVertical: moderateScale(5),
    borderTopRightRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10)
  },
  listQuestion: {
    backgroundColor:'red'
  },
  contentQuestion: {
    flexDirection:'row',
    
  },
  viewVote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(10)
  },
  headerVote: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  allVoteBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textVoteBtn: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue
  },
  iconVoteBtn: {
    fontSize: setting.fontDefault + 6,
    color: setting.backgroundBlue
  },
  // bonus detail
  postSaleTitle: {
    textAlign: 'center',
    fontSize: setting.fontDefault + 6,
    fontWeight: 'bold',
    color: setting.textColor
  },
  headerBonusDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  justifyContent: 'space-between'
  },
  progressBonus: {
    width: width - moderateScale(140),
    height: moderateScale(7),
    borderRadius: moderateScale(5)
  },
  crownPoint: {
    alignItems: 'center'
  },
  iconBonus: {
    width: moderateScale(40),
    height: moderateScale(40)
  },
  pointBonus: {
    fontSize: moderateScale(12),
    color: setting.backgroundBlue
  },
  pointBonusValue: {
    fontSize: moderateScale(10)
  },
  bonusValueTitle: {
    textAlign: 'center',
    fontSize: setting.fontDefault + 2,
    marginTop: moderateScale(20)
  },
  bonusValue: {
    fontSize: setting.fontDefault + 6,
    fontWeight: 'bold',
    color: setting.backgroundBlue,
    textAlign: 'center',
    marginTop: moderateScale(10)
  },
  bottomBtn: {
    alignItems: 'center',
    
  },
  btnCacel: {
    alignItems: 'center',
    borderWidth: 1,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    borderColor: setting.backgroundBlue,
    width: width - moderateScale(60),
    marginTop: moderateScale(20)
  },
  textBtnCacel: {
    textAlign: 'center',
    fontSize: setting.fontDefault,
    
  }
})
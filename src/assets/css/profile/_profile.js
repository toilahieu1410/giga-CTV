import { StyleSheet} from 'react-native'
import { setting } from '../setting'
import { moderateScale, width } from '../size'

export const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    backgroundColor: '#3590de',
    height: moderateScale(240),
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageProfile:{
    marginLeft: moderateScale(20),
    marginTop: moderateScale(-10),
    width: moderateScale(100),
    position: 'relative',
    height: moderateScale(100)
  },
  avatarProfile:{
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    borderWidth: 4,
    borderColor: '#fff'
  },
  editAvatar:{
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    bottom: moderateScale(3), 
    right: moderateScale(3),
    padding: moderateScale(3),
    backgroundColor: '#3590de',
    borderRadius: moderateScale(20)
  },
  baseInfo: {
    marginTop: moderateScale(-20),
    marginLeft: moderateScale(20)
  },
  nameUser: {
    color: '#fff',
    fontSize: setting.fontDefault + 6,
  },
  linkUser: {
    flexDirection: 'row',
    marginTop: moderateScale(5)
  },
  linkUserText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: setting.fontDefault,
    marginRight: moderateScale(10)
  }, 
  userPoint: {
    backgroundColor: '#fff',
    marginHorizontal: moderateScale(20),
    padding: moderateScale(20),
    alignItems: 'center',
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: moderateScale(-60),
    marginBottom: moderateScale(10)
  },
  surplus: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  surplusValue: {
    fontSize: setting.fontDefault + 4,
    fontWeight: 'bold',
    color: '#3590de',
    marginVertical: moderateScale(5)
  },
  groupHeaderBtn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnImport:{
    width: moderateScale(100),
    padding: moderateScale(10),
    borderWidth: 1,
    borderColor: '#3590de',
    borderRadius: moderateScale(5),
    alignItems:'center'
  },
  textBtnImport:{
    fontSize: setting.fontDefault,
    color: '#3590de'
  },
  btnUnImport:{
    width: moderateScale(100),
    padding: moderateScale(10),
    borderWidth: 1,
    borderColor: '#3590de',
    borderRadius: moderateScale(5),
    alignItems:'center',
    backgroundColor: '#3590de',
    marginLeft: moderateScale(20)
  },
  textBtnUnImport: {
    fontSize: setting.fontDefault,
    color: '#fff'
  }, 
  introCode: {
    backgroundColor: '#fff',
  },
  introCodeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(20)
  },
  coppyCodeBtn: {
    backgroundColor: '#cccccc80',
    height: moderateScale(40),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  editCodeBtn: {
    width: moderateScale(35),
    marginHorizontal: moderateScale(10),
    borderColor: '#3590de',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    height: moderateScale(35),
    alignItems: 'center',
    justifyContent: 'center'
  },
  shareCodeBtn: {
    width: moderateScale(35),
    height: moderateScale(35),
    backgroundColor: '#3590de',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
  },
  tutorialBtn:{
    paddingHorizontal: moderateScale(20),
    marginVertical: moderateScale(10)
  },
  tutorialBtnContent: {
    flexDirection:'row',
    alignItems: 'center'
  },
  tutorialText: {
    fontSize: setting.fontDefault,
    color: '#3590de',
    textDecorationLine: 'underline'
  },
  myWebsite: {
    backgroundColor: '#fff',
    marginTop: moderateScale(10),
    paddingTop: moderateScale(15) 
  },
  myWebsiteTitle: {
    paddingLeft: moderateScale(20),
    fontSize: setting.fontDefault + 2,
    color: setting.textColor,
    fontWeight: 'bold',
    paddingBottom: moderateScale(10)
  },
  itemLink:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15)
  },
  itemLinkIcon: {
    fontSize : moderateScale(20)
  },
  itemLinkText: {
    fontSize: setting.fontDefault,
    marginLeft: moderateScale(10),
    color: '#444'
  },
  itemLinkIconR: {
    fontSize : moderateScale(20),
    color: '#444'
  },
  infoManager: {
    backgroundColor: '#fff',
    marginTop: moderateScale(10)
  },
  logOut: {
    marginVertical: moderateScale(20),
  },
  logOutBtn: {
    backgroundColor: '#3590de',
    padding: moderateScale(10),
    alignItems: 'center',
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(10)
  },
  logOutText: {
    color: '#fff',
    fontSize: setting.fontDefault
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  button: {
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#3590de",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: moderateScale(20),
    color: '#444',
    fontWeight: 'bold',
    fontSize: moderateScale(14)
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc90',
    height: moderateScale(40),
    paddingLeft: moderateScale(15),
    borderRadius: moderateScale(5),
    marginVertical: moderateScale(5)
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(10)
  },
  modalTitle: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
  },
  btnClose: {
    backgroundColor: setting.backgroundDanger,
    borderRadius: moderateScale(5),
    padding: moderateScale(5)
  },
  iconClose: {
    color: '#fff',
    fontSize: setting.fontDefault
  }
})
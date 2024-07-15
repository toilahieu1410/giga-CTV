import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { height, moderateScale, width } from '../size'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirm: {
    backgroundColor: '#fff',
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    padding : moderateScale(15),
    margin: moderateScale(10),
    borderRadius: moderateScale(5),
    minHeight: height - moderateScale(75),
  },
  headerConfirm: {
    alignItems: 'center',
    marginBottom: moderateScale(20)
  },
  headerDraft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(20)
  },
  btnCancel: {
    backgroundColor: setting.backgroundDanger,
    padding: moderateScale(5),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnCancelText: {
    fontSize: setting.fontDefault,
    color: '#fff',
  },
  confirmTitle: {
    fontSize: setting.fontDefault + 4,
    color: setting.backgroundBlue,
    fontWeight: 'bold'
  },
  drafOrder: {
    backgroundColor: '#ccc', 
    padding: moderateScale(5),
    borderRadius: moderateScale(5)
  },
  nameReceiver: {
    fontSize: setting.fontDefault,
    // fontWeight: 'bold',
    color: setting.textColor,
    marginVertical: moderateScale(2)
  },
  nameReceiver1: {
    fontSize: setting.fontDefault,
    fontWeight: '500',
    color: setting.textColor
  },
  confirmRowTitle: {
    marginTop: moderateScale(5),
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: setting.textColor
  },
  itemProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(5),
    width: width - moderateScale(50)
  },
  imageProduct: {
    width: moderateScale(80),
    height: moderateScale(90)
  },
  productRight: {
    marginLeft: moderateScale(10),
    // alignItems: 'flex-end',
    width: width - moderateScale(140)
  },
  productName: {
    fontSize: setting.fontDefault,
    fontWeight: '700',
    color: setting.backgroundBlue,
    marginBottom: moderateScale(5)
  },
  productPrice: {
    fontSize: setting.fontDefault,
    color: setting.textColor,
  },
  productPrice1: {
    fontSize: setting.fontDefault,
    color: setting.textColor,
  },
  diviled: {
    height: 1,
    width: width - moderateScale(50),
    backgroundColor:"#ccc",
    marginVertical: moderateScale(5)
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(2)
  },
  confirmBtn: {
    backgroundColor: setting.backgroundBlue,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScale(5)
  },
  cancelBtn: {
    backgroundColor: setting.backgroundDanger,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  confirmBtnText: {
    color: '#fff',
    fontSize: setting.fontDefault
  },
  
  iconCopy: {
    fontSize: moderateScale(20), 
    marginLeft: moderateScale(10),
    color: setting.backgroundBlue
  },
  iconTitle: {
    fontSize: moderateScale(20), 
    color: setting.backgroundBlue
  },
  rowTitle: {
    fontSize: setting.fontDefault, 
    marginLeft: moderateScale(10),
    color: setting.textColor,
    fontWeight: 'bold'
  },
  statusOrder: {
    fontSize: setting.fontDefault, 
    color: setting.backgroundBlue,
  },
  addNoteBtn: {
    borderWidth: 1,
    borderColor: setting.backgroundBlue,
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScale(5)
  },
  addNoteBtnIcon: {
    fontSize: moderateScale(20), 
    color: setting.backgroundBlue,
  },
  addNoteBtnText: {
    color: setting.backgroundBlue,
    fontSize: setting.fontDefault,
    marginLeft: moderateScale(10)
  },
})
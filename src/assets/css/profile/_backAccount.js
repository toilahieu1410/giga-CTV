import { StyleSheet } from 'react-native'
import { moderateScale, width } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  pickerBank: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
  },
  bankAccount: {
    padding: moderateScale(10),
    paddingBottom: moderateScale(100)
  },
  bankName: {
    fontSize: setting.fontDefault,
    color: setting.textColor,
    marginTop: moderateScale(20)
  },
  bankInfo: {
    marginTop: moderateScale(20)
  },
  bankInfoRow: {
    marginVertical: moderateScale(10)
  },
  bankInfoTitle: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc90',
    height: moderateScale(40),
    paddingLeft: moderateScale(15),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(5)
  },
  sendCode: {
    flexDirection: 'row'
  },

  getCodeBtn: {
    width: moderateScale(70),
    height: moderateScale(40),
    marginLeft: moderateScale(10),
    backgroundColor: '#3590de',
    marginTop: moderateScale(5),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textGetCodeBtn: {
    fontSize: setting.fontDefault,
    color: '#fff'
  },
  btnSave: {
    backgroundColor: '#3590de',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(15)
  },
  textBtnSave: {
    fontSize: setting.fontDefault,
    color: '#fff'
  },

  // list location
  btnCity: {
    height: moderateScale(40),
    borderColor: '#3590de',
    borderWidth: 1,
    marginTop: moderateScale(5),
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    paddingLeft: moderateScale(20)
  },
  btnCityText: {
    color: setting.textColor,
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
    width: width - moderateScale(60),
    maxHeight: moderateScale(500)
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
    color: setting.textColor
  },
  btnClose: {
    backgroundColor: setting.backgroundDanger,
    borderRadius: moderateScale(5),
    padding: moderateScale(5)
  },
  iconClose: {
    color: '#fff',
    fontSize: setting.fontDefault
  },
  btnItemCity: {
    height: moderateScale(35),
    justifyContent: 'center',
    paddingLeft: moderateScale(10)
  },
  btnItemCityText: {
    color: setting.textColor,
    fontSize: setting.fontDefault
  }
}) 
import { StyleSheet } from 'react-native';
import { setting } from '../setting';
import { height, moderateScale, width } from '../size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  info: {
    alignItems: 'center'
  },
  infoRow: {
    flexDirection: 'row',
    width: width - moderateScale(20),
    alignItems: 'center',
    marginBottom: moderateScale(5),
    height: moderateScale(80),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  imageInfo: {
    width: moderateScale(45),
    height: moderateScale(45)
  },
  changeInfo: {
    width: width - moderateScale(85),
    paddingHorizontal: moderateScale(10),
    justifyContent: 'space-between',
    height: moderateScale(80),
    padding: moderateScale(15),
    
  },
  changeInfo1: {
    justifyContent: 'space-between',
    width: width - moderateScale(85),
    height: moderateScale(80),
    padding: moderateScale(15)
  },
  infoTitle: {
    fontSize: setting.fontDefault, 
    color: setting.textColor,
    fontWeight: 'bold'
  },
  infoContent: {
    fontSize: setting.fontDefault, 
  },
  textInput: {
    fontSize: setting.fontDefault, 
    color: setting.textColor
  },
  textInput1: {
    borderWidth: 1,
    borderRadius: moderateScale(5),
    borderColor: '#ccc',
    paddingLeft: moderateScale(10)
  },
  btnText: {
    color: '#fff',
    fontSize: setting.fontDefault
  },
  btnSave: {
    backgroundColor: '#3590de',
    width: width - moderateScale(40),
    marginTop: moderateScale(20),
    padding: moderateScale(15),
    borderRadius: moderateScale(10)
  },
  textBtnSave: {
    color: '#fff',
    fontSize: setting.fontDefault,
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  modalView: {
    margin: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    padding: moderateScale(30),
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#3590de',
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: moderateScale(15),
  },
  button: {
    padding: moderateScale(10),
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(20),
    width: moderateScale(100),
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
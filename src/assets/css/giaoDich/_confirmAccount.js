import { StyleSheet } from 'react-native'
import { moderateScale, width } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  confirm: {
    padding: moderateScale(10)
  },
  confirmHeader: {
    marginTop: moderateScale(10)
  },
  confirmTitle: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  confirmInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: setting.fontDefault
  },
  takePhoto: {
    marginTop: moderateScale(20),
    // marginVertical: moderateScale(5),
    width: width - moderateScale(20),
    flexDirection: 'row'
  },
  itemPhoto: {
    width: (width - moderateScale(40)) / 2,
    marginHorizontal: moderateScale(5),
  },
  itemPhotoTitle: {
    fontSize: setting.fontDefault,
    color: setting.textColor,
    height: moderateScale(40),
    textAlign: 'center'
  },
  frontImageBtn: {
    width: (width - moderateScale(40)) / 2,
    height: moderateScale(220),
  },
  frontImage: {
    width: (width - moderateScale(40)) / 2,
    height: moderateScale(220),
    marginTop: moderateScale(10)
  },
  btnConfirm: {
    backgroundColor: setting.backgroundBlue,
    padding: moderateScale(12),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    marginTop: moderateScale(40)
  },
  btnConfirmText: {
    color: '#fff',
    fontSize: setting.fontDefault + 2,
    fontWeight: 'bold'
  }
})
import { StyleSheet } from 'react-native'
import { height, moderateScale, width } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: {

  },
  notification: {
    height: height - moderateScale(35),
  },
  checkAllBtn: {
    height: moderateScale(30),
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20)
  },
  checkAllText: {
    fontSize: setting.fontDefault,
    color: setting.backgroundBlue
  },
  notifiBtn: {
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
  notifiImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    backgroundColor: '#fff',
    borderRadius: moderateScale(40),
  },
  notifiContent: {
    width: width - moderateScale(110),
    marginLeft: moderateScale(10),
  },
  notifiText: {
    width: width - moderateScale(110),
    fontSize: setting.fontDefault,
    color: '#333'
  },
  notifiCreate: {
    marginTop: moderateScale(10)
  }
})
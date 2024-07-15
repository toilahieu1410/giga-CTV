import { StyleSheet } from 'react-native'
import { height, moderateScale, width } from '../size'
import { setting } from '../setting'


export const styles = StyleSheet.create({
  napDiem: {
    paddingBottom: moderateScale(90)
  },
  cardImage: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: moderateScale(20)
  },
  backgroundmage: {
    width: width - moderateScale(20),
    height: moderateScale(180),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20)
  },
  imageStyle:{
    borderRadius: moderateScale(10)
  },
  poitTitle: {
    color: '#fff',
    fontSize: setting.fontDefault + 2, 
    fontWeight: '500',
  },
  pointValue: {
    color: '#fff',
    fontSize: setting.fontDefault + 8,
    fontWeight: '500',
    marginTop: moderateScale(10)
  },
  pointReceive: {
    color: '#fff',
    width: (width - moderateScale(60) )/2,
    marginTop: moderateScale(10)
  },
  giaoDich: {
    backgroundColor: '#fff',
    height: height - moderateScale(280),
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(10),
    padding: moderateScale(15),
    position: 'relative',
    alignItems: 'center',
    borderRadius: moderateScale(10)
  },
  giaoDichTitle: {
    fontSize: setting.fontDefault + 2,
    color: setting.textColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: moderateScale(10)
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: moderateScale(10),
    height: moderateScale(45),
    marginVertical: moderateScale(20),
    width: width - moderateScale(70),
    textAlign: 'center',
    fontSize: setting.fontDefault + 2
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    width: (width - moderateScale(60)) / 2
  },
  btnSave: {
    position: 'absolute',
    bottom: moderateScale(20),
    backgroundColor: '#3590de',
    width: width - moderateScale(60),
    padding: moderateScale(15),
    alignItems: 'center',
    borderRadius: moderateScale(10)
  },
  btnSaveText: {
    fontSize: setting.fontDefault,
    color: '#fff'
  }
})
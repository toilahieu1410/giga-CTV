import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale, width } from '../size'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listGT: {
    padding: moderateScale(10)
  },
  setDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - moderateScale(20)
  },
  pickDate: {
    width: (width - moderateScale(40))/ 2,
    marginHorizontal: moderateScale(5)
  },
  pickDateBtn: {
    borderWidth: 1,
    borderColor: '#3590de',
    borderRadius: moderateScale(10), 
    padding: moderateScale(10),
    alignItems: 'center',
    marginVertical: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  pickDateText: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  pickDateIcon: {
    fontSize: moderateScale(20),
    color: '#3590de',

  },
  listInvitee: {
    marginTop: moderateScale(10),
    paddingHorizontal: moderateScale(5)
  },
  listThead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  listTheadText: {
    fontSize: setting.fontDefault
  }
})
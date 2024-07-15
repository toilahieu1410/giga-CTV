import { StyleSheet } from 'react-native'
import { height, moderateScale, width } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listGroup:{
    height: height - moderateScale(34)
  },
  noGroup: {
    flex: 1,
    alignItems: 'center',
    marginTop: moderateScale(60)
  },
  noGroupText: {
    fontSize: setting.fontDefault + 2
  },
  noGroupBtn: {
    borderWidth: 2,
    borderColor: setting.backgroundBlue,
    padding: moderateScale(15),
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(20),
    width: width - moderateScale(60)
  },
  noGroupBtnText: {
    fontSize: setting.fontDefault + 2,
    color: setting.backgroundBlue,
    fontWeight: 'bold'
  },
  noInvite: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: width - moderateScale(40),
    alignItems: 'center'
  },
  noInviteText: {
    marginTop: moderateScale(20),
    fontSize: setting.fontDefault,
    textAlign: 'center'
  } 
})
import { StyleSheet, Platform } from 'react-native';
import { moderateScale, width } from '../size';
import { setting } from '../setting';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconAdd: {
    color: '#fff',
  },
  content: {
    alignItems: 'center',
    color: 'white',
    textAlign:'center',
  },
  header: {
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: Platform.OS === 'ios' ? 0 : 0.2,
    backgroundColor: setting.backgroundBlue,
    elevation: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 99,
    position: 'relative',
    height:moderateScale(40),
    marginTop: Platform.OS == 'ios' ? moderateScale(-10) : moderateScale(40)
  },
  menu:{
    flexDirection:'row',
    alignItems:"center"
  },
  menuItem:{
    marginLeft:moderateScale(5)
  },
  functionGroup:{
    width: moderateScale(70),  
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  countCart: {
    backgroundColor: setting.backgroundDanger,
    width: moderateScale(18),
    height: moderateScale(18),
    borderRadius: moderateScale(10),
    position: 'absolute',
    right: 0,
    top: moderateScale(-7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  countCartText: {
    color: '#fff',
    fontSize: moderateScale(10)
  }
}) 
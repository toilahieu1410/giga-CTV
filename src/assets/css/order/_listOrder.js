import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { height, moderateScale, width } from '../size'

export const styles = StyleSheet.create({
  container: {
  },
  searchOrder:{
    padding: moderateScale(10),
    backgroundColor: '#fff',
  },
  searchInput:{
    borderWidth: 1,
    borderColor: '#ccc',
    width: width - moderateScale(60),
    paddingLeft: moderateScale(40),
    borderRadius: moderateScale(30),
    height: moderateScale(40),
    justifyContent: 'center'
  },
  iconSearch: {
    fontSize: moderateScale(24),
    color: '#888',
    position: 'absolute',
    left: moderateScale(10)
  },
  searchBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative'
  },
  order: {
    height: height - moderateScale(10)
  },
  groupOrder: {
    flexDirection: 'row',
  },
  itemOrder:{
    backgroundColor: '#fff',
    marginLeft: moderateScale(10),
    marginTop: moderateScale(10),
    padding: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  totalIcon: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: '#3590de40',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40
  },
  checkIcon: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: '#db3f6040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40
  },
  dollarIcon: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: '#f8c70040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40
  },
  dollarCicleIcon: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: '#2dcc7040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40
  },
  imageOrder: {
    width: moderateScale(30),
    height: moderateScale(30)
  },
  textOrder: {
    marginVertical: moderateScale(10),
    fontSize: setting.fontDefault + 2,
    fontWeight: 'bold',

  },
  valueOrder: {
    color: '#171551',
    fontSize: setting.fontDefault + 2,
    fontWeight: 'bold',
  }
  
})
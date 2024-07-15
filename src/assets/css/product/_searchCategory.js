import { StyleSheet } from 'react-native'
import { moderateScale, width } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    paddingTop: moderateScale(40),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    paddingBottom: moderateScale(10)
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: moderateScale(40),
    borderColor: '#cccccc40',
    height: moderateScale(40),
    color: setting.backgroundBlue,
    backgroundColor: '#cccccc40',
    width: width - moderateScale(120),
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    padding: 0
  },
  backBtn: {
    width: moderateScale(40),
    alignItems: 'center'
  },
  backIcon: {
    fontSize: moderateScale(24)
  },
  cartBtn: {
    width: moderateScale(40),
    alignItems: 'center'
  },
  cartIcon: {
    fontSize: moderateScale(24)
  },
  flatlistItemCategory: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc' ,
    height: moderateScale(40),
  },
  itemCategoryBtn: {
    // width: moderateScale(80),
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    marginHorizontal: moderateScale(10)
  },
  iconItem: {
    fontSize: moderateScale(28)
  },
  itemCategoryText: {
    fontSize: setting.fontDefault,
    textAlign: 'center'
  },
  tabChildren: {

  }
})
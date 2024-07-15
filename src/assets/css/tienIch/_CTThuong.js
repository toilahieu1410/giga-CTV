import { StyleSheet } from 'react-native';
import { setting } from '../setting';
import { height, moderateScale } from '../size';

export const styles = StyleSheet.create({
  container: {

  },
  searchGroup: {
    backgroundColor: '#fff',
    padding: moderateScale(10),
    position: 'relative'
  },
  searchInput: {
    borderRadius: moderateScale(30),
    paddingLeft: moderateScale(40),
    height: moderateScale(45),
    backgroundColor: '#cccccc50'
  },
  iconSearch: {
    position: 'absolute',
    top: moderateScale(23),
    left: moderateScale(23)
  },
  listThuong: {
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    paddingBottom: moderateScale(90)
  },
  itemThuong: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(5)
  },
  itemThuongR: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(10)
  },
  imageThuong: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(10)
  },
  itemThuongL: {
    padding: moderateScale(15),
    backgroundColor: '#fff',
    height: moderateScale(100),
    justifyContent: 'space-between',
    borderRadius: moderateScale(10),
  },
  textItemThuong: {
    fontSize: setting.fontDefault,
    color: setting.textColor
  },
  chiTietThuong: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: moderateScale(10)
  },
  contentThuong: {
    backgroundColor: '#fff',
    marginHorizontal: moderateScale(10),
    padding: moderateScale(10),
    borderRadius: moderateScale(10)
  },
  content: {
    flexDirection: 'row',
    marginVertical: moderateScale(5)
  },
  contentIcon: {
    fontSize: moderateScale(20),
    color: '#3590de',
    width: moderateScale(40),
    textAlign: 'center'
  },
  contentR: {
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10)
  },
  contentRTitle: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: '#444'
  },
  contentRText: {
    fontSize: setting.fontDefault,
    marginTop: moderateScale(10)
  }
})
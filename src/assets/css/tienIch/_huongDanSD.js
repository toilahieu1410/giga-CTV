import { StyleSheet } from 'react-native';
import { setting } from '../setting';
import { moderateScale } from '../size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  huongDan: {
    paddingHorizontal: moderateScale(10)
  },
  itemHD: { },
  imageItem: {
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
  },
  itemTitle: {
    fontSize: setting.fontDefault,
    fontWeight: 'bold',
    color: '#444',
    padding: moderateScale(10),
    paddingVertical: moderateScale(15)
  },
  btnItem: {
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.85,
    shadowRadius: 4,
    elevation: 2,
  }
})
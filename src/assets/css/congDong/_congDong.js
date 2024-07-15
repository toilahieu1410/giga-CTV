import { StyleSheet } from 'react-native'
import { moderateScale } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarContainer: {
    backgroundColor: '#ffffff',
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  btnPostStatus: {
    backgroundColor: '#e6e6e6',
    width: moderateScale(280),
    height: moderateScale(35),
    justifyContent: 'center',
    borderRadius: moderateScale(50),
    paddingLeft: moderateScale(15)
  },
  postImagesContainer: {
    backgroundColor: '#ffffff',
    padding: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  postImages: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textImage: {
    fontSize: setting.fontDefault,
    marginLeft: moderateScale(5)
  },
  cardHeaderContainer: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10)
  },
  cardHeader: {
    padding: moderateScale(5),
    width: moderateScale(300),
    height: moderateScale(290),
    marginRight: moderateScale(10)
  },
  cardBodyContainer: {
    backgroundColor: setting.backgroundColor,
    padding: moderateScale(15),
    marginBottom: moderateScale(10)
  },
  cardBodyHeader: {
    flexDirection: 'row',
    marginBottom: moderateScale(10),
    alignItems: 'center'
  },
  cardBodyHeaderText: {
    marginLeft: moderateScale(7)
  },
  cardBodyHeaderTitle: {
    fontSize: setting.fontDefault + 2,
    fontWeight: '700'
  },
  cardBodyContent: {
    marginBottom: moderateScale(10)
  },
  cardBodyContentText: {
    fontSize: setting.fontDefault
  },
  cardBodyImagesContainer: {
    marginBottom: moderateScale(10)
  },
  cardBodyImages: {
    width: '100%',
    height: moderateScale(250)
  },
  cardBottom1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingBottom: moderateScale(10),
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  cardBottom1CountLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardBottom2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(10)
  },
  cardBodyBottomText: {
    fontSize: setting.fontDefault,
    marginLeft: moderateScale(5)
  }
})

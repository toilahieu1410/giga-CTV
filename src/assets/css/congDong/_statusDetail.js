import { StyleSheet } from 'react-native'
import { moderateScale } from '../size'
import { setting } from '../setting'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    shadowColor: '#000',
    flexDirection: 'row',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: Platform.OS === 'ios' ? 0 : 0.2,
    backgroundColor: setting.backgroundBlue,
    elevation: 1,
    zIndex: 99,
    position: 'relative',
    height:moderateScale(50),
    marginTop: Platform.OS == 'ios' ? moderateScale(-10) : moderateScale(40)
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailHeaderText: {
    marginLeft: moderateScale(10)
  },
  detailHeaderTitle: {
    fontSize: setting.fontDefault + 2,
    fontWeight: '700',
    color: '#f2f2f2'
  },
  detailHeaderDate: {
    color: '#f2f2f2'
  },
  bodyContainer: {
    marginTop: moderateScale(20),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  bodyContent: {
    marginBottom: moderateScale(10)
  },
  cardBodyContentText: {
    fontSize: setting.fontDefault,
    fontWeight: '500'
  },
  bodyImageContainer: {
    marginBottom: moderateScale(5)
  },
  bodyImage: {
    width: '100%',
    height: moderateScale(250)
  },
  bottom1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#ccc',
    borderBottomColor: '#ccc',
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10)
  },
  bottom1CountLike: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bodyBottomText: {
    marginLeft: moderateScale(5),
    fontSize: setting.fontDefault
  },
  bottom2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  commentContainer: {
    padding: moderateScale(10),
    marginTop: moderateScale(5),
    width: '100%',
  },
  avatarComment: {
    flexDirection: 'row',
    marginBottom: moderateScale(10)
  },
  comment: {
    backgroundColor: '#e6e6e6',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginBottom: moderateScale(5)
  },
  userComment: {
    fontSize: setting.fontDefault,
    fontWeight: '700',
    marginBottom: moderateScale(5)
  },
  textComment: {
    fontSize: setting.fontDefault
  },
  textCommentDate: {
    fontSize: setting.fontDefault,
    marginRight: moderateScale(30)
  },
  commentBottom: {
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: setting.backgroundColor,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    alignItems: 'center',
    padding: moderateScale(10)
  },
  inputComment: {
    width: '90%',
    height: moderateScale(45),
    borderRadius: moderateScale(50),
    borderTopEndRadius: moderateScale(50),
    borderTopLeftRadius: moderateScale(50)
  },
  btnSend: {
    marginLeft: moderateScale(5)
  }
})
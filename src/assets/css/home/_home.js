import { StyleSheet } from 'react-native'
import { moderateScale, width } from '../size'

export const styles = StyleSheet.create({
   container:{
      flex: 1,
      backgroundColor: '#00000005'
   },
	 background: {
		backgroundColor: '#fff',
		paddingBottom: moderateScale(10)
	 },
   header:{
		flexDirection: 'row',
		marginTop: moderateScale(40),
		paddingHorizontal: moderateScale(10),
		height: moderateScale(40),
		alignItems: 'center'
	},
	logo:{
		width: moderateScale(30), 
		height: moderateScale(30)
	},
	iconHeader:{
		fontSize: moderateScale(24),
		
	},
	iconBtn:{
		alignItems: 'center',
		width: moderateScale(30),
		marginLeft: moderateScale(10),
	},
	searchBtn:{
		marginLeft: moderateScale(10),
		borderWidth: 1,
		borderColor: '#bbb',
		width: width - moderateScale(140),
		paddingHorizontal: moderateScale(10),
		justifyContent: 'center',
		height: moderateScale(40),
		borderRadius: moderateScale(20)
	},
	searchContent:{
		flexDirection: 'row', 
		alignItems: 'center'
	},
	searchIcon: {
		fontSize: moderateScale(18),
		marginRight: moderateScale(10)
	},
	searchText:{
		fontSize: moderateScale(14),
		color: '#999'
	},
	tabTopBtn: {
		backgroundColor: '#3590de80',
		width: moderateScale(40),
		height: moderateScale(40),
		borderRadius: moderateScale(20),
		position:'absolute',
		alignItems: 'center',
		justifyContent:'center',
		bottom: moderateScale(30),
		right: moderateScale(20)
	},
	product: {
		marginTop: moderateScale(10)
	}
})
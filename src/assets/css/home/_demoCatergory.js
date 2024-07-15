import { StyleSheet } from "react-native"
import { moderateScale } from "../size"

export const styles = StyleSheet.create({
	container: {
		paddingVertical: moderateScale(10),
		backgroundColor: '#fff',
		justifyContent: 'center'
	},
	iconBtn:{
		width: moderateScale(70),
		marginHorizontal: moderateScale(5),
		alignItems: 'center',
	},
	imageBackgroud:{
		width: moderateScale(50),
		height: moderateScale(50),
		backgroundColor: '#3590de60',
		borderRadius: moderateScale(30),
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconImage:{
		width: moderateScale(40),
		height: moderateScale(40),
	},
	iconText:{
		textAlign: 'center',
		color: '#444',
		marginTop: moderateScale(5)
	}
})
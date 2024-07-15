import { StyleSheet } from "react-native"
import { setting } from "../setting"
import { moderateScale, width } from "../size"

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		paddingBottom: moderateScale(10)
	},
	brandHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: moderateScale(10),
		alignItems: 'center'

	},
	brandHeaderRight: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	textBtn:{
		fontSize: moderateScale(14),
		color: setting.backgroundBlue
	},
	brandTitle: {
		fontSize: moderateScale(18),
		textTransform: 'uppercase',
		fontWeight: 'bold',
		color: '#444',
		marginLeft: moderateScale(10)
	},
	listBrand:{
		paddingVertical: moderateScale(10)
	},
	itemBrand:{
		marginHorizontal: moderateScale(5)
	},
	imageBrand: {
		width: moderateScale(90), 
		height: moderateScale(50)
	},
	brandBanner:{
		width: width - moderateScale(20), 
		height: moderateScale(150),
		marginTop: 10,
		borderRadius: moderateScale(10),
	}
})
import { StyleSheet } from 'react-native'
import { setting } from '../setting'
import { moderateScale, width } from '../size'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
	discountHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: moderateScale(10),
		alignItems: 'center'
	},
	discountHeaderTitle: {
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
	productImage:{
		width: (width - moderateScale(60)) / 2,
		height: (width - moderateScale(60)) / 2,
	},
	productItem:{
		marginHorizontal: moderateScale(5)
	},
	productHeader: {
		position: 'relative'
	},
	discount: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#3590de',
		paddingHorizontal: moderateScale(10),
		borderTopRightRadius: moderateScale(40)
	},
	itemTitle: {
		fontSize: moderateScale(14),
		fontWeight: 'bold',
		color: '#444',
	},
	itemPrice: {
		fontSize: moderateScale(12),
		marginTop: moderateScale(5)
	},
	priceValue:{
		fontWeight: 'bold',
		color: '#444'
	}
})
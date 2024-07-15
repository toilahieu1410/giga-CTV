import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { moderateScale, width } from '../../assets/css/size'
import { checkImage } from '../../utilities/checkNumber'

const Carousel = (props) => {

	const { listBanner } = props

	return (
		<View style={styles.container}>
			{
				// <SwiperFlatList
				// 	autoplay
				// 	autoplayDelay={2000}
				// 	autoplayLoop
				// 	index={2}
				// 	paginationDefaultColor="#ccc"
				// 	paginationActiveColor="#048ad1"
					
				// 	paginationStyleItem={styles.pagination}
				// 	data={listBanner.title_banner}
				// 	renderItem={({ item }) => (
				// 		<View style={[styles.child]}>
				// 			<Image source={{uri: checkImage(item.image)}} style={styles.image} resizeMode='stretch' />
				// 		</View>
				// 	)}
				// />
			}
		</View>
	)
}
export default Carousel

const styles = StyleSheet.create({
  container: {
		flex: 1, 
		backgroundColor: 'white' 
	},
  child: { 
		width, 
		justifyContent: 'center' ,
		marginTop: moderateScale(10),
		paddingHorizontal: moderateScale(10)
	},
	image:{
		width: width - moderateScale(20),
		height: moderateScale(130),
		borderRadius: moderateScale(5)
	},
	pagination: {
    width: moderateScale(7),
    height: moderateScale(7),
		top:moderateScale(10)
  },
});
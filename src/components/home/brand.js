import React from 'react'
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../assets/css/home/_brand'
import { moderateScale } from '../../assets/css/size'
import { dataBrand } from '../../assets/datavirual/dataProduct'

const img = 'https://hoplongtech.com/uploads/slider/Delta-1070x440-02.png'

const Brand = () => {

	return (
		<View style={styles.container}>
			<View style={styles.brandHeader}>
				<View style={styles.brandHeaderRight}>
					<Icon name='pricetag-outline' size={moderateScale(20)} color="#3590de" />
					<Text style={styles.brandTitle}>Thương hiệu</Text>
				</View>
				<TouchableOpacity>
					<Text style={styles.textBtn}>Xem tất cả</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.listBrand}>
				<FlatList 
					data={dataBrand}
					keyExtractor = {item => item.id}
					horizontal
					showsHorizontalScrollIndicator = {false}
					renderItem = {({item, index}) => (
						<View style={styles.itemBrand}>
							<Image source={{uri: item.image}} style={styles.imageBrand} />
						</View>
					)}
				/>
			</View>
			<View style={{alignItems: 'center'}}>
				<Image 
					source={{uri: img}}
					style={styles.brandBanner} 
				/>
			</View>
		</View>
	)
}

export default Brand
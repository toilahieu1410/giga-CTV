import React from 'react'
import { FlatList, Text, TouchableOpacity, View} from 'react-native'
import { styles } from '../../assets/css/home/_newProduct'
import IconFound from 'react-native-vector-icons/Foundation'
import { moderateScale } from '../../assets/css/size'
import ItemProduct from './itemProduct'

const NewProduct = (props) => {

	const { navigation, item } = props

	return (
		<View style={styles.container}>
			<View style={styles.newProHeader}>
				<View style={styles.newProHeaderTitle}>
					<IconFound name='burst-new' size={moderateScale(22)} color="#f53400" />
					<Text style={styles.newProTitle}>{item.name}</Text>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate('Categories', {data: item})}>
					<Text style={styles.textBtn}>Xem tất cả </Text>
				</TouchableOpacity>
			</View>
			<View style={{paddingBottom: moderateScale(10)}}>
				<FlatList
					data={item.product}
					horizontal
					showsHorizontalScrollIndicator= {false}
					keyExtractor={(item) => item._id}
					renderItem = {({item}) => (
						<ItemProduct ele={item} navigation={navigation}/>
					)}
				/>
			</View>
		</View>
	)
}
export default NewProduct


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, TouchableOpacity, Text, FlatList,ScrollView } from 'react-native'
import { styles } from '../../assets/css/home/_mainCategory'
import { getCategory } from '../../redux/product/action'
import {SvgXml} from 'react-native-svg'

const MainCatergory = (props) => {

	const dispatch = useDispatch()
 	const { navigation } = props

 	const listCategory = useSelector(store => store.product.listCategory)

 	useEffect(() => {
		dispatch(getCategory())
 	}, [])

  return (
    <View style={styles.container}>
			<View style={styles.groupIcon}>
			<Text style={styles.textUppercase} >
				Danh mục nổi bật
			</Text>
				<View style={styles.groupList}>
				<ScrollView horizontal={true}>
				{/* <FlatList
					data={listCategory}
					numColumns={Math.ceil(listCategory.length / 2)}
					showsVerticalScrollIndicator={false}
					scrollEnabled
					showsHorizontalScrollIndicator={true}
					keyExtractor={(item) => item._id}
					renderItem={({item}) => (
						<TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('HuongDanSD')}>
							<SvgXml viewBox='0 0 100 90' width={75} height={50} xml={item.icon} style={styles.image}/>
							<Text style={styles.textBtn}>
								{item.name}
							</Text>
						</TouchableOpacity>
					)}
				/> */}
				</ScrollView>
				</View>
			</View>
    </View>
  )
}

export default MainCatergory
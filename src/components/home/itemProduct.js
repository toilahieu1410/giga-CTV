import React, { useState } from "react"
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { styles } from '../../assets/css/home/_newProduct'
import { moderateScale } from "../../assets/css/size"
import { checkImage, checkNumber } from "../../utilities/checkNumber"
import Icon from 'react-native-vector-icons/Ionicons'
import { postFavourite } from '../../redux/favourite/action'

const ItemProduct = (props) => {

  const dispatch = useDispatch()
  const { navigation, ele } = props

  const [like, setLike] = useState(false)

  const handleLike = () => {
		if(like == false) {
			const body = {
				categorySlug: ele.categorySlug,
				productId: ele._id,
				productSlug: ele.slug
			}
			dispatch(postFavourite(body))
			setLike(!like)
		} else {
			setLike(!like)
		}
	}

  return (
    <View style={styles.productItem}>
      <TouchableOpacity style={styles.productHeader} onPress={() => navigation.navigate('ProductDetail', { data: ele._id })}>
        <Image
          source={{ uri: checkImage(ele.thumb) }}
          style={styles.productImage}
        />
      </TouchableOpacity>
      <View style={styles.productContent}>
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { data: ele._id })}>
          <Text style={styles.itemTitle}>{ele.name}</Text>
        </TouchableOpacity>
        <Text style={styles.itemPrice}>
          Giá: <Text styles={styles.priceValue}>{ele.price <= 0 ? 'Liên hệ' : checkNumber(ele.price)}</Text>
        </Text>
        <View style={styles.discount}>
          <Text style={styles.discountText}>Hoa hồng: 10%</Text>
          <Text>{ }</Text>
          <TouchableOpacity>
            <Icon name={like ? 'ios-heart' : 'ios-heart-outline'} color={'#fd401d'} size={moderateScale(24)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ItemProduct
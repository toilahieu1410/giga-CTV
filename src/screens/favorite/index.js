import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  ScrollView, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity, 
  FlatList,
  Modal,
  Alert,
  Pressable,
  RefreshControl,
  Image
 } from 'react-native'
import Header from '../../components/layout/header.js'
import Icon from 'react-native-vector-icons/Ionicons'
import { moderateScale } from '../../assets/css/size'
import { styles } from '../../assets/css/favorite/_favorite'
import { wait } from '../../utilities/useToken.js'
import { deleteFavourite, getFavourite } from '../../redux/favourite/action'
import { checkImage, checkNumber } from '../../utilities/checkNumber.js'

const Favorite = ({navigation}) => {

  const dispatch = useDispatch()

  const listFavourite = useSelector((store) => store.favourite.listFavourite)

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(20)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const params = {
      page: page,
      perPage: perPage
    }
    dispatch(getFavourite(params))
  },[page, perPage, refresh])

  const onRefresh = useCallback(() => {
    setRefresh(true)
    wait(1000).then(() => setRefresh(false))
  })



  return (
    <View style={styles.container}>
      <Header 
        title='Sản phẩm yêu thích' 
        action = {() => navigation.navigate('Cart')}
        icon='ios-cart-outline'
      />
      <ScrollView 
        refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
        />}
      >
        <View>
          <View style={styles.searchProduct}>
            <TextInput 
              placeholder='Tìm sản phẩm'
              style={styles.searchInput}
            />
            <Icon name='ios-search-outline' style={styles.iconSearch} />
        
          </View>
          <View style={styles.listProduct}>
            <FlatList 
            initialNumToRender={1}
              data={listFavourite && listFavourite}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item._id}
              renderItem = {({item}) => (
                <ItemProduct 
                  id={item._id}
                  image={item.thumb}
                  discounts='7% -10%'
                  name={item.name}
                  price={item.price}
                  navigation={navigation}
                />
              )}
            />  
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Favorite

const ItemProduct = (props) => {
  const dispatch = useDispatch()

  const {id, image, discounts, name, price, navigation} = props

  const handleDeleteLike = () => { 
    dispatch(deleteFavourite(id))
	}

  return (
    <View style={styles.productItem}>
      <TouchableOpacity style={styles.productHeader} onPress={() => navigation.navigate('ProductDetail', {data: item._id})}>
        <Image source={{uri: checkImage(image)}} style={styles.productImage} />
        <View style={styles.bonus}>
          <Text style={{ color: '#fff', fontSize: moderateScale(12) }}>
            Thưởng thêm : 10%
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{padding: moderateScale(7)}}>
      <TouchableOpacity style={styles.productHeader} onPress={() => navigation.navigate('ProductDetail', {data: item._id})}>
      <Text style={styles.itemTitle}>{name}</Text>
        </TouchableOpacity>
 
        <Text style={styles.itemPrice}>
          Giá: <Text style={styles.priceValue}>{checkNumber(price)}</Text>
        </Text>
        <View style={styles.discount}>
          <Text style={styles.discountText}>Hoa hồng: {discounts}</Text>
          <TouchableOpacity onPress={() => handleDeleteLike()}>
            <Icon name={'ios-heart'} color={'#fd401d'} size = {moderateScale(24)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
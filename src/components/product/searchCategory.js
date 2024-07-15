import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  useWindowDimensions,
  Animated,
} from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { TabView,TabBar } from 'react-native-tab-view'
import ItemTab from './searchCategory/itemTab'
import { getSubCategory, getProduct } from '../../redux/product/action'
import { styles } from '../../assets/css/product/_searchCategory'
import { height, moderateScale, width } from '../../assets/css/size'

const SearchCategory = ({navigation, route}) => {
  const dispatch = useDispatch()

  const layout = useWindowDimensions();
  const itemCha = route.params.item
  const listSubCategory = useSelector((store) => store.product.listSubCategory)
  const listProduct = useSelector((store) => store.product.listProduct)

  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(1)
  const [type, setType] = useState('')
  const [idType, setIdType] = useState('')
  const [subIndex, setSubIndex] = useState(0)
  const [routes, setRoutes] = useState(null)
  const [subCategoryId, setSubCategoryId] = useState(itemCha.subCategory.length > 0 ? itemCha.subCategory[subIndex]._id : '')
  const [childrenId, setChildrenId] = useState(itemCha.subCategory.length> 0 ? itemCha.subCategory[0]._id : 0)
  
  useEffect(() => {
    if( listSubCategory && listSubCategory.chidrenCategories){
      setRoutes(
        listSubCategory.chidrenCategories.map((item) => ({ 
          key: item._id,
          title:item.name
        }))
      )
    }
  },[listSubCategory])

  useEffect(() => {
    if(itemCha.subCategory.length > 0){
      dispatch(getSubCategory(subCategoryId))
    }
  },[subCategoryId])

  useEffect(() => {
    if(routes && routes.length > 0 && childrenId != 'seemore'){
      setType('chidrenCategoryId')
      setIdType(routes[index].key)
    }
  },[index, routes, childrenId])

  useEffect(() => {
    if( childrenId == 'seemore'){
      setType('categoryId')
      setIdType(itemCha._id)
    }
  },[ childrenId])

  useEffect(() => {
    const params = {
      type: type,
      id: idType,
      page: page
    }
    dispatch(getProduct(params))
  },[ idType, page])

  const hangleChildren = (id, index) => {
    setSubCategoryId(id)
    setChildrenId(id)
  }

  const onSeeMore = () => {
    setChildrenId('seemore')
  }

  const renderScene = ({ route }) => {
    switch (route.key) {
      case route.key:
        return <ItemTab navigation={navigation} listProduct={listProduct && listProduct} />
      default:
        return null
    }
  }
  const renderTabBar = props => (
    <TabBar
      scrollEnabled={true}
      tabStyle={{
        width:width /3,
        height: moderateScale(60)
      }}
      labelStyle={{
        fontSize:moderateScale(12),
        textAlign: 'center'
      }}
      activeColor='#048ad1'
      inactiveColor='#444'
      {...props}
      indicatorStyle={{ backgroundColor: '#048ad1' }}
      style={{ 
        backgroundColor: 'white',
      }}
    />
  )

  return(
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Icon name='chevron-back' style={styles.backIcon} />
        </TouchableOpacity>
        <TextInput 
          placeholder='Tìm kiếm sản phẩm'
          placeholderTextColor={'#3590de'}
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.cartBtn}>
          <Icon name='ios-cart-outline' style={styles.cartIcon} />
        </TouchableOpacity>
      </View>
      <Animated.View style={styles.flatlistItemCategory}>
        <ScrollView horizontal>
        <FlatList
          data={itemCha.subCategory.length > 0 && itemCha.subCategory}
          keyExtractor={item => item._id}
          horizontal
          renderItem={({item, index}) => (
            <TouchableOpacity 
              style={styles.itemCategoryBtn}
              onPress={() => hangleChildren(item._id, index)}
            >
              <Text 
                numberOfLines={2} 
                style={[styles.itemCategoryText,{
                  color: item._id == childrenId ? '#3590de' : "#888"
                }]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View>
          <TouchableOpacity onPress={onSeeMore} style={styles.itemCategoryBtn}>
            <Text 
              numberOfLines={2} 
              style={[styles.itemCategoryText,{
                color: childrenId == 'seemore' ? '#3590de' : "#888"
              }]}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </Animated.View>
      <View style={styles.tabChildren}>
        <ScrollView>
          {
            routes && childrenId != 'seemore' && 
            <View style={{ height: height - moderateScale(85),  width:'100%',}} >
              <TabView
                style={{flexWrap:'nowrap',flexGrow: 1, flexBasis: 10 }}
                navigationState={{ index, routes }}
                renderTabBar={renderTabBar}
                renderScene={ renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
              />
            </View>
          }
          {
            childrenId == 'seemore' &&
            <View style={{ height: height - moderateScale(85),  width:'100%',}}>
              <ItemTab navigation={navigation} listProduct={listProduct && listProduct} />
            </View>
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default SearchCategory
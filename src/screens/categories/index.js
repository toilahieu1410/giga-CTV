import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { getProductByCategory, getSubCategory } from "../../redux/product/action"
import { styles } from "../../assets/css/categories/_categories"
import Header from "../../components/layout/header"
import ItemProduct from "../../components/home/itemProduct"
import { getProductHome } from "../../redux/home/action"
import { Picker } from '@react-native-picker/picker'
import { moderateScale } from "../../assets/css/size"

const Categories = ({ route, navigation }) => {

  const dispatch = useDispatch()
  const slug = route.params.data.slug
  const title = route.params.data.name

  const listProductCategory = useSelector(store => store.product.listProductCategory)
  const listSubCategory = useSelector(store => store.product.listSubCategory)


  const [page, setPage] = useState(1)
  const [perPage, setPerpage] = useState(10)
  const [filter, setFilter] = useState([])
  const [priceName, setPriceName] = useState(null)
  const [sort, setSort] = useState({ sort_order: 1 })
  const [hang, setHang] = useState('')
  const [listBrand, setListBrand] = useState(null)

  useEffect(() => {
    const params = {
      type: 'categorySlug',
      slug: slug,
      page: page,
      perPage: perPage,
      sort: sort,
    }
    dispatch(getProductByCategory(params, filter))
  }, [slug, perPage, filter])

  useEffect(() => {
    setPriceName(null)
    setSort({ sort_order: 1 })
    setListBrand(null)
  }, [slug])

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.goBack()}
        icon='ios-cart-outline'
        action={() => navigation.navigate('Cart')}
        title={title}
      />

      <View style={styles.filterSearch}>
        <Text style={styles.textFilter}>Lọc danh sách:</Text>
        {
          listProductCategory && (
            <FilterSearch
              brand={listProductCategory.brand}
              listBrand={listBrand}
              setListBrand={setListBrand}
              filter={filter}
              setFilter={setFilter}
            />
          )
        }

      </View>
      <ScrollView style={styles.listProduct} >
        <FlatList
          showsVerticalScrollIndicator={true}
          style={styles.listData}
          showsHorizontalScrollIndicator={false}
          data={listProductCategory.data}
          keyExtractor={(item) => item._id}
          // numColumns={2}
          renderItem={({ item, index }) => (
            <ItemProduct ele={item} index={index} navigation={navigation} />
          )}
        />
        {perPage != listProductCategory.data.length ? (<Text></Text>) : (
          <TouchableOpacity style={styles.more}>
            <Text onPress={() => setPerpage(perPage + 10)} style={styles.center}>Xem thêm</Text>
          </TouchableOpacity>
        )}
      </ScrollView>


    </View>
  )
}

export default Categories

const FilterSearch = (props) => {

  const { brand, listBrand, setListBrand, filter, setFilter } = props

  return (
    <View style={styles.filter}>
      <Brand brand={brand} listBrand={listBrand} setListBrand={setListBrand} filter={filter} setFilter={setFilter} />
      <Price setFilter={setFilter} />
      <Sort />
    </View>
  )
}
const Brand = (props) => {

  const { brand, listBrand, setListBrand, filter, setFilter } = props
  const onChange = (item) => {
    setFilter(old => [...old, { brand: item }])
    setListBrand(item)
  }

  const totalBrand = () => {
    const dataBrand = filter.filter(item => item == item['brand'])
    setFilter(dataBrand)
    setListBrand('Xem tất cả')
  }
  return (
    <View>
      <Picker
        mode={"dropdown"}
        iosHeader="Hãng"
        style={{ height: 50, width: moderateScale(120) }}
        selectedValue={listBrand}
        onValueChange={(itemValue) => onChange(itemValue)}
      >
        <Picker.Item label={'Hãng'} value="" style={styles.textSize} />
        {brand && brand.map(item => (
          <Picker.Item label={item} value={item} style={styles.textSize} />
        ))}
        <Picker.Item label={'Xem tất cả'} onPress={() => totalBrand()} style={styles.textSize} />
      </Picker>
    </View>
  )
}

const Price = (props) => {

  const [defaultPrice, setDefaultPrice] = useState('Xem tất cả');

  const [listPrice, setListPrice] = useState(
    [
      { name: 'Dưới 1 triệu', value: { price: { '$lte': 1000000 } } },
      { name: '1-5 triệu', value: { price: { '$gte': 1000000, '$lte': 5000000 } } },
      { name: '5-7 triệu', value: { price: { '$gte': 5000000, '$lte': 7000000 } } },
      { name: '7-10 triệu', value: { price: { '$gte': 7000000, '$lte': 10000000 } } },
      { name: 'Trên 10 triệu', value: { price: { '$lte': 10000000 } } },
      { name: 'Xem tất cả', value: { price: { '$gte': 0 } } },
    ]
  )

  const onChange = (item) => {
    setFilter()
  }

  return (
    <View>
      <Picker
        selectedValue={defaultPrice}
        style={{ height: 50, width: moderateScale(140) }}
        mode={"dropdown"}
        onValueChange={(itemValue) => setDefaultPrice(itemValue)}
      >
        <Picker.Item label={'Giá'} value="" style={styles.textSize} />
        {listPrice && listPrice.map(item => (
          <Picker.Item label={item.name} value={item.value} style={styles.textSize} />
        ))}
      </Picker>
    </View>
  )
}

const Sort = (props) => {

  const [defaultSort, setDefaultSort] = useState('Xem tất cả')
  const [listSort, setListSort] = useState(
    [
      { name: 'Giá thấp đến cao', value: { "price": 1 } },
      { name: 'Giá cao đến thấp', value: { "price": -1 } },
      { name: 'Mới cập nhật', value: { "createdAt": -1 } },
      { name: 'Sản phẩm cũ', value: { "createdAt": 1 } }
    ]
  )

  return (
    <View>
      <Picker
        selectedValue={defaultSort}
        style={{ height: 50, width: 180 }}
        mode={"dropdown"}
        onValueChange={(itemValue) => setDefaultSort(itemValue)}
      >
        <Picker.Item label={'Sắp xếp'} value="" style={styles.textSize} />
        {listSort && listSort.map(item => (
          <Picker.Item label={item.name} value={item.value} style={styles.textSize} />
        ))}

      </Picker>
    </View>
  )
}
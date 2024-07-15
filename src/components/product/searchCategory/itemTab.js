import React from 'react'
import { 
  View, 
  FlatList,
} from 'react-native'
// import ItemProduct from '../itemProduct'

const ItemTab = (props) => {
  
  const {navigation, listProduct} = props
  return (
    <View>
       <FlatList 
       initialNumToRender={1}
        data={listProduct}
        keyExtractor={item => item._id}
        numColumns={2}
        renderItem = {({item}) => (
          <ItemProduct 
            image={item.thumb}
            discounts='7% -10%'
            title={item.name}
            price={item.price_value}
            item={item}
            navigation={navigation}
          />
        )}
      /> 
    </View>
  )
}

export default ItemTab


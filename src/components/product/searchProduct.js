import React, { useState } from 'react'
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
 } from 'react-native'
import Header from '../layout/header'
import Icon from 'react-native-vector-icons/Ionicons'
import { moderateScale } from '../../assets/css/size'
import { styles } from '../../assets/css/product/_searchProduct'
// import ItemProduct from './itemProduct'
const img = 'https://hoplongtech.com/uploads/product/lucdk_abl1rpm24062.jpg'
const data = [0,1,2,3,4,5,6,7,8,9]

const SearchProduct = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Header 
        onPress = {() => navigation.goBack()}
        title='Danh sách sản phẩm' 
        action = {() => navigation.navigate('Cart')}
        icon='ios-cart-outline'
      />
        {/* <View style={styles.listProduct}>
          <FlatList 
            data={data}
            numColumns={2}
            renderItem = {({item, index}) => (
              <ItemProduct 
                image={img}
                discounts='7% -10%'
                title='S8FS-C05024'
                price='200,000 VND'
                navigation={navigation}
              />
            )}
            ListHeaderComponent= {() => (
              <View style={styles.searchProduct}>
                <TextInput 
                  placeholder='Tìm sản phẩm '
                  style={styles.searchInput}
                />
                <Icon name='ios-search-outline' style={styles.iconSearch} />
                <Modalfilter />
              </View>
            )}
          />  
        </View> */}
    </View>
  )
}

export default SearchProduct


const Modalfilter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Danh mục:</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name='filter' size={moderateScale(24)} color='#3590de' />
      </TouchableOpacity>
    </View>
  )
}
import React, { useState } from 'react'
import { 
  ScrollView, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Modal,
  Alert,
  Pressable,
 } from 'react-native'

import Header from '../layout/header'
import { styles } from '../../assets/css/profile/_lichSuGD'
import Icon from 'react-native-vector-icons/Ionicons'
import { moderateScale } from '../../assets/css/size'


const LichSuGD = ({navigation}) => {
  return(
    <View>
      <Header
        onPress={() => navigation.goBack()}
        title="Lịch sử giao dịch"
      />
      <ScrollView>
        <View style={styles.searchProduct}>
          <TextInput 
            placeholder='Tìm sản phẩm '
            style={styles.searchInput}
          />
          <Icon name='ios-search-outline' style={styles.iconSearch} />
          <Modalfilter />
        </View>
      </ScrollView>
    </View>
  )
}
export default LichSuGD

const Modalfilter = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
            <Text style={styles.modalText}>Lọc theo danh mục:</Text>
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
import React, { useEffect, useState } from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import { getCity, getDistrict, getWard } from '../../redux/profile/action'
import { styles } from '../../assets/css/profile/_backAccount'
import { width } from '../../assets/css/size'

export const GetListCity = (props) => {

  const {city, setCity, setCityId } = props

  const dispatch = useDispatch()

  const listCity = useSelector((store) => store.profile.listCity)

  const [visited, setVisited] = useState(false)

  useEffect(() => {
    dispatch(getCity())
  },[])  

  const handleCity = (item) => {
    setCity(item.Title)
    setCityId(item.ID)
    setVisited(!visited)
  }

  return (
    <View>
      <TouchableOpacity style={styles.btnCity} onPress={() => setVisited(!visited)}>
        <Text style={styles.btnCityText}>{city == '' ? 'Chọn tỉnh/ thành phố' : city}</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visited}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setVisited(!visited);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Chọn thành phố</Text>
                <TouchableOpacity onPress={() => setVisited(!visited)} style={styles.btnClose}>
                  <Icon name='ios-close' style={styles.iconClose} />
                </TouchableOpacity>
              </View>
              <FlatList 
                data={listCity.LtsItem}
                keyExtractor={item => item.ID}
                renderItem = {({item, index}) => (
                  index < 63 &&
                  <TouchableOpacity style={styles.btnItemCity} onPress={() => handleCity(item)}>
                    <Text style={styles.btnItemCityText}>{item.Title}</Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent = {() => <View style={{width: width, height: 0.5, backgroundColor: '#ccc'}} />}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export const GetListDistrict = (props) => {

  const {cityId, district, setDistrict, setDistrictId } = props

  const dispatch = useDispatch()

  const listDistrict = useSelector((store) => store.profile.listDistrict)

  const [visited, setVisited] = useState(false)

  useEffect(() => {
    dispatch(getDistrict(cityId))
  },[cityId])  

  const handleDistrict = (item) => {
    setDistrict(item.Title)
    setDistrictId(item.ID)
    setVisited(!visited)
  }
  
  return (
    <View>
      <TouchableOpacity 
        disabled={cityId == '' ? true : false} 
        style={[styles.btnCity, {backgroundColor: cityId == '' ? '#cccccc80' : '#fff'}]} 
        onPress={() => setVisited(!visited)}>
        <Text style={styles.btnCityText}>{district == '' ? 'Chọn quận/ huyện' : district}</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visited}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setVisited(!visited);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Chọn quận huyện</Text>
                <TouchableOpacity onPress={() => setVisited(!visited)} style={styles.btnClose}>
                  <Icon name='ios-close' style={styles.iconClose} />
                </TouchableOpacity>
              </View>
              <FlatList 
              initialNumToRender={1}
                data={listDistrict}
                keyExtractor={item => item.ID}
                renderItem = {({item}) => (
                  <TouchableOpacity style={styles.btnItemCity} onPress={() => handleDistrict(item)}>
                    <Text style={styles.btnItemCityText}>{item.Title}</Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent = {() => <View style={{width: width, height: 0.5, backgroundColor: '#ccc'}} />}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export const GetListWard = (props) => {

  const {districtId, ward, setWard } = props

  const dispatch = useDispatch()

  const listWard = useSelector((store) => store.profile.listWard)

  const [visited, setVisited] = useState(false)

  useEffect(() => {
    dispatch(getWard(districtId))
  },[districtId])  

  const handleCity = (item) => {
    setWard(item.Title)
    setVisited(!visited)
  }
  
  return (
    <View>
      <TouchableOpacity 
        disabled={districtId == '' ? true : false} 
        style={[styles.btnCity, {backgroundColor: districtId == '' ? '#cccccc80' : '#fff'}]} 
        onPress={() => setVisited(!visited)}>
        <Text style={styles.btnCityText}>{ward == '' ? 'Chọn xã/ phường' : ward}</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visited}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setVisited(!visited);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Chọn xã / phường</Text>
                <TouchableOpacity onPress={() => setVisited(!visited)} style={styles.btnClose}>
                  <Icon name='ios-close' style={styles.iconClose} />
                </TouchableOpacity>
              </View>
              
              <FlatList 
              initialNumToRender={1}
                data={listWard}
                keyExtractor={item => item.ID}
                renderItem = {({item, index}) => (
                  <TouchableOpacity style={styles.btnItemCity} onPress={() => handleCity(item)}>
                    <Text style={styles.btnItemCityText}>{item.Title}</Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent = {() => <View style={{width: width, height: 0.5, backgroundColor: '#ccc'}} />}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  )
}

import React, {useCallback, useEffect, useRef, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { 
  View, 
  Text, 
  StatusBar, 
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Carousel from "../../components/home/casousel"
import MainCatergory from "../../components/home/mainCatergory"
import NewProduct from "../../components/home/newProduct"
import TapTop from "../../components/layout/tabtop"
import logo from '../../assets/images/Logo-test.png'
import { styles } from "../../assets/css/home/_home"
import { wait } from "../../utilities/useToken"
import { getBanner, getProductHome } from "../../redux/home/action"

const Home = ({navigation}) => {

  const dispatch = useDispatch()
  const scrollRef = useRef()

  const listBanner = useSelector((store) => store.home.listBanner)
  const listProductHome = useSelector((store) => store.home.listProductHome)

  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
   dispatch(getBanner())
   dispatch(getProductHome())
  }, [refresh])

  const onRefresh = useCallback(() => {
    setRefresh(true)
    wait(1000).then(() => setRefresh(false))
  })

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <ScrollView  
        ref={scrollRef}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={onRefresh}
          />}
        >
        <View style={styles.background}>

          {/* header */}
          <View style={styles.header}>
            <TouchableOpacity>
              <Image source={logo} style={styles.logo}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchBtn} onPress = {() => navigation.navigate('SearchProduct')}>
              <View style={styles.searchContent}>
                <Icon style={styles.searchIcon} name='ios-search-outline' />
                <Text style={styles.searchText}>Tìm sản phẩm</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} onPress= {() => navigation.navigate('Notification')}>
              <Icon name='notifications-outline' color='#aaa' style={styles.iconHeader} />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.iconBtn} onPress = { () => navigation.navigate('Cart')}>
              <Icon name='ios-cart-outline' color='#aaa' style={styles.iconHeader}/>
            </TouchableOpacity>
          </View>

          {/* Carousel  */}
          <Carousel listBanner={listBanner}/>
        </View>
        
        <View>
          <MainCatergory navigation={navigation} refresh={refresh} />
          {/* <Brand /> */}
        </View>
        <View style={styles.product}>
           <FlatList

            data={listProductHome}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (
              <NewProduct navigation={navigation} item={item}/>
            )}
          /> 
        </View>
      </ScrollView>
      <TapTop scrollRef={scrollRef}/>
    </View>
  )
}

export default Home
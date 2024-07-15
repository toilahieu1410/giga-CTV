import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import HTML from 'react-native-render-html'
import { moderateScale, width } from '../../assets/css/size'
import { styles } from '../../assets/css/product/_porductDetail'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../layout/header'
import HeaderDetail from './productDetail/headerDetail'
import { getProductDetail } from '../../redux/product/action'
// import { postCart } from '../../redux/cart/action'
import { checkImage } from '../../utilities/checkNumber'
import { Card } from 'react-native-paper'
import { WebView } from 'react-native-webview'
import { FlatList } from 'react-native-gesture-handler'

const ProductDetail = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const id = route.params.data

  const productDetail = useSelector((store) => store.product.productDetail)

  const [activeTab, setActiveTab] = useState("tab1")
  const [showLess, setShowLess] = useState(false)

  const handleTab1 = () => {
    setActiveTab("tab1")
  }

  const handleTab2 = () => {
    setActiveTab("tab2")
  }

  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [])

  const handlePost = (id) => {
  }

  const moreButton = {
    display: '-webkit-box',
    WebkitLineClamp: 8,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    maxHeight: 400,

  }
  const tagsStyles = {
    h2: {
      marginHorizontal: 0,
      marginVertical: 0,
    },

    h3: {
      marginTop: 10,
      marginBottom: 0,
      marginHorizontal: 0
    },
    iframe: {
      display: 'none',
      height: 'aoto !important'
    },
    img: {
      paddingHorizontal: 10,
      width: (width - moderateScale(20)),
    },
    figure: {
      marginVertical: 0,
      paddingHorizontal: 10,
    },

    a: { pointerEvents: 'none' }
  }

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.goBack()}
        icon='ios-cart-outline'
        action={() => navigation.navigate('Cart')}
        title="Chi tiết sản phẩm"
      />
      <ScrollView>
        <View style={styles.productDetail}>
          {
            productDetail && (<HeaderDetail productDetail={productDetail} />)
          }
          <View style={styles.intro}>
            <View style={styles.contentParent}>
              <View style={styles.content}>
                <Text style={[activeTab === "tab1" ? (styles.activeTab) : (styles.noActive)]} onPress={handleTab1}>
                  Giới thiệu
                </Text>
                <Text style={[activeTab === "tab2" ? (styles.activeTab) : (styles.noActive)]} onPress={handleTab2}>
                  Thông số kỹ thuật
                </Text>
              </View>
            </View>

            {activeTab === "tab1" ? (
              <View style={styles.contentDetails}>
                <HTML baseStyle={!showLess ? moreButton : null} source={{ html: productDetail && productDetail.post }} tagsStyles={tagsStyles} />
                <View style={!showLess ? styles.buttonAction : styles.buttonActionCollapse}>
                  <TouchableOpacity onPress={() => setShowLess(!showLess)}>
                    <Text style={styles.textMore}>{!showLess ? 'Xem thêm' : 'Rút gọn'}</Text>
                  </TouchableOpacity>
                </View>
              </View>

            ) : (
              <View>
                <Image source={{ uri: checkImage(productDetail.thumb) }} style={styles.image} />
                <HTML source={{ html: productDetail && productDetail.thong_so_ky_thuat }} tagsStyles={tagsStyles} />
              </View>
            )}

          </View>
          <View style={styles.question}>
            <Text style={styles.titleQuestion}>Câu hỏi thường gặp</Text>
            <Card>
              <Card.Content>
              <FlatList 
                data={productDetail}
                renderItem={(item) => (
                  <ItemQuestion item={item.question}/>
                )}
              />
              </Card.Content>
            </Card>
          </View>
          <View style={styles.intro}>
            <Text style={styles.bonusText}>Đánh giá sản phẩm</Text>

            <View style={styles.viewVote}>
              <View style={styles.headerVote}>
                <Icon name='ios-star' size={moderateScale(14)} />
                <Icon name='ios-star' size={moderateScale(14)} />
                <Icon name='ios-star' size={moderateScale(14)} />
                <Icon name='ios-star' size={moderateScale(14)} />
                <Icon name='ios-star' size={moderateScale(14)} />
                <Text style={{
                  fontSize: moderateScale(14),
                  marginLeft: moderateScale(10)
                }}>{productDetail && productDetail.rate}</Text>
              </View>
              <TouchableOpacity style={styles.allVoteBtn}>
                <Text style={styles.textVoteBtn}>Xem tất cả</Text>
                <Icon name='ios-chevron-forward' style={styles.iconVoteBtn} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomGroup}>
        <TouchableOpacity
          style={styles.btnWhite}
          onPress={() => navigation.navigate('MainTab')}
        >
          <Icon name='ios-home-outline' style={styles.iconBtnWhite} />
          <Text style={styles.textBtnWhite}>Tìm sản phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnWhite}
          onPress={() => navigation.navigate('Cart')}
        >
          <Icon name='ios-cart-outline' style={styles.iconBtnWhite} />
          <Text style={styles.textBtnWhite}>Giỏ hàng</Text>
        </TouchableOpacity>
        <View style={styles.bottomGroupR}>
          <TouchableOpacity
            style={styles.btnDark}
            onPress={() => handlePost(productDetail._id)}
          >
            <Icon name='ios-cart-outline' style={styles.iconBtnColor} />
            <Text style={styles.textBtnColor}>Thêm hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default ProductDetail

const ItemQuestion = (props) => {

  const {item} = props

  const [showAnswer, setShowAnswer] = useState(true)

  const Linkify = ({text, pattern, formatter}) => {
    const __html = text.replace(pattern, formatter)

    return <WebView source={__html}/>
  }

  const text = item.answer
  const pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
  const formatter = str => `<a href="${str}" style="color:#3590de" target="_blank">${str}</a>`

  return (
    <View style={styles.listQuestion}>
      <View style={styles.contentQuestion}>
        <Icon name='question-circle-o' size={moderateScale(16)} color='#3590de' />
        <Text>{item}</Text>
      </View>
    </View>
  )
}
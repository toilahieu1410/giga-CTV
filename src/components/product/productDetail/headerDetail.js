import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../../assets/css/product/_headerDetail'
import { checkImage, checkNumber } from '../../../utilities/checkNumber'
import { env } from '../../../config/env'

const HeaderDetail = (props) => {

  const { productDetail } = props
  const [filter, setFilter] = useState(null)
  const [newItem, setNewItem] = useState([])

  useEffect(() => {
    const dataProduct = productDetail.vesion_detail && productDetail.vesion_detail.filter(item => item.stock != 0)
    if (dataProduct == undefined || dataProduct.length >= 0) {
      setFilter(productDetail.vesion_detail && productDetail.vesion_detail[0])
      setNewItem(dataProduct)
    } else {
      setNewItem(null)
      setFilter(null)
    }
  }, [productDetail])

  useEffect(() => {
    if (newItem) {
      setFilter(newItem[0])
    }
  }, [newItem])

  const onClickButton = (item) => {
    setFilter(item)
  }

  return (
    <View style={styles.header}>
      <View style={styles.slider}>
        <SwiperFlatList
          index={0}
          paginationDefaultColor="#ccc"
          paginationActiveColor="#048ad1"
          paginationStyleItem={styles.pagination}
          data={productDetail.images}
          renderItem={({ item }) => (
            <View style={[styles.itemSlide]}>
              <Image source={{ uri: checkImage(item) }} style={styles.imageSlide} resizeMode='contain' />
            </View>
          )}
        />
      </View>
      <View style={styles.headerContent}>
        <Text style={styles.productName}>
          {productDetail.name}
        </Text>
        <View style={styles.costAndLike}>
          <View style={styles.headerCost}>
            {
              filter ? (
                <Text style={styles.headerCostText}>
                  Giá bán <Text style={styles.headerCostValue}>{checkNumber(filter.price)}</Text>
                </Text>
              ) : (
                <Text style={styles.headerCostText}>
                  Giá bán <Text style={styles.headerCostValue}>Liên hệ</Text>
                </Text>
              )
            }
          </View>
          <TouchableOpacity style={styles.btnLike}>
            <Icon name='ios-heart-outline' style={styles.iconBtnLike} />
            <Text style={styles.btnLikeText}>
              Yêu thích
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chooseProduct}>
          <Text style={styles.titleProduct}>Lựa chọn phiên bản:</Text>
          <View style={styles.listChoose}>
            {(productDetail.vesion_detail && productDetail.vesion_detail.length) > 1 && (
              productDetail.vesion_detail.map((item) => (
                <ChangeVersion item={item} filter={filter} onClickButton={onClickButton}/>
              ))
            )}
          </View>
        </View>
        <View style={styles.linkChiaSe}>
          <Text style={styles.headerLink} numberOfLines={1}>
            Link sản phẩm : <Text style={styles.headerLinkCopy}>{`${env.DOMAIN_WEB}/${productDetail.categorySlug}/${productDetail.slug}`}</Text>
          </Text>
          <TouchableOpacity style={styles.linkCopyBtn}>
            <Icon name='copy-outline' style={styles.linkCopyIcon} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default HeaderDetail

const ChangeVersion = (props) => {

  const { item, filter, onClickButton } = props

  return (
    <View style={styles.changeProduct}>
      {
        filter != null && (
          item.stock == 0 ? (
            <TouchableOpacity style={styles.changeButtonDisabled} disabled>
                <Text style={styles.textProductDisabled}>{item.name}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={item.name == filter.name ? styles.changeButtonActive : styles.changeButton} onPress={() => onClickButton(item)}>
                <Text style={item.name == filter.name ? styles.textProduct:styles.textProductBlack}>{item.name}</Text>
            </TouchableOpacity>
          )
        )
      }
    </View>
  )
}
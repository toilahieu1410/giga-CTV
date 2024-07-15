import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { Card, Paragraph, Avatar } from 'react-native-paper'
import Header from '../../components/layout/header.js'
import Icon from 'react-native-vector-icons/Ionicons'
import { moderateScale } from '../../assets/css/size'
import { styles } from '../../assets/css/congDong/_congDong'

const avatar = 'https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg'
const banner = 'https://callstack.github.io/react-native-paper/screenshots/card-cover.png'
const dataArray = [0,1,2,3,4,5]

const CongDong = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Header
        title='Cộng đồng'
        action = {() => navigation.navigate('Cart')}
        icon='ios-cart-outline'
        />
      <View style={styles.avatarContainer}>
        <Avatar.Image 
          size={moderateScale(50)}
          source={{uri: avatar}}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('PostStatus')}
          style={styles.btnPostStatus}>
          <Text style={styles.textPostStatus}>Bạn đang nghĩ gì?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postImagesContainer}>
        <TouchableOpacity style={styles.postImages} onPress={() => navigation.navigate('PostStatus')}>
          <Icon name='ios-image' size={moderateScale(25)} color="#3590de" />
          <Text style={styles.textImage}>Ảnh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postImages} onPress={() => navigation.navigate('PostStatus')}>
          <Icon name='ios-logo-youtube' size={moderateScale(25)} color="#3590de" />
          <Text style={styles.textImage}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.postImages} onPress={() => navigation.navigate('PostStatus')}>
          <Icon name='md-folder-open' size={moderateScale(25)} color="#3590de" />
          <Text style={styles.textImage}>Sản phẩm</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardHeaderContainer}>
        <FlatList
        initialNumToRender={1}
          data={dataArray}
          key={item => item.id}
          horizontal={true}
          renderItem={(item) => (
            <CardHeader/>
          )}
          />
      </View>
      <View>
        <FlatList
        initialNumToRender={1}
          data={dataArray}
          key={item => item.id}
          renderItem={(item) => (
            <CardBody navigation={navigation}/>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default CongDong

const CardHeader = () => {
  return (
    <Card style={styles.cardHeader}>
      <Card.Title
        title="Giga Digital"
        subtitle="10/02/2022"
        left={() => <Avatar.Image size={50} source={{uri: avatar}} />}
      />
      <Card.Cover source={{ uri: banner }} />
      <Card.Content>
        <Paragraph>Bán gì cho dễ các bạn ơi?</Paragraph>
      </Card.Content>
    </Card>
  )
}

const CardBody = (props) => {

  const {navigation} = props

  const [countLike, setCountLike] = useState(550)
  const [statusLike, setStatusLike] = useState(false)

  const clickLike = () => {
    if(!statusLike) {
      setStatusLike(true)
    } else {
      setStatusLike(false)
    }
  }

  return (
    <View style={styles.cardBodyContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('StatusDetail')} style={styles.cardBodyHeader}>
        <Avatar.Image
          size={moderateScale(50)}
          source={{uri: avatar}}
        />
        <View style={styles.cardBodyHeaderText}>
          <Text style={styles.cardBodyHeaderTitle}>Giga Digital</Text>
          <Text>10/02/2022</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.cardBodyContent}>
        <Text style={styles.cardBodyContentText}>Những lưu ý khi dùng nước súc họng để đạt hiệu quả nhất. Súc họng/miệng ngày 2-3 lần vào
            sáng, tối sau khi đánh răng. Súc khi bị viêm họng, viêm amidan, ăn đồ tanh, hút thuốc lá, ...
        </Text>
      </View>
      <View style={styles.cardBodyImagesContainer}>
        <Image style={styles.cardBodyImages} source={{uri: banner}}/>
      </View>
      <View style={styles.cardBottom1}>
        <View style={styles.cardBottom1CountLike}>
          <Icon name='ios-heart-circle' size={25} color={'#ff0000'}/>
          {!statusLike ? (
              <Text style={styles.bodyBottomText}>{countLike}</Text>
            ) : (
              <Text style={styles.bodyBottomText}>Bạn và {countLike} người khác</Text>
            )}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('StatusDetail')}>
          <Text style={styles.cardBodyBottomText}>73 bình luận</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardBottom2}>
        <TouchableOpacity 
          style={styles.cardBottom1CountLike}
          onPress={() => clickLike()}>
          {statusLike ? (
            <Icon name='ios-heart-sharp' size={25} color={'#ff0000'}/>
          ) : (
            <Icon name='ios-heart-outline' size={25} color={'#999999'}/>
          )}
          <Text style={styles.cardBodyBottomText}>Thích</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StatusDetail')} style={styles.cardBottom1CountLike}>
          <Icon name='ios-chatbox-outline' size={25} color={'#999999'}/>
          <Text style={styles.cardBodyBottomText}>Bình luận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardBottom1CountLike}>
          <Icon name='ios-arrow-redo-outline' size={25} color={'#999999'}/>
          <Text style={styles.cardBodyBottomText}>Chia sẻ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
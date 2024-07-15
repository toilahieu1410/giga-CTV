import React, {useState} from "react"
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { Appbar, Card, Paragraph, Avatar, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { moderateScale, width } from '../../assets/css/size'
import { styles } from '../../assets/css/congDong/_statusDetail'

const avatar = 'https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg'
const banner = 'https://callstack.github.io/react-native-paper/screenshots/card-cover.png'
const dataComment = [
  {
    avatar: avatar,
    name: 'HopLongTech',
    comment: 'Sản phẩm siêu đẹp, chất lượng cao, luôn sẵn sàng ủng hộ shop. Cảm ơn shop đã mang đến những sản phẩm thiết thực như thế này'
  },
  {
    avatar: avatar,
    name: 'TruongAn',
    comment: 'Sản phẩm sử dụng rất tốt'
  },
  {
    avatar: avatar,
    name: 'GiGa Digital',
    comment: 'Chất lượng sản phẩm tuyệt vời, sẽ quay lại ủng hộ tiếp.'
  }
]

const StatusDetail = ({navigation}) => {

  const [inputComment, SetInputComment] = useState('')
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
    <View style={styles.container}>
    <ScrollView>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color={'#fff'} />
        <TouchableOpacity onPress={() => navigation.navigate('StatusDetail')} style={styles.detailHeader}>
          <Avatar.Image
            size={moderateScale(40)}
            source={{uri: avatar}}
          />
          <View style={styles.detailHeaderText}>
            <Text style={styles.detailHeaderTitle}>Giga Digital</Text>
            <Text style={styles.detailHeaderDate}>10/02/2022</Text>
          </View>
      </TouchableOpacity>
      </Appbar.Header>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyContent}>
          <Text style={styles.cardBodyContentText}>Những lưu ý khi dùng nước súc họng để đạt hiệu quả nhất. Súc họng/miệng ngày 2-3 lần vào
              sáng, tối sau khi đánh răng. Súc khi bị viêm họng, viêm amidan, ăn đồ tanh, hút thuốc lá, ...
          </Text>
        </View>
        <View style={styles.bodyImageContainer}>
          <Image style={styles.bodyImage} source={{uri: banner}}/>
        </View>
        <View style={styles.bottom1}>
          <TouchableOpacity 
            style={styles.bottom1CountLike}
            onPress={() => clickLike()}>
            {statusLike ? (
              <Icon name='ios-heart-sharp' size={25} color={'#ff0000'}/>
            ) : (
              <Icon name='ios-heart-outline' size={25} color={'#666666'}/>
            )}
            <Text style={styles.bodyBottomText}>Thích</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StatusDetail')} style={styles.bottom1CountLike}>
            <Icon name='ios-chatbox-outline' size={25} color={'#666666'}/>
            <Text style={styles.bodyBottomText}>Bình luận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottom1CountLike}>
            <Icon name='ios-arrow-redo-outline' size={25} color={'#666666'}/>
            <Text style={styles.bodyBottomText}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom2}>
          <View style={styles.bottom1CountLike}>
            <Icon name='ios-heart-circle' size={25} color={'#ff0000'}/>
            {!statusLike ? (
              <Text style={styles.bodyBottomText}>{countLike}</Text>
            ) : (
              <Text style={styles.bodyBottomText}>Bạn và {countLike} người khác</Text>
            )}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('StatusDetail')}>
            <Text style={styles.bodyBottomText}>73 bình luận</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <FlatList
        initialNumToRender={1}
          data={dataComment}
          key={item => item}
          renderItem={({item, index}) => (
            <Comment item={item}/>
          )}
        />
      </View>
    </ScrollView>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputComment}
        onChangeText={SetInputComment}
        value={inputComment}
        placeholder="Viết bình luận"/>
      <TouchableOpacity style={styles.btnSend}>
        <Icon name='ios-send' size={25} color={'#048ad1'}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default StatusDetail

const Comment = (props) => {

  const {item} = props

  return (
    <View style={styles.avatarComment}>
      <Avatar.Image
        size={moderateScale(45)}
        source={{uri: avatar}}
      />
      <View>
        <View style={styles.comment}>
          <Text style={styles.userComment}>{item.name}</Text>
          <Text style={styles.textComment}>{item.comment}</Text>
        </View>
        <View style={styles.commentBottom}>
          <Text style={styles.textCommentDate}>26 phút</Text>
          <Text style={styles.textComment}>Trả lời</Text>
        </View>
      </View>
    </View>
  )
}
import React, { useState } from 'react'
import { 
  Text, 
  View, 
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import Header from '../../components/layout/header'
import moment from 'moment'
import { dataNotification } from '../../assets/datavirual/datavirual'
import { styles } from '../../assets/css/notification/_notification'

const Notification = ({navigation}) => {
  const [listData , setListData] = useState(dataNotification)

  const onClickCheckAll = () => {
    setListData(
      dataNotification.map((item, index) => ({ 
      id: item.id,
      title:item.title,
      image:item.image,
      createAt:item.createAt,
      status:true}))
    )
  } 
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title='Thông báo' />
      <View style={styles.notification}>
        <TouchableOpacity 
          style={styles.checkAllBtn}
          onPress={onClickCheckAll}
        >
          <Text style={styles.checkAllText}>Xem tất cả</Text>
        </TouchableOpacity>
        <FlatList 
        initialNumToRender={1}
          keyExtractor={item => item.id}
          data={listData}
          renderItem={({item,index}) => (
            <TouchableOpacity 
              style={[styles.notifiBtn,{
                backgroundColor: item.status ? '#fff': '#e3f7ff'
              }]}
            >
              <Image source={{uri: item.image}} style={styles.notifiImage} />
              <View style={styles.notifiContent}>
                <Text style={styles.notifiText}>{item.title}</Text>
                <Text style={styles.notifiCreate}>{moment(item.createAt).format('DD/MM/YYYY  hh:mm')}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      
    </View>
  )
}

export default Notification
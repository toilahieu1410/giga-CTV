import React, { useState } from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import Header from '../layout/header'
import { styles } from '../../assets/css/giaoDich/_napDiem'
import { moderateScale, width } from '../../assets/css/size'

const img = 'https://img4.thuthuatphanmem.vn/uploads/2020/07/05/anh-background-cong-nghe-xanh_035953035.jpg'

const NapDiem = ({navigation}) => {

  const [checked, setChecked] = useState('first')

  return(
    <View>
      <Header 
        onPress={() => navigation.goBack()}
        title='Nạp điểm'
      />
      <ScrollView>
        <View style={styles.napDiem}>
          <View style={styles.cardImage}>
            <ImageBackground
              imageStyle={styles.imageStyle}
              source={{uri: img}}
              style={styles.backgroundmage}
              resizeMode="cover"
            >
              <View style={styles.pointHave}>
                <Text style={styles.poitTitle}>Số dư hiện tại</Text>
                <Text style={styles.pointValue}>10003</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                width: width - moderateScale(60),
              }}>
                <View style={styles.pointReceive}>
                  <Text style={styles.poitTitle}>Thưởng tạm tính</Text>
                  <Text style={styles.pointValue}>12403</Text>
                </View>
                <View style={styles.pointReceive}>
                  <Text style={styles.poitTitle}>Thưởng được nhận</Text>
                  <Text style={styles.pointValue}>1244</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.giaoDich}>
            <Text style={styles.giaoDichTitle}>Nhập số điểm cần nạp</Text>
            <View>
              <TextInput 
                style={styles.inputText}
                keyboardType='numeric'
              />
            </View>
            <View style={styles.payment}>
              <View style={styles.radioPayment}>
                <RadioButton
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}
                  color='#3590de'
                />
                <Text style={styles.textPayment}>
                  Thanh toán online
                </Text> 
              </View> 
              <View style={styles.radioPayment}>
                <RadioButton
                  status={ checked === 'second' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('second')}
                  color='#3590de'
                />
                <Text style={styles.textPayment}>
                  Chuyển khoản
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btnSave}>
              <Text  style={styles.btnSaveText}>
                Xác nhận 
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>
    </View>
  )
}
export default NapDiem
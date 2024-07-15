import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  ScrollView, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  Image, 
  Dimensions, 
  Alert,  
  Modal,
  TextInput
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import TabTop from '../../components/layout/tabtop'
import Loading from '../../components/layout/loading'
import message from '../../utilities/message'
import { dataProfile2, dataProfile3 } from '../../assets/datavirual/datavirual'
import {_checkPassword} from '../../apis/profile'
import { onlayout, showAlert, copyToClipboard, customShareMessage } from '../../utilities/function'
import { styles } from '../../assets/css/profile/_profile'
import { moderateScale } from '../../assets/css/size'
import { logOut } from '../../redux/auth/action'
import { getApiProfile } from '../../redux/profile/action'

const img = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'

const Profile = ({navigation}) => {

  const dispatch = useDispatch()

  const scrollRef = useRef()

  const profileName = useSelector((store) => store.profile.profileName)

  const [ widthLayout, setWidthLayout] = useState(Dimensions.get('screen').width)
  const [visited, setVisited] = useState(false)

  const confirmAccount = false

  useEffect(() => {
    dispatch(getApiProfile())
  }, [])

  const takePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      setImage(image.path)
    })
  }

  const LogOut = () => {
    showAlert(
      "Thông báo",
      "Bạn xác định muốn đăng xuất?",
      () => dispatch(logOut())
    )
  }

  return(
    <View style={{position: 'relative'}}>
      <ScrollView ref={scrollRef}>
        <View onLayout={() => onlayout(setWidthLayout)}>
          <View style={styles.header}>
            {
              !profileName ? (
                <Loading color='#ffffff'/>
              ) : (
                <View style={styles.imageProfile}>
                  <Image style={styles.avatarProfile} source={{uri: profileName.avatar ? profileName.avatar : img}}/>
                  <TouchableOpacity style={styles.editAvatar} onPress={takePhoto}>
                    <Icon name='pencil' size={moderateScale(14)} color="#fff" />
                  </TouchableOpacity>
                </View>
              )
            }
            <View style={styles.baseInfo}> 
              <Text style={styles.nameUser}>{profileName.name ? profileName.name: profileName.phone}</Text>
            </View>
          </View>
          <View style={styles.introCode}>
            <View style={[styles.userPoint,{width: widthLayout - moderateScale(40)}]}>
              <Text style={styles.surplus}>Số dư hiện tại</Text>
              <Text style={styles.surplusValue}>0</Text>
              <View style={styles.groupHeaderBtn}>
                <TouchableOpacity 
                  style={styles.btnImport}
                  onPress={() => navigation.navigate('NapDiem')}
                  disabled
                >
                  <Text style={styles.textBtnImport}>Nạp tiền</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.btnUnImport}
                  onPress={
                    !confirmAccount ? 
                    () => showAlert("Xác minh tài khoản","Bạn chưa xác minh tài khoản, mời xác minh tài khoản trước", () => navigation.navigate('ConfirmAccount'))
                    : 
                    (() => navigation.navigate('RutDiem'))}
                >
                  <Text style={styles.textBtnUnImport}>Rút tiền</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.introCodeBtn, {width: widthLayout - moderateScale(40)}]}>
              <TouchableOpacity 
                style={[styles.coppyCodeBtn, {width: widthLayout - moderateScale(130)}]}
                onPress={() => copyToClipboard(profileName && profileName.maGioiThieu)}>
                <Text>Mã giới thiệu: {profileName && profileName.maGioiThieu}</Text>
                <Icon name='copy-outline' size={moderateScale(18)} color='#3590de' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editCodeBtn}>
                <Icon name='pencil' size={moderateScale(20)} color='#3590de' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareCodeBtn} onPress={() => customShareMessage('Chia sẻ link tai app mới nhất đến với bạn bè')}>
                <Icon name='share-social-outline' size={moderateScale(20)} color='#fff'/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.tutorialBtn}>
              <TouchableOpacity 
                style={styles.tutorialBtnContent}
                onPress={() => navigation.navigate('HDNhanThuong')}
              >
                <Icon name='ios-gift-outline' color={'#3590de'} size={moderateScale(20)} />
                <Text style={styles.tutorialText}>Hướng dẫn giới thiệu nhận thưởng</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.infoManager}>
            <FlatList 
            initialNumToRender={1}
              keyExtractor={item => item.id}
              data={dataProfile2}
              renderItem = {({item, index}) => (
                <TouchableOpacity 
                  style={styles.itemLink} 
                  onPress={
                    item.modal ? () => setVisited(!visited) : 
                    () => navigation.navigate(item.link, {profileName: profileName})
                    }>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name={item.icon} style={styles.itemLinkIcon} color={item.colorIcon}/>
                    <Text style={styles.itemLinkText}>{item.title}</Text>
                  </View>
                  <Icon name='chevron-forward' style={styles.itemLinkIconR}  />
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={{width: widthLayout, height: 1, backgroundColor: '#ccc'}} />}
            />
          </View>
          <View style={styles.infoManager}>
            <FlatList 
            initialNumToRender={1}
              keyExtractor={item => item.id}
              data={dataProfile3}
              renderItem = {({item, index}) => (
                <TouchableOpacity style={styles.itemLink} onPress={() => navigation.navigate(item.link, {profileName: profileName})}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name={item.icon} style={styles.itemLinkIcon} color={item.colorIcon}/>
                    <Text style={styles.itemLinkText}>{item.title}</Text>
                  </View>
                  <Icon name='chevron-forward' style={styles.itemLinkIconR}  />
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={{width: widthLayout, height: 1, backgroundColor: '#ccc'}} />}
            />
          </View>
          <View style={styles.logOut}>
            <TouchableOpacity 
              style={[styles.logOutBtn, {width: widthLayout - moderateScale(40)}]}
              onPress={LogOut}
            >
              <Text style={styles.logOutText}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TabTop scrollRef={scrollRef} />
      {/* <ModalCheck visited={visited} setVisited={setVisited} navigation={navigation} profileName={profileName} /> */}
    </View>
  )
}

export default Profile

const ModalCheck = (props) => {

  const {visited, setVisited, navigation, profileName} = props
  
  const [password, setPassword] = useState("")

  const onCheckPass = async () => {
    const params = {
      password: password
    }
    await _checkPassword(params).then((res) => {
      if(res.status == 200) {
        navigation.navigate('BankAccount', {listProfile})
        setVisited(!visited)
      }
      else {
        message('Mật khẩu không đúng', 300)
      }
    })
  }

  return (
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
            <View style={styles.bankInfoRow}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Xác nhận mật khẩu</Text>
                <TouchableOpacity style={styles.btnClose} onPress={() => setVisited(!visited)}>
                  <Icon style={styles.iconClose} name='ios-close' />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.textInput}
                onChangeText={setPassword}
                value={password}
                placeholder='Xác nhận mật khẩu'
              />
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onCheckPass}
            >
              <Text style={styles.textStyle}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
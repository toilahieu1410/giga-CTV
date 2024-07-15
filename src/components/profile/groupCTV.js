import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  ScrollView,

} from 'react-native'
import Header from '../layout/header'
import { styles } from '../../assets/css/profile/_groupCTV'


const GroupCTV = ({navigation}) => {
  const listGroup = []
  return(
    <View style={styles.container}>
      <Header 
        onPress={() => navigation.goBack()}
        title='Đội nhóm'
      />
      <ScrollView>
        <View style={styles.listGroup}>
          {
            listGroup.length < 1 ? 
            <View style={styles.noGroup}>
              <Text style={styles.noGroupText}>Bạn chưa tham gia đội nhóm nào!</Text>
              <TouchableOpacity style={styles.noGroupBtn}>
                <Text style={styles.noGroupBtnText}>Tham gia ngay</Text>
              </TouchableOpacity>
              <View style={styles.noInvite}>
                <Text style={styles.noInviteText}>
                  Bạn chưa nhận được lời mời tham gia nhóm nào
                </Text>
              </View>
            </View>
            : 
            <View>

            </View>
          }
        </View>
      </ScrollView>
    </View>
  )
}
export default GroupCTV
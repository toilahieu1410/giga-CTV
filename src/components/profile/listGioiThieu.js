import React, { useState } from 'react'
import { 
  View,
  Text,
  ScrollView,
  TouchableOpacity,

 } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import Header from '../layout/header'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../../assets/css/profile/_listGioiThieu'
import moment from 'moment'

const ListGioiThieu = ({navigation}) => {

  const [startDateVisible, setStartDateVisibility] = useState(false);
  const [endDateVisible, setEndDateVisibility] = useState(false);

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const showStartDatePicker = () => {
    setStartDateVisibility(true);
  };
  const showEndDatePicker = () => {
    setEndDateVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDateVisibility(false);
  };
  const hideEndDatePicker = () => {
    setEndDateVisibility(false);
  };
  const handleConfirmStart = (date) => {
    setStartDate(date);
    hideStartDatePicker();
  };
  const handleConfirmEnd = (date) => {
    setEndDate(date);
    hideEndDatePicker();
  };
  return(
    <View style={styles.container}>
      <Header 
        onPress={() => navigation.goBack()}
        title='Danh sách giới thiệu'
      />
      <ScrollView>
        <View style={styles.listGT}>
          <View style={styles.setDate}>
            <View style={styles.pickDate}>
              <Text style={styles.pickDateText}>
                Thời gian bắt đầu
              </Text>
              <TouchableOpacity style={styles.pickDateBtn} onPress={showStartDatePicker}>
                <Text style={{color:'#444'}}>{moment(startDate).format('DD/MM/YYYY')}</Text>
                <Icon name='ios-calendar-outline' style={styles.pickDateIcon} />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={startDateVisible}
                mode="date"
                maximumDate={endDate}
                onConfirm={handleConfirmStart}
                onCancel={hideStartDatePicker}
              />
            </View>
            <View style={styles.pickDate}>
              <Text style={styles.pickDateText}>
                Thời gian kết thúc
              </Text>
              <TouchableOpacity style={styles.pickDateBtn} onPress={showEndDatePicker}>
                <Text style={{color:'#444'}}>{moment(endDate).format('DD/MM/YYYY')}</Text>
                <Icon name='ios-calendar-outline' style={styles.pickDateIcon}  />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={endDateVisible}
                mode="date"
                onConfirm={handleConfirmEnd}
                onCancel={hideEndDatePicker}
              />
            </View>
          </View>
          <View style={styles.listInvitee}>
            <View style={styles.listThead}>
              <Text style={styles.listTheadText}>Cộng tác viên</Text>
              <Text style={styles.listTheadText}>Hoa hồng</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ListGioiThieu
import React, { useEffect, useState } from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { DataTable } from 'react-native-paper'
import Header from '../layout/header'
import Icon from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import { styles } from '../../assets/css/profile/_saleReport'
import { moderateScale } from '../../assets/css/size'

const optionsPerPage = [1,2,3,4]
const dataBonus = [
  {
    id:1,
    name:'FAGHSD-2354',
    amount:100,
    bonus: 12000
  },
  {
    id:2,
    name:'FAGHSD-2354',
    amount:100,
    bonus: 12000
  },
  {
    id:3,
    name:'FAGHSD-2354',
    amount:100,
    bonus: 12000
  },
  {
    id:4,
    name:'FAGHSD-2354',
    amount:100,
    bonus: 12000
  },
]
const SaleReport = ({navigation}) => {

  const [startDateVisible, setStartDateVisibility] = useState(false);
  const [endDateVisible, setEndDateVisibility] = useState(false);

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);


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
        title='Báo cáo bán hàng'
      />
      <ScrollView>
        <View style={styles.listGT}>

          <View style={styles.setDate}>
            <View style={styles.pickDate}>
              <Text style={styles.pickDateText}>
                Từ ngày
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
                Đến ngày
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

          <View style={styles.totalOrder}>
            <View style={styles.itemTotalOrder}>
              <Text style={styles.totalTitle}>Tổng số đơn</Text>
              <Text style={styles.totalValue}>10</Text>
            </View>
            <View style={styles.itemTotalOrder}>
              <Text style={styles.totalTitle}>Tổng thưởng</Text>
              <Text style={styles.totalValue}>120,000</Text>
            </View>
          </View>

          <View style={styles.tableTotal}>
            <DataTable style={{paddingBottom:moderateScale(80)}}> 
              <DataTable.Header style={{backgroundColor:'#eee'}}>
                <DataTable.Title>
                  <Text style={styles.tableTitle}>Tên sản phẩm</Text>
                </DataTable.Title>
                <DataTable.Title>
                  <Text style={styles.tableTitle}>Số đơn</Text>
                </DataTable.Title>
                <DataTable.Title numeric>
                  <Text style={styles.tableTitle}>Thưởng</Text>
                </DataTable.Title>
              </DataTable.Header>
              <FlatList 
                data={dataBonus}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                  <DataTable.Row key={index} style={{backgroundColor:index % 2 == 0 ? '#fff':'#eee'}} >
                    <DataTable.Cell>
                      {item.name}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {item.amount}
                    </DataTable.Cell>
                    <DataTable.Cell numeric>
                      {item.bonus}
                    </DataTable.Cell>
                  </DataTable.Row>
                )}
              />
              <DataTable.Pagination
                page={page}
                numberOfPages={optionsPerPage.length}
                onPageChange={(page) => setPage(page)}
                label={ `${page+1} of ${optionsPerPage.length}`}
                optionsPerPage={optionsPerPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                showFastPagination
                optionsLabel={'Rows per page'}
              />
            </DataTable>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default SaleReport
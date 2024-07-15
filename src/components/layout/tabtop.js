import React from 'react'
import { 
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { moderateScale } from '../../assets/css/size'

const TapTop = (props) => {
  const { scrollRef } = props

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }
  return(
    <TouchableOpacity onPress={onPressTouch} style={styles.tabTopBtn}>
      <Icon name="chevron-up" size={moderateScale(20)} color={'#fff'}/>
    </TouchableOpacity>
  )
}
export default TapTop

const styles = StyleSheet.create({
  tabTopBtn: {
		backgroundColor: '#3590de80',
		width: moderateScale(40),
		height: moderateScale(40),
		borderRadius: moderateScale(20),
		position:'absolute',
		alignItems: 'center',
		justifyContent:'center',
		bottom: moderateScale(30),
		right: moderateScale(20)
	}
})
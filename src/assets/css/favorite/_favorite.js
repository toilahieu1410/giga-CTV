import { StyleSheet } from 'react-native'
import { height, moderateScale, width } from '../size'

export const styles = StyleSheet.create({
  container: {
  },
  searchProduct:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    backgroundColor: '#fff',
    position: 'relative'
  },
  searchInput:{
    borderWidth: 1,
    borderColor: '#ccc',
    width: width - moderateScale(60),
    paddingLeft: moderateScale(40),
    borderRadius: moderateScale(30),
    height: moderateScale(40)
  },
  iconSearch: {
    fontSize: moderateScale(24),
    color: '#888',
    position: 'absolute',
    left: moderateScale(20)
  },
  listProduct:{
    paddingBottom: moderateScale(80)
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: moderateScale(20),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    padding: moderateScale(15),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width - moderateScale(60)
  },
  button: {
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#3590de",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: moderateScale(20),
    color: '#444',
    fontWeight: 'bold',
    fontSize: moderateScale(14)
  },
  productImage:{
    width: (width - moderateScale(30)) / 2,
    height: (width - moderateScale(30)) / 2,
 },
  productItem:{
    marginLeft: moderateScale(10),
    width : (width - moderateScale(30)) / 2,
    marginVertical: moderateScale(5),
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  productHeader: {
    position: 'relative'
  },
  bonus: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#3590de',
    paddingHorizontal: moderateScale(7),
    borderTopRightRadius: moderateScale(40)
  },
  itemTitle: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#444',
  },
  itemPrice: {
    fontSize: moderateScale(12),
    marginVertical: moderateScale(5)
  },
  priceValue:{
    fontWeight: 'bold',
    color: '#3590de'
  },
  discount:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  discountText: {
    backgroundColor: '#3590de30',
    borderRadius: moderateScale(5),
    padding: moderateScale(5),
    color: '#3590de',
    fontSize: moderateScale(12)
  },
})
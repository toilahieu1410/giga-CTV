import { 
  Dimensions,
  Alert,
} from 'react-native'
import Clipboard from '@react-native-community/clipboard'
import { moderateScale } from '../assets/css/size'
import RNFetchBlob from "rn-fetch-blob"
import Share from 'react-native-share'
import message from './message'

export const onlayout = (setWidthLayout) => {
  const widthChange = Dimensions.get('screen').width
  const heightChange = Dimensions.get('screen').height
  if(widthChange < heightChange){
    setWidthLayout(Dimensions.get('screen').width)
  }
  else {
    setWidthLayout(widthChange - moderateScale(87))
  }
}

export const showAlert = (title, subTitle, action) => {
  Alert.alert(
    title,
    subTitle,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK", onPress: action }
    ]
  );
}

export const copyToClipboard = (text) => {
  Clipboard.setString(text);
  message('Coppy thành công', 201)
}

export const customShareImage = async (images) => {
  try {
    if (images) {
      let Pictures= images.map(item =>
        RNFetchBlob.config({
          fileCache: true
        })
          .fetch("GET", item)
          .then(resp => {
            let base64s= RNFetchBlob.fs
              .readFile(resp.data, "base64")
              .then(data => "data:image/jpeg;base64," + data);
            return base64s;
          })
      );
      Promise.all(Pictures).then(completed => {
        const options = {
          urls: completed
        };
        Share.open(options);
      });
    }
    
  } catch (err) {
    Alert.alert("Error, Permission denied", err);
  }
}

export const customShareMessage = async (message) => {
  const shareOption = {
    message: message,
  }
  try {
    const ShareResponse = Share.open(shareOption)
  }
  catch(error){
    console.log('a')
  }
}
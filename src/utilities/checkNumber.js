import { env } from "../config/env"

export const checkNumber = (data) => {
  const number = `${data.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.',)}₫`
  return number
}

export const checkImage = (image) => {
  if(image) {
    const check = image.indexOf('http')
    if(check == -1) {
      return `${env.REACT_APP_IMAGE}/image/${image}`
    } else {
      return image
    }
  }
}
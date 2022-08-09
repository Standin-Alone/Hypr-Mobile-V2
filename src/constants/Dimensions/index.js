import { Dimensions, PixelRatio } from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').width;    


const vw = (width)=>( (screenWidth / 100 ) * width);
const vh = (height)=>( (screenHeight / 100 ) * height)

const itemWidth = (screenWidth / 100 ) * 80;

const  normalize = (size, multiplier = 2) =>{
    const scale = (screenWidth / screenHeight) * multiplier;
  
    const newSize = size * scale;
  
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

export default {vw,vh,itemWidth,normalize};

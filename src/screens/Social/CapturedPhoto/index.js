import React from 'react';

import { View,Text,SafeAreaView} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';

export default class CapturedPhoto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        capturedImageBase4:this.props.route.params.image,
    
      };
    }

     
    setMyState = (value)=>this.setState(value)



    handleGoToCreatePost = ()=>{
        let parameter = {
            image:this.state.capturedImageBase4
        }
        this.props.navigation.navigate(constants.ScreenNames.Social.CREATE_POST,parameter);
    }
    
    renderItem = ({item,index})=>(
        <View  >
                <FastImage source={{uri:`data:image/jpeg;base64,${item}`}} 
                resizeMode={FastImage.resizeMode.cover}
                style={styles.image}/>
        </View>
    )


    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    onNext={this.handleGoToCreatePost}
                    showNextButton                               
                />      

           

        
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.capturedImageBase4}
                    renderItem={this.renderItem}
                    sliderWidth={constants.Dimensions.vw(100)}
                    itemWidth={constants.Dimensions.vw(100)}
                    lockScrollWhileSnapping={true}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    slideStyle={{flex:1}}
                />
              
            </>
        ) 
    }

}
  
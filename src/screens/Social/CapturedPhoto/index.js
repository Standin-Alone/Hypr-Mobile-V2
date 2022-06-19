import React from 'react';

import { View,Text,InteractionManager} from 'react-native';
import Components from '../../../components';
import { searchProducts} from '../../../actions/market';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

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
    


    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    onNext={this.handleGoToCreatePost}
                    showNextButton                               
                />      

                <FastImage source={{uri:`data:image/jpeg;base64,${this.state.capturedImageBase4}`}} 
                resizeMode={FastImage.resizeMode.cover}
                style={styles.image}/>
                         
            </>
        ) 
    }

}
  
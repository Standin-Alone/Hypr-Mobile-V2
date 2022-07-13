import React from 'react';

import { View,Text,SafeAreaView} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';

export default class ViewProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
        capturedImageBase4:this.props.route.params.image,
    
      };
    }

     
    setMyState = (value)=>this.setState(value)





    render(){
     
        return(
            <>
                <Components.PrimaryHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                                           
                />      

           

        
      
            </>
        ) 
    }

}
  
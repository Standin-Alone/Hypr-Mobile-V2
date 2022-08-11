import React from 'react';

import { View,Text,SafeAreaView} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import Carousel from 'react-native-snap-carousel';
import { createStory } from '../../../actions/social';
import { GET_SESSION } from '../../../utils/async_storage';

export default class Messenger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
    
      };
    }

     
    setMyState = (value)=>this.setState(value)

    componentDidMount(){
      
    }



    render(){
     
        return(
            <>
                <Components.MessengerHeader
                    onGoBack = {()=>this.props.navigation.goBack()}                                                        
                    onNext={this.state.addType == 'post' ? this.handleGoToCreatePost : this.handleCreateStory }
                    showNextButton                               
                />      

           

              
            </>
        ) 
    }

}
  
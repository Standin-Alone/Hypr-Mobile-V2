import React from 'react';

import { View,Text,InteractionManager} from 'react-native';
import Components from '../../../components';
import { searchProducts} from '../../../actions/market';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import constants from '../../../constants';
export default class CreatePost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
      
    
      };
    }

     
    setMyState = (value)=>this.setState(value)


    async componentDidMount(){          
 
    }   




    


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
  
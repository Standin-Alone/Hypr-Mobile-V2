import React from 'react';
import { View } from 'react-native';
import constants from '../../constants';
import { GET_SESSION } from '../../utils/async_storage';


export default class Authentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
      };
    }
    async componentDidMount(){
        let checkSession = await GET_SESSION('USER_ID');

        if(checkSession){
            this.props.navigation.replace(constants.ScreenNames.AppStack.HOME);
        }else{
            this.props.navigation.replace(constants.ScreenNames.AppStack.LOGIN);
        }
    }

    render(){
        return(
            <>
                <View>
                    
                </View>
            </>
        )
    }

}
  
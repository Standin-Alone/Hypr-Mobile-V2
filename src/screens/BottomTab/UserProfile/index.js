import React from 'react';
import { View } from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';


export default class UserProfile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
      };
    }

    render(){
        return(
            <>  
                <Components.ProfileHeader
                    goToProfileSettings={()=>this.props.navigation.navigate(constants.ScreenNames.Profile.ACCOUNT_SETTINGS)}
                />
            </>
        )
    }

}
  
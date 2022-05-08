import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Components from '../../../components';
import constants from '../../../constants';
import { styles } from './styles';


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

                <View style={styles.container}>
                    <View style={styles.myOrdersContainer}>
                        <Components.ButtonWithTopIcon
                            title="To Verify"
                            iconName={"user-check"}
                            onPress={()=>this.props.navigation.navigate(constants.ScreenNames.Profile.tracking.TO_VERIFY)}
                            
                        />
                        
                        <Components.ButtonWithTopIcon
                            title="To Ship"
                            iconName={"ship"}
                        />

                        <Components.ButtonWithTopIcon
                            title="To Receive"
                            iconName={"shipping-fast"}
                        />
                    </View>
                </View>
            </>
        )
    }

}
  
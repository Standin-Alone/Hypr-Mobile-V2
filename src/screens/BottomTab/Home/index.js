import React from 'react';
import { View,Text,Image,TouchableOpacity} from 'react-native';
import constants from '../../../constants';
import { styles } from './styles';


export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
      };
    }

    render(){
        return(
            <>
                <View style={styles.createPostContainer}>
                    <View style={styles.createPostInnerContainer}>
                        <Image source={{uri:'https://www.openhost.co.za/download/bootmin/img/avatar_lg.jpg'}} style={styles.profileImage}/>
                        <TouchableOpacity style={styles.createPostButton} onPress={()=>this.props.navigation.navigate(constants.ScreenNames.Social.CREATE_POST)}>
                            <View style={styles.createPostTextContainer}>
                                <Text>What's on your mind?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }

}
  
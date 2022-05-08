import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Components from '../../../components';
import constants from '../../../constants';


export default class AccountSettings extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
          buttons:[{
            name:'Address Book',
            icon:'location-on',
            navigateTo:constants.ScreenNames.Profile.ADDRESS_BOOK
          },{
            name:'Account Settings',
            icon:'location-on' 
          }]
      };
    }


    renderButtons = ({item,index}) =>{
        return (
            <Components.PrimaryButtonNoOutline
                title={item.name}
                showIcon={true}
                iconName={item.icon}
                iconSize={20}
                onPress={()=>this.props.navigation.navigate(item.navigateTo)}
            />

        )
    }
    render(){
        return(
            <>  
                <Components.PrimaryHeader
                    title={"Account Settings"}
                    onGoBack={()=>this.props.navigation.goBack()}
                />
                <FlatList
                    data={this.state.buttons}            
                    renderItem={this.renderButtons}
                /> 
               
            </>
        )
    }

}
  
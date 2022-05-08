import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Components from '../../../../components';
import constants from '../../../../constants';


export default class ToVerify extends React.Component {
    constructor(props) {
      super(props);
      this.state = {        
        orders:[]
      };
    }


    componentDidMount(){
        
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
                    title={"To Verify"}
                    onGoBack={()=>this.props.navigation.goBack()}
                />
                <FlatList
                    data={this.state.orders}            
                    renderItem={this.renderButtons}
                /> 
               
            </>
        )
    }

}
  
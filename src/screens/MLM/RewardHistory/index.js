import React from 'react';

import { View,Text,ActivityIndicator} from 'react-native';
import Components from '../../../components';
import constants from '../../../constants';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import { GET_SESSION } from '../../../utils/async_storage';
import { getRewardsHistory } from '../../../actions/mlm';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
export default class RewardHistory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
            rewardsHistory:[],
            isLoading:true
      };
    }

     
    setMyState = (value)=>this.setState(value)

    async componentDidMount(){
        let payload ={
            userId:await GET_SESSION('USER_ID')
        }

        getRewardsHistory(payload,this.setMyState,this.state)
    }

    renderHistory = ({item})=>{

        let cleanDate  = moment(item.date_created);
     
        return(
            <Components.RewardHistoryCard
                orderID={item.order_id}
                oldReward={item.old_reward}
                newReward={item.new_reward}
                dateCreated={cleanDate.format("LL")}
            />
        )

    }



    render(){
     
        return(
            <>
                <Components.PrimaryButtonNoOutline
                    onGoBack = {()=>this.props.navigation.goBack()}
                    title={'Reward History'}                                                                                                      
                />      

           
                  
                {this.state.isLoading ?
                        <ActivityIndicator animating={true} size="large" color={constants.Colors.primary} style={{top:constants.Dimensions.vh(70)}}/>
                        :
                        <FlatList
                            data={[...new Set(this.state.rewardsHistory)] }
                            extraData={this.state.rewardsHistory}
                            renderItem={this.renderHistory}
                            contentContainerStyle={{paddingBottom:constants.Dimensions.vh(100)}}
                        />
                        }   
        
              
            </>
        ) 
    }

}
  
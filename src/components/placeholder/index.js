
import React from "react";
import { View,TouchableOpacity,Text} from "react-native";
import { styles } from "./styles";
import constants from "../../constants";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";



export const FriendSkeletonHolder = ({
   
}) => {

    return (
        <SkeletonPlaceholder highlightColor={constants.Colors.primary}>

        <SkeletonPlaceholder.Item > 
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" left={5}>
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width={constants.Dimensions.vw(70)} height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={80}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>                      
    );
}



export const PostSkeletonHolder = ({
   
}) => {

    return (
      <View style={{marginVertical:constants.Dimensions.vh(5)}}>
          <SkeletonPlaceholder highlightColor={constants.Colors.primary} >
          <SkeletonPlaceholder.Item > 
          <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" left={5}>
            <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
            <SkeletonPlaceholder.Item marginLeft={20}>
              <SkeletonPlaceholder.Item width={constants.Dimensions.vw(70)} height={20} borderRadius={4} />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={80}
                height={20}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>                      
      </View>   
    );
}


export const UpdateProfileSkeletonHolder = ({
   
}) => {

    return (
      <View style={{marginVertical:constants.Dimensions.vh(5)}}>
          <SkeletonPlaceholder highlightColor={constants.Colors.primary} >
            <SkeletonPlaceholder.Item  alignContent="center">               
                <SkeletonPlaceholder.Item width={constants.Dimensions.vw(40)} height={constants.Dimensions.vh(40)} borderRadius={2000} alignSelf={"center"} alignItems={"center"} />                                                                                      
            </SkeletonPlaceholder.Item>                        
          </SkeletonPlaceholder>      
          <SkeletonPlaceholder highlightColor={constants.Colors.primary} >
            <SkeletonPlaceholder.Item top={constants.Dimensions.vh(2)} left={constants.Dimensions.vw(2)}>
              <SkeletonPlaceholder.Item width={constants.Dimensions.vw(90)} height={constants.Dimensions.vh(5)} borderRadius={50} marginVertical={constants.Dimensions.vh(2)}/>                    
              <SkeletonPlaceholder.Item width={constants.Dimensions.vw(50)} height={constants.Dimensions.vh(5)} borderRadius={50} marginVertical={constants.Dimensions.vh(2)}/>                    
              <SkeletonPlaceholder.Item width={constants.Dimensions.vw(40)} height={constants.Dimensions.vh(5)} borderRadius={50} marginVertical={constants.Dimensions.vh(2)}/>                    
              <SkeletonPlaceholder.Item width={constants.Dimensions.vw(10)} height={constants.Dimensions.vh(5)} borderRadius={50} marginVertical={constants.Dimensions.vh(2)}/>                    
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>                              
      </View>   
    );
}


export const UserProfileSkeletonHolder = ({
   
}) => {

    return (
      <View style={{marginVertical:constants.Dimensions.vh(5)}}>
           <SkeletonPlaceholder highlightColor={constants.Colors.primary}>
            <SkeletonPlaceholder.Item > 
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" left={5}>
              <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
              <SkeletonPlaceholder.Item marginLeft={20}>
                <SkeletonPlaceholder.Item width={constants.Dimensions.vw(70)} height={20} borderRadius={4} />
                <SkeletonPlaceholder.Item
                  marginTop={6}
                  width={80}
                  height={20}
                  borderRadius={4}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>       
            <SkeletonPlaceholder highlightColor={constants.Colors.primary} >
              <SkeletonPlaceholder.Item top={constants.Dimensions.vh(2)} left={constants.Dimensions.vw(2)} alignSelf="center">
                <SkeletonPlaceholder.Item width={constants.Dimensions.vw(80)} height={constants.Dimensions.vh(5)} borderRadius={50} marginVertical={constants.Dimensions.vh(2)}/>                                    
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>                        
            <SkeletonPlaceholder highlightColor={constants.Colors.primary} >
              <SkeletonPlaceholder.Item top={constants.Dimensions.vh(2)} left={constants.Dimensions.vw(2)} alignSelf="center">
                <SkeletonPlaceholder.Item width={constants.Dimensions.vw(80)} height={constants.Dimensions.vh(5)} borderRadius={50} marginVertical={constants.Dimensions.vh(2)}/>                                    
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>                        
      </View>   
    );
}
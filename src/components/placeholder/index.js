
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
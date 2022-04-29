
import AsyncStorage from '@react-native-async-storage/async-storage';
const SET_SESSION = async (
    name,
    data
)=>{

    try {
        let setSession = await AsyncStorage.setItem(name, data)

        console.warn(setSession)
      } catch (e) {
        // saving error
        console.warn(e);
      }

    return true;
}   


const GET_SESSION = async (
name    
)=>{
    try {

        const value = await AsyncStorage.getItem(name);        
         
        return value;
        
      } catch (e) {
        // saving error
        console.warn(e);
      }    
}   


export {SET_SESSION,GET_SESSION};
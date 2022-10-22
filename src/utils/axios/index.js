import axios from "axios";



const POST = async (
    url,
    data,
    headers
)=>{
    
    const result = await axios.post(url,data,headers);
    return result;
}   


const GET = async (
url,data  
)=>{
    const result = await axios.get(url,data);

    return result;
}   


export {POST,GET};
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
url    
)=>{
    const result = await axios.get(url);

    return result;
}   


export {POST,GET};
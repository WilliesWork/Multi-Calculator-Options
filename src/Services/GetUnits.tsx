import axios from "axios";
import { BASE_URL } from "../Common/AppUrl";

export const getUnits = async () => {
    try{
    const {data} = await axios.get('http://165.56.32.222/api/calculator/units')
    const {statusCode, statusDescription, message } = data

    if (statusCode === 100) {
        return {
            success: statusDescription, payload: message
        }
    }

    if (statusCode === 102){
        return {
            success: statusDescription,
            payload: message
        }
    }
    throw new Error('===> Thrown New Errow')

}catch(err){
    return {
        success: false,
        payload: 'Unexpected Error'
    }
}
}
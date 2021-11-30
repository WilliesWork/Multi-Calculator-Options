import { axiosInstance, mathRoute } from "../axiosInstance";
import { leastCommonMultipleCalculator } from '../../objectData/objectData'

export async function leastCommonMultipleCalculatorService(dataObject:any, methodName:any){
    const postData = leastCommonMultipleCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            return data.message.leastCommonMultipe
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

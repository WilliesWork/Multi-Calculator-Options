import { axiosInstance, mathRoute } from "../axiosInstance";
import { logCalculator } from '../../objectData/objectData'

export async function logCalculatorService(dataObject:any, methodName:any){
    const postData = logCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.answer
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

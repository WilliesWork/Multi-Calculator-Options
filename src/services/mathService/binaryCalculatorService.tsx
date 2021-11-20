import { axiosInstance, mathRoute } from "../axiosInstance";
import { binaryCalculator } from '../../objectData/objectData'

export async function binaryCalculatorService(dataObject:any, methodName:any){
    const postData = binaryCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

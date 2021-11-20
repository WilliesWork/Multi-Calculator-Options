import { axiosInstance, mathRoute } from "../axiosInstance";
import { averageCalculator } from '../../objectData/objectData'

export async function averageCalculatorService(dataObject:any, methodName:any){
    const postData = averageCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.average
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

import { axiosInstance, mathRoute } from "../axiosInstance";
import { statisticsCalculator } from '../../objectData/objectData'

export async function statisticsCalculatorService(dataObject:any, methodName:any){
    const postData = statisticsCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        if(msg === "success"){
            console.log(data.message.mean)
            return data.message.mean
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

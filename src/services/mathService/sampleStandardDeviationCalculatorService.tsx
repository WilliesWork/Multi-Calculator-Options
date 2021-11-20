import { axiosInstance, mathRoute } from "../axiosInstance";
import { sampleStandardDeviationCalculator } from '../../objectData/objectData'

export async function sampleStandardDeviationCalculatorService(dataObject:any, methodName:any){
    const postData = sampleStandardDeviationCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.sampleStandardDeviation
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

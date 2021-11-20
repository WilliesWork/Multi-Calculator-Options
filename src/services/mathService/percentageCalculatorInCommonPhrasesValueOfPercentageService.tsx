import { axiosInstance, mathRoute } from "../axiosInstance";
import { percentageCalculatorInCommonPhrasesValueOfPercentage } from '../../objectData/objectData'

export async function percentageCalculatorInCommonPhrasesValueOfPercentageService(dataObject:any, methodName:any){
    const postData = percentageCalculatorInCommonPhrasesValueOfPercentage(dataObject, methodName)
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

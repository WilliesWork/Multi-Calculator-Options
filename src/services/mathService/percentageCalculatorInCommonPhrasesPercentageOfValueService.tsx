import { axiosInstance, mathRoute } from "../axiosInstance";
import { percentageCalculatorInCommonPhrasesPercentageOfValue } from '../../objectData/objectData'

export async function percentageCalculatorInCommonPhrasesPercentageOfValueService(dataObject:any, methodName:any){
    const postData = percentageCalculatorInCommonPhrasesPercentageOfValue(dataObject, methodName)
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

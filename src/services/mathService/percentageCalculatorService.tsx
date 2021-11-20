import { axiosInstance, mathRoute } from "../axiosInstance";
import { percentageCalculator } from '../../objectData/objectData'

export async function percentageCalculatorService(dataObject:any, methodName:any){
    const postData = percentageCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.result
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

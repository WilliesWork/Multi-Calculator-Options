import { axiosInstance, mathRoute } from "../axiosInstance";
import { percentageDifferenceCalculator } from '../../objectData/objectData'

export async function percentageDifferenceCalculatorService(dataObject:any, methodName:any){
    const postData = percentageDifferenceCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.percentageDifference
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

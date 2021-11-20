import { axiosInstance, mathRoute } from "../axiosInstance";
import { meanMedianModeRangeCalculator } from '../../objectData/objectData'

export async function meanMedianModeRangeCalculatorService(dataObject:any, methodName:any){
    const postData = meanMedianModeRangeCalculator(dataObject, methodName)
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

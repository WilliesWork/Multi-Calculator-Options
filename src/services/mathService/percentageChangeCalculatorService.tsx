import { axiosInstance, mathRoute } from "../axiosInstance";
import { percentageChangeCalculator } from '../../objectData/objectData'

export async function percentageChangeCalculatorService(dataObject:any, methodName:any){
    const postData = percentageChangeCalculator(dataObject, methodName)
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

import { axiosInstance, mathRoute } from "../axiosInstance";
import { percentErrorCalculator } from '../../objectData/objectData'

export async function percentErrorCalculatorService(dataObject:any, methodName:any){
    const postData = percentErrorCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.absoluteError
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

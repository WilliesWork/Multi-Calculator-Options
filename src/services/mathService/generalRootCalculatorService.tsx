import { axiosInstance, mathRoute } from "../axiosInstance";
import { generalRootCalculator } from '../../objectData/objectData'

export async function generalRootCalculatorService(dataObject:any, methodName:any){
    const postData = generalRootCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.answer
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

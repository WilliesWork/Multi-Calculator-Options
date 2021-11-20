import { axiosInstance, mathRoute } from "../axiosInstance";
import { geometricSequencestCalculator } from '../../objectData/objectData'

export async function geometricSequencestCalculatorService(dataObject:any, methodName:any){
    const postData = geometricSequencestCalculator(dataObject, methodName)
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

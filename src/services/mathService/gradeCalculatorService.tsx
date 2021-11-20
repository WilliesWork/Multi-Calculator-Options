import { axiosInstance, mathRoute } from "../axiosInstance";
import { gradeCalculator } from '../../objectData/objectData'

export async function gradeCalculatorService(dataObject:any, methodName:any){
    const postData = gradeCalculator(dataObject, methodName)
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

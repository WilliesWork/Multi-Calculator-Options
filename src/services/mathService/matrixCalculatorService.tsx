import { axiosInstance, mathRoute } from "../axiosInstance";
import { matrixCalculator } from '../../objectData/objectData'

export async function matrixCalculatorService(dataObject:any, methodName:any){
    const postData = matrixCalculator(dataObject, methodName)
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

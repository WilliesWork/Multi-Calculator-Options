import { axiosInstance, mathRoute } from "../axiosInstance";
import { squareRootCalculator } from '../../objectData/objectData'

export async function squareRootCalculatorService(dataObject:any, methodName:any){
    const postData = squareRootCalculator(dataObject, methodName)
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

import { axiosInstance, mathRoute } from "../axiosInstance";
import { scientificNotationCalculator } from '../../objectData/objectData'

export async function scientificNotationCalculatorService(dataObject:any, methodName:any){
    const postData = scientificNotationCalculator(dataObject, methodName)
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

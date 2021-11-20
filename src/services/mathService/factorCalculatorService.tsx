import { axiosInstance, mathRoute } from "../axiosInstance";
import { factorCalculator } from '../../objectData/objectData'

export async function factorCalculatorService(dataObject:any, methodName:any){
    const postData = factorCalculator(dataObject, methodName)
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

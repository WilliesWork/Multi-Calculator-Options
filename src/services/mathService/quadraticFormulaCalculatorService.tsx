import { axiosInstance, mathRoute } from "../axiosInstance";
import { quadraticFormulaCalculator } from '../../objectData/objectData'

export async function quadraticFormulaCalculatorService(dataObject:any, methodName:any){
    const postData = quadraticFormulaCalculator(dataObject, methodName)
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

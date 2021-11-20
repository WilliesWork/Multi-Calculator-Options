import { axiosInstance, mathRoute } from "../axiosInstance";
import { dataPopulationStandardDeviationCalculator } from '../../objectData/objectData'

export async function dataPopulationStandardDeviationCalculatorService(dataObject:any, methodName:any){
    const postData = dataPopulationStandardDeviationCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.standardDeviation
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

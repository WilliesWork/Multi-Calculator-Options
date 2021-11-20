import { axiosInstance, mathRoute } from "../axiosInstance";
import { permutationCalculator } from '../../objectData/objectData'

export async function permutationCalculatorService(dataObject:any, methodName:any){
    const postData = permutationCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.Permutations
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

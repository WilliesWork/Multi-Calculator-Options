import { axiosInstance, mathRoute } from "../axiosInstance";
import { pythagoreanTheoremCalculator } from '../../objectData/objectData'

export async function pythagoreanTheoremCalculatorService(dataObject:any, methodName:any){
    const postData = pythagoreanTheoremCalculator(dataObject, methodName)
    try{
        const { data } = await axiosInstance.post(mathRoute, postData);
        var msg:any = data.statusDescription;
        console.log("Monkey", data)
        if(msg === "success"){
            //console.log(data)
            return data.message.cvalue
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

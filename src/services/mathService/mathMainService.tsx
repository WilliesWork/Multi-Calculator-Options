import { type } from "os";
import { axiosInstance, mathRoute } from "../axiosInstance";
import * as INTERFACES from '../types/mathTypes'


export async function mathMainService(dataObject:INTERFACES.FibonacciCalculator){
    try{
        const { data } = await axiosInstance.post(mathRoute, dataObject);
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

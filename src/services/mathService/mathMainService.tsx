import { axiosInstance, mathRoute } from "../axiosInstance";
import * as INTERFACES from '../types/mathTypes'


export async function mathMainService(
    dataObject:
    INTERFACES.FibonacciCalculator|
    INTERFACES.ArithmeticSequenceCalculator|
    INTERFACES.AverageCalculator
    ){
    try{
        const { data } = await axiosInstance.post(mathRoute, dataObject);
        var msg:any = data.statusDescription;
        if(msg === "success"){
             return data
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}

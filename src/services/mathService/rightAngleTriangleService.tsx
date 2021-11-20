import { axiosInstance, mathRoute } from "../axiosInstance";
import { rightAngleTriangle } from '../../objectData/objectData'

export async function rightAngleTriangleService(dataObject:any, methodName:any){
    const postData = rightAngleTriangle(dataObject, methodName)
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

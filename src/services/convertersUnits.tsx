/**
 * 
 * These ends are responsible for getting the appropriate units
 */



/**
 * converter units
 */

import { axiosInstance } from "./axiosInstance";

async function test(){
    try{
        const { data } = await axiosInstance.get('/converter/LengthConverterUnit')

        var msg:any = data.statusDescription;
        
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

async function areaConverterUnit(){
    try{
        const { data } = await axiosInstance.get('/converter/AreaConverterUnit')

        var msg:any = data.statusDescription;
        
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

async function temperatureConverter(){
    try{
        const { data } = await axiosInstance.get('/converter/TemperatureConverterUnit')

        var msg:any = data.statusDescription;
        
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

async function volumeConverterUnit(){
    try{
        const { data } = await axiosInstance.get('/converter/VolumeConverterUnit')

        var msg:any = data.statusDescription;
        
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

async function timeConverterUnit(){
    try{
        const { data } = await axiosInstance.get('/converter/timeConverterUnit')

        var msg:any = data.statusDescription;
        
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

async function weightConverterUnit(){
    try{
        const { data } = await axiosInstance.get('/converter/WeightConverterUnit')

        var msg:any = data.statusDescription;
        
        if(msg === "success"){
            return data.message
        }else{
            return false
        }
    }
    catch(error){
        return error
    }
}


async function horsePowerConverterUnit(){
    try{
        const { data } = await axiosInstance.get('/converter/HorsePowerConverterUnit')

        var msg:any = data.statusDescription;
        
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

async function dataUnitConverterUnit(){
    try{
        const { data } = await axiosInstance.get('/converter/DataUnitConverterUnit')

        var msg:any = data.statusDescription;
        
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

/**
 * 
 * Finance Units
 */

export { 
    test,
    areaConverterUnit,
    temperatureConverter,
    weightConverterUnit,
    timeConverterUnit,
    volumeConverterUnit,
    dataUnitConverterUnit,
    horsePowerConverterUnit
}
import React from 'react'
import { LengthConverter } from '../converterComponents/converters/lengthConverter'
import { AreaConverter } from '../converterComponents/converters/areaConverter'
import { TemperatureConverter } from '../converterComponents/converters/temperatureConverter'
import { VolumeConverter } from '../converterComponents/converters/volumeConverter'
import { TimeConverter } from '../converterComponents/converters/timeConverter'
import { WeightConverter } from '../converterComponents/converters/weightConverter'
import { HorsePowerConverter } from '../converterComponents/converters/horsePowerConverter'
import { DataUnitConverter } from '../converterComponents/converters/dataUnitConverter'

function ConvertersPage(){

    return(
        <div>
            <div className="container d-flex justify-content-center mb-4">
                <h4>Converters Page</h4>
            </div>
            <LengthConverter />
            <AreaConverter />
            <TemperatureConverter />
            <VolumeConverter />
            <TimeConverter />
            <WeightConverter />
            <HorsePowerConverter />
            <DataUnitConverter />
        </div>
    );
}

export { ConvertersPage }
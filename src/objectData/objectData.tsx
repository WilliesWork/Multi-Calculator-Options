/**
 * 
 * Functions return object data
 */

function statisticsCalculator(data:any, methodName:any){
    const objectData = {
        observations: data.value_1,
        method: methodName
    }
    return objectData
}

function averageCalculator(data:any, methodName:any){
    const objectData = {
        numbers: data.value_1,
        method: methodName
    }
    return objectData
}


function dataPopulationStandardDeviationCalculator(data:any, methodName:any){
    const objectData = {
        provided_numbers: data.value_1,
        method: methodName
    }
    return objectData
}

function sampleStandardDeviationCalculator(data:any, methodName:any){
    const objectData = {
        provided_numbers: data.value_1,
        method: methodName
    }
    return objectData
}

function confidenceIntervalCalculator(data:any, methodName:any){
    const objectData = {
        sample_size: data.value_1,
        sample_mean: data.value_2,
        stardard_deviation: data.value_3,
        confidence_level: data.value_4,
        method: methodName
    }
    return objectData
}

function percentageCalculator(data:any, methodName:any){
    const objectData = {
        percentage: data.value_1,
        value: data.value_2,
        confidence_level: data.value_3,
        method: methodName
    }
    return objectData
}

/** has type */

function percentageChangeCalculator(data:any, methodName:any){
    const objectData = {
        percentage: data.value_1,
        value: data.value_2,
        type: data.value_3,
        method: methodName
    }
    return objectData
}

function percentageDifferenceCalculator(data:any, methodName:any){
    const objectData = {
        value2: data.value_1,
        value1: data.value_2,
        method: methodName
    }
    return objectData
}

function percentErrorCalculator(data:any, methodName:any){
    const objectData = {
        observed_value: data.value_1,
        true_value: data.value_2,
        method: methodName
    }
    return objectData
}

function logCalculator(data:any, methodName:any){
    const objectData = {
        base: data.value_1,
        number: data.value_2,
        method: methodName
    }
    return objectData
}

export function exponentCalculator(data:any, methodName:any){
    const objectData = {
        base: data.value_1,
        number: data.value_2,
        method: methodName
    }
    return objectData
}

export function squareRootCalculator(data:any, methodName:any){
    const objectData = {
        number: data.value_1,
        method: methodName
    }
    return objectData
}

export function cubeRootCalculator(data:any, methodName:any){
    const objectData = {
        number: data.value_1,
        method: methodName
    }
    return objectData
}

export function generalRootCalculator(data:any, methodName:any){
    const objectData = {
        number: data.value_1,
        root_number: data.value_2,
        method: methodName
    }
    return objectData
}

export function geometricSequencestCalculator(data:any, methodName:any){
    const objectData = {
        common_ratio: data.value_1,
        first_term: data.value_2,
        nth_term: data.value_3,
        method: methodName
    }
    return objectData
}

export function pythagoreanTheoremCalculator(data:any, methodName:any){
    const objectData = {
        a_value: data.value_1,
        aSquared: data.value_2,
        b_value: data.value_3,
        bSquared: data.value_4,
        c_value: data.value_5,
        cSquared: data.value_6,
        method: methodName
    }
    return objectData
}



/********************************************************************/


export function permutationCalculator(data:any, methodName:any){
    const objectData = {
        total_number: data.value_1,
        amount_in_each_subset: data.value_2,
        method: methodName
    }
    return objectData
}

export function combinationsCalculator(data:any, methodName:any){
    const objectData = {
        total_number: data.value_1,
        amount_in_each_subset: data.value_2,
        method: methodName
    }
    return objectData
}

export function quadraticFormulaCalculator(data:any, methodName:any){
    const objectData = {
        a: data.value_1,
        b: data.value_2,
        c: data.value_3,
        method: methodName
    }
    return objectData
}

export function meanMedianModeRangeCalculator(data:any, methodName:any){
    const objectData = {
        numbers: data.value_1,
        method: methodName
    }
    return objectData
}

export function twoDDistanceCalculator(data:any, methodName:any){
    const objectData = {
        "x-1": data.value_1,
        "x-2": data.value_2,
        "y-1": data.value_3,
        "y-2": data.value_4,
        method: methodName
    }
    return objectData
}

export function greatestCommonFactorCalculator(data:any, methodName:any){
    const objectData = {
        factors: data.value_1,
        method: methodName
    }
    return objectData
}

export function leastCommonMultipleCalculator(data:any, methodName:any){
    const objectData = {
        factors: data.value_1,
        method: methodName
    }
    return objectData
}

export function distanceBasedOnLatitudeAndLongitudeCalculator(data:any, methodName:any){
    const objectData = {
        latitude1: data.value_1,
        latitude2: data.value_2,
        longitude1: data.value_3,
        longitude2: data.value_4,
        method: methodName
    }
    return objectData
}

export function circleCalculator(data:any, methodName:any){
    const objectData = {
        radius: data.value_1,
        latitude2: data.value_2,
        area: data.value_3,
        circumference: data.value_4,
        method: methodName
    }
    return objectData
}

export function fibonacciCalculator(data:any, methodName:any){
    const objectData = {
        nthvalue: data.value_1,
        method: methodName
    }
    return objectData
}

export function scientificNotationCalculator(data:any, methodName:any){
    const objectData = {
        value: data.value_1,
        method: methodName
    }
    return objectData
}

export function rightAngleTriangle(data:any, methodName:any){
    const objectData = {
        sideA: data.value_1,
        sideB: data.value_2,
        sideC: data.value_3,
        perimeter: data.value_4,
        method: methodName
    }
    return objectData
}

export function matrixCalculator(data:any, methodName:any){
    const objectData = {
        matrixAData: data.value_1,
        matrixBData: data.value_2,
        matrixArow: data.value_3,
        matrixBrow: data.value_4,
        matrixAcolumn: data.value_5,
        matrixBcolumn: data.value_6,
        operation: data.value_7,
        method: methodName
    }
    return objectData
}

export function matrixOperationsCalculator(data:any, methodName:any){
    const objectData = {
        matrix_data: data.value_1,
        matrix_row: data.value_2,
        matrix_column: data.value_3,
        operation: data.value_4,
        method: methodName
    }
    return objectData
}

export function randomNumberCalculator(data:any, methodName:any){
    const objectData = {
        lowest_value: data.value_1,
        highest_value: data.value_2,
        method: methodName
    }
    return objectData
}

export function percentageCalculatorInCommonPhrasesPercentageOfValue(data:any, methodName:any){
    const objectData = {
        percentage: data.value_1,
        value: data.value_2,
        method: methodName
    }
    return objectData
}

export function percentageCalculatorInCommonPhrasesValueOfPercentage(data:any, methodName:any){
    const objectData = {
        percentage: data.value_1,
        value: data.value_2,
        method: methodName
    }
    return objectData
}

export function percentageCalculatorInCommonPhrasesValueIsWhatPercentageOfValue(data:any, methodName:any){
    const objectData = {
        value1: data.value_1,
        value2: data.value_2,
        method: methodName
    }
    return objectData
}


export function arithmeticSequenceCalculator(data:any, methodName:any){
    const objectData = {
        first_term: data.value_1,
        common_difference: data.value_2,
        number_of_observation: data.value_3,
        method: methodName
    }
    return objectData
}


export function factorCalculator(data:any, methodName:any){
    const objectData = {
        value: data.value_1,
        method: methodName
    }
    return objectData
}


export function ratioCalculator(data:any, methodName:any){
    const objectData = {
        a: data.value_1,
        b: data.value_2,
        c: data.value_3,
        d: data.value_4,
        method: methodName
    }
    return objectData
}

export function binaryCalculator(data:any, methodName:any){
    const objectData = {
        first_value: data.value_1,
        second_value: data.value_2,
        operation: data.value_3,
        method: methodName
    }
    return objectData
}

export function hexadecimalCalculator(data:any, methodName:any){
    const objectData = {
        first_value: data.value_1,
        second_value: data.value_2,
        operation: data.value_3,
        method: methodName
    }
    return objectData
}

export function binaryToDecimalCalculator(data:any, methodName:any){
    const objectData = {
        value: data.value_1,
        method: methodName
    }
    return objectData
}

export function decimalToBinaryCalculator(data:any, methodName:any){
    const objectData = {
        value: data.value_1,
        method: methodName
    }
    return objectData
}

export function decimalToHexadecimalCalculator(data:any, methodName:any){
    const objectData = {
        value: data.value_1,
        method: methodName
    }
    return objectData
}

export function hexadecimalToDecimalCalculator(data:any, methodName:any){
    const objectData = {
        value: data.value_1,
        method: methodName
    }
    return objectData
}

export function fractionToDecimalCalculator(data:any, methodName:any){
    const objectData = {
        top: data.value_1,
        bottom: data.value_2,
        method: methodName
    }
    return objectData
}

export function fractionToPercentageCalculator(data:any, methodName:any){
    const objectData = {
        top: data.value_1,
        bottom: data.value_2,
        method: methodName
    }
    return objectData
}

export function decimalToFractionCalculator(data:any, methodName:any){
    const objectData = {
        value: data.value_1,
        method: methodName
    }
    return objectData
}

export function percentToFractionsCalculator(data:any, methodName:any){
    const objectData = {
        value: data.value_1,
        method: methodName
    }
    return objectData
}

export function zScoreCalculator(data:any, methodName:any){
    const objectData = {
        raw_score: data.value_1,
        population_mean: data.value_2,
        standard_deviation: data.value_3,
        method: methodName
    }
    return objectData
}

export function gpaCalculator(data:any, methodName:any){
    const objectData = {
        course: data.value_1,
        credit: data.value_2,
        grade: data.value_3,
        method: methodName
    }
    return objectData
}

export function gradeCalculator(data:any, methodName:any){
    const objectData = {
        entry: data.value_1,
        weight: data.value_2,
        grade: data.value_3,
        method: methodName
    }
    return objectData
}

export function finalGradeCalculator(data:any, methodName:any){
    const objectData = {
        desired_grade: data.value_1,
        current_grade: data.value_2,
        weight_of_final: data.value_3,
        method: methodName
    }
    return objectData
}






export {
    dataPopulationStandardDeviationCalculator,
    statisticsCalculator,
    averageCalculator,
    sampleStandardDeviationCalculator,
    confidenceIntervalCalculator,
    percentageCalculator,
    percentageChangeCalculator,
    percentageDifferenceCalculator,
    percentErrorCalculator,
    logCalculator,

}
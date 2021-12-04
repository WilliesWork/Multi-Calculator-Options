export interface FibonacciCalculator{
    nthvalue: string,
    method: string
}

export interface ScientificNotationCalculator{
    value: string,
    method: string
}

export interface RightAngleTriangle{
    sideA? : string,
    sideB?: string,
    sideC? : string,
    perimeter: string,
    method: string
}

export interface MatrixCalculator{
    matrixAData: string,
    matrixBData: string,
    matrixArow: string,
    matrixBrow: string,
    matrixAcolumn: string,
    matrixBcolumn: string,
    operation: string,
    method: string
}

export interface ArithmeticSequenceCalculator{ 
    first_term:string,
    common_difference: string,
    number_of_observation: string,
    method: string
}
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


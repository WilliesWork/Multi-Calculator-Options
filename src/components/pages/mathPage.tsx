import React from 'react'
import { PopulationStandardDeviationCalculator } from '../mathComponents/populationStandardDeviationCalculator'
import { StatisticsCalculator } from '../mathComponents/statisticsCalculator'
import { AverageCalculator } from '../mathComponents/averageCalculator'
import { SampleStandardDeviationCalculator } from '../mathComponents/sampleStandardDeviationCalculator'
import { ConfidenceIntervalCalculator } from '../mathComponents/confidenceIntervalCalculator'
import { PercentageCalculator } from '../mathComponents/percentageCalculator'
import { PercentageChangeCalculator } from '../mathComponents/percentageChangeCalculator'
import { PercentageDifferenceCalculator } from '../mathComponents/percentageDifferenceCalculator'
import { PercentErrorCalculator  } from '../mathComponents/percentErrorCalculator'
import { LogCalculator  } from '../mathComponents/logCalculator'
import { ExponentCalculator  } from '../mathComponents/exponentCalculator'
import { SquareRootCalculator  } from '../mathComponents/squareRootCalculator'
import { CubeRootCalculator  } from '../mathComponents/cubeRootCalculator'
import { GeneralRootCalculator  } from '../mathComponents/generalRootCalculator'
import { GeometricSequencestCalculator  } from '../mathComponents/geometricSequencestCalculator'
import { PythagoreanTheoremCalculator  } from '../mathComponents/pythagoreanTheoremCalculator'
import { PermutationCalculator  } from '../mathComponents/permutationCalculator'


function MathPage(){
    return(
        <div>
            <div className="container d-flex justify-content-center mb-4">
                <h4>Math Page</h4>
            </div>
            <StatisticsCalculator/>
            <AverageCalculator />
            <PopulationStandardDeviationCalculator />
            <SampleStandardDeviationCalculator/>
            <ConfidenceIntervalCalculator />
            <PercentageCalculator/>
            <PercentageChangeCalculator />
            <PercentageDifferenceCalculator/>
            <PercentErrorCalculator />
            <LogCalculator />
            <ExponentCalculator />
            <SquareRootCalculator />
            <CubeRootCalculator />
            <GeneralRootCalculator />
            <GeometricSequencestCalculator />
            <PythagoreanTheoremCalculator />
            <PermutationCalculator />
        </div>
    );
}

export{ MathPage }
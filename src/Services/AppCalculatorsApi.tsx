/* eslint-disable camelcase */
import axios, { AxiosError } from 'axios'
import { BASE_URL } from '../Common/AppUrl'
import { BodyMassIndexI, CapsuleSurfaceAreaI, ConeAreaI, CubeAreaI, LeanBodyMassI, RectangularAreaI, RegularCycleOvulationI, SurfaceAreaI } from '../Types'
import * as FinancialFormulars from '../Types/FinanceInterfaces'
import * as MatheMaticalFormulars from '../Types/MathInterfaces'
import * as HealthFormulars from '../Types/HealthInterfaces'
import * as OtherFormulars from '../Types/OtherCalculatorInterfaces'

export const calculateMath = async (calculateArea: SurfaceAreaI | CubeAreaI | RectangularAreaI | ConeAreaI | CapsuleSurfaceAreaI
  | MatheMaticalFormulars.TubeVolumeCalculatorI | MatheMaticalFormulars.TriangleAreaI | MatheMaticalFormulars.TrapezoidAreaI
  | MatheMaticalFormulars.SquarePyramidVolumeI | MatheMaticalFormulars.SquarePyramidSurfaceAreaI | MatheMaticalFormulars.SphericalCapVolumeI | MatheMaticalFormulars.SphericalCapSurfaceAreaI
  | MatheMaticalFormulars.SphereVolumeCalculatorI | MatheMaticalFormulars.SectorAreaI | MatheMaticalFormulars.RectangularTankVolumeI | MatheMaticalFormulars.RectangleAreaI | MatheMaticalFormulars.ParallelogramAreaI | MatheMaticalFormulars.EllipsoidVolumeCalculatorI | MatheMaticalFormulars.EllipsoidSurfaceAreaI
  | MatheMaticalFormulars.EllipseAreaI | MatheMaticalFormulars.CylindricalTankAreaI | MatheMaticalFormulars.CylinderVolumeCalculatorI | MatheMaticalFormulars.CubeVolumeCalculatorI
  | MatheMaticalFormulars.ConicalFrustumVolumeI | MatheMaticalFormulars.ConicalFrustrumSurfaceAreaI | MatheMaticalFormulars.ConeVolumeCalculatorI | MatheMaticalFormulars.CircleAreaI | MatheMaticalFormulars.CapsuleVolumeCalculatorI) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/math`, calculateArea)

    const { statusCode, statusDescription, message, error } = data
    console.log(message, error)
    if (statusCode === 100) {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: false, payload: 'Server Error' }
    }

    throw new Error('Responded with unexpected Error')
  } catch (err) {
    const { response } = err as AxiosError
    console.log(response)
    return {
      success: false,
      payload: 'Unexpected Error'
    }
  }
}
export const checkMomoBalance = async (trialCalculate: ConeAreaI | CapsuleSurfaceAreaI ) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/math`, trialCalculate);

    const { statusCode, message } = data;
    if (statusCode === 100) {
      // console.log('This is ', message)
      return { success: true, payload: message };
    }

    throw new Error('Responded with unexpected Error');
  } catch (err) {
    console.log(JSON.stringify({err}, null, 2))
    const {response} = err as AxiosError

    if (response && typeof response.data.statusCode === 'number') {

      const {data: {statusCode, message}, } = response

      if (statusCode === 401){
        return {
          success: false,
          payload: message
        }
      }
  
      if (statusCode === 404){
        return{
          success: false,
          payload: message
        }
      }
    }


    return {
      success: false,
      payload: 'Unexpected Error',
    };
  }
};

export const calculateHealth = async (calculateHealthPayload: HealthFormulars.BMRKatchMcArdleI | HealthFormulars.BloodAlcoholContentI | HealthFormulars.BodyFatPercentageBmiI | HealthFormulars.BodyMassIndexI | HealthFormulars.BodyMassIndexMethodTwoI | HealthFormulars.BoydFormulaSurfaceAreaI | HealthFormulars.DuBoisBodySurfaceAreaI | HealthFormulars.DueDateMittendorfWilliamI
  | HealthFormulars.DueDateNaegeleRule | HealthFormulars.GehanAndGeorgeSurfaceAreaI | HealthFormulars.HaycockBodySurfaceAreaI | HealthFormulars.InternationSytemBfcI | HealthFormulars.LeanBodyMassI | HealthFormulars.LeanBodyMassPeterFormulaI | HealthFormulars.MostellerBodySurfaceAreaI | HealthFormulars.PeroidCalculator | HealthFormulars.ProbabilityOfASeriesOfIndpendentEventsI
  | HealthFormulars.RegularCycleOvulationI | HealthFormulars.SinglePointWithKnownSlope | HealthFormulars.TakaSchlichBodySurfaceAreaI | HealthFormulars.TakahiraBodySurfaceAreaI | HealthFormulars.USCustomarySystemBfcI | HealthFormulars.WholeBodyMassFormular | HealthFormulars.WholeBodyMassFormular) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/health`, calculateHealthPayload)

    const { statusCode, statusDescription, message, error } = data
    console.log(message, error)
    if (statusCode === 100) {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: false, payload: 'Server Error' }
    }

    throw new Error('Responded with unexpected Error')
  } catch (err) {
    const { response } = err as AxiosError
    console.log(response)
    return {
      success: false,
      payload: 'Unexpected Error'
    }
  }
}

export const calculateFinances = async (calculateFinancialPayload: FinancialFormulars.AmortizedLoanFixedAmountI | FinancialFormulars.BondPayBackPredeterminedI
  | FinancialFormulars.DefearedPaymentsLumpsumAtMaturityI | FinancialFormulars.InflationCalculatorCpiDataI | FinancialFormulars.MortgagePayOffWithoutLoanTermI |
  FinancialFormulars.MortgagePayoffWithLoanTermI | FinancialFormulars.PayBackACertainAmountI
  | FinancialFormulars.PaybackWithinTimeframeI | FinancialFormulars.PresentValueI | FinancialFormulars.PresentValueOfPeriodicalDepositI | FinancialFormulars.ProfitMarginCalculatorI | FinancialFormulars.StockTradingMarginI) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/finacial`, calculateFinancialPayload)

    const { statusCode, statusDescription, message, error } = data
    console.log(message, error)
    if (statusCode === 100) {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: false, payload: 'Server Error' }
    }

    throw new Error('Responded with unexpected Error')
  } catch (err) {
    const { response } = err as AxiosError
    console.log(response)
    return {
      success: false,
      payload: 'Unexpected Error'
    }
  }
}

export const calculateOthers = async (calculateOtherFormulaePayload: OtherFormulars.CircularSlapI | OtherFormulars.ConcreteSquareFootingI | OtherFormulars.CurbAndGutterBarrierI
  | OtherFormulars.HoleColumnI | OtherFormulars.StairsConcreateI) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/other`, calculateOtherFormulaePayload)

    const { statusCode, statusDescription, message, error } = data
    console.log(message, error)
    if (statusCode === 100) {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: false, payload: 'Server Error' }
    }

    throw new Error('Responded with unexpected Error')
  } catch (err) {
    const { response } = err as AxiosError
    console.log(response)
    return {
      success: false,
      payload: 'Unexpected Error'
    }
  }
}



/* eslint-disable camelcase */
import axios, { AxiosError } from 'axios'
import { BASE_URL } from '../Common/AppUrl'
import { BodyMassIndexI, CapsuleSurfaceAreaI, ConeAreaI, CubeAreaI, LeanBodyMassI, RectangularAreaI, RegularCycleOvulationI, SurfaceAreaI } from '../Types'
import * as FinancialFormulas from '../Types/FinanceInterfaces'
import * as MatheMaticalFormulas from '../Types/MathInterfaces'
import * as HealthFormulas from '../Types/HealthInterfaces'
import * as OtherFormulas from '../Types/OtherCalculatorInterfaces'

export const CalculateSurfaceArea = async (calculateArea: SurfaceAreaI | CubeAreaI | RectangularAreaI | ConeAreaI | CapsuleSurfaceAreaI
  | MatheMaticalFormulas.TubeVolumeCalculatorI | MatheMaticalFormulas.TriangleAreaI | MatheMaticalFormulas.TrapezoidAreaI
  | MatheMaticalFormulas.SquarePyramidVolumeI | MatheMaticalFormulas.SquarePyramidSurfaceAreaI | MatheMaticalFormulas.SphericalCapVolumeI | MatheMaticalFormulas.SphericalCapSurfaceAreaI
  | MatheMaticalFormulas.SphereVolumeCalculatorI | MatheMaticalFormulas.SectorAreaI | MatheMaticalFormulas.RectangularTankVolumeI | MatheMaticalFormulas.RectangleAreaI | MatheMaticalFormulas.ParallelogramAreaI | MatheMaticalFormulas.EllipsoidVolumeCalculatorI | MatheMaticalFormulas.EllipsoidSurfaceAreaI
  | MatheMaticalFormulas.EllipseAreaI | MatheMaticalFormulas.CylindricalTankAreaI | MatheMaticalFormulas.CylinderVolumeCalculatorI | MatheMaticalFormulas.CubeVolumeCalculatorI
  | MatheMaticalFormulas.ConicalFrustumVolumeI | MatheMaticalFormulas.ConicalFrustrumSurfaceAreaI | MatheMaticalFormulas.ConeVolumeCalculatorI | MatheMaticalFormulas.CircleAreaI | MatheMaticalFormulas.CapsuleVolumeCalculatorI) => {
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

export const calculateHealth = async (calculateHealthPayload: HealthFormulas.BMRKatchMcArdleI | HealthFormulas.BloodAlcoholContentI | HealthFormulas.BodyFatPercentageBmiI | HealthFormulas.BodyMassIndexI | HealthFormulas.BodyMassIndexMethodTwoI | HealthFormulas.BoydFormulaSurfaceAreaI | HealthFormulas.DuBoisBodySurfaceAreaI | HealthFormulas.DueDateMittendorfWilliamI
  | HealthFormulas.DueDateNaegeleRuleI | HealthFormulas.GehanAndGeorgeSurfaceAreaI | HealthFormulas.HaycockBodySurfaceAreaI | HealthFormulas.InternationalSystemBfcI | HealthFormulas.LeanBodyMassI | HealthFormulas.LeanBodyMassPeterFormulaI | HealthFormulas.MostellerBodySurfaceAreaI | HealthFormulas.PeroidCalculatorI | HealthFormulas.ProbabilityOfASeriesOfIndpendentEventsI
  | HealthFormulas.RegularCycleOvulationI | HealthFormulas.SinglePointWithKnownSlopeI | HealthFormulas.TakaSchlichBodySurfaceAreaI | HealthFormulas.TakahiraBodySurfaceAreaI | HealthFormulas.USCustomarySystemBfcI | HealthFormulas.WholeBodyMassFormulaI | HealthFormulas.WholeBodyMassFormulaI) => {
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

export const calculateFinances = async (calculateFinancialPayload: FinancialFormulas.AmortizedLoanFixedAmountI | FinancialFormulas.BondPayBackPredeterminedI
  | FinancialFormulas.DefearedPaymentsLumpsumAtMaturityI | FinancialFormulas.InflationCalculatorCpiDataI | FinancialFormulas.MortgagePayOffWithoutLoanTermI |
  FinancialFormulas.MortgagePayoffWithLoanTermI | FinancialFormulas.PayBackACertainAmountI
  | FinancialFormulas.PaybackWithinTimeframeI | FinancialFormulas.PresentValueI | FinancialFormulas.PresentValueOfPeriodicalDepositI | FinancialFormulas.ProfitMarginCalculatorI | FinancialFormulas.StockTradingMarginI) => {
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

export const calculateOthers = async (calculateOtherFormulaePayload: OtherFormulas.CircularSlapI | OtherFormulas.ConcreteSquareFootingI | OtherFormulas.CurbAndGutterBarrierI
  | OtherFormulas.HoleColumnI | OtherFormulas.StairsConcreateI) => {
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



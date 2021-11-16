export interface BodyMassIndexI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface LeanBodyMassI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  method: string;
}

export interface RegularCycleOvulationI {
  cycle_days: string;
  previous_cycle_start_date: string;
  method: string;
}

// Going down
export interface LeanBodyMassPeterFormulaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  method: string;
}

export interface BodyMassIndexMethodTwoI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface BMRKatchMcArdleI {
  fat: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface BloodAlcoholContentI {
  weight_unit: string;
  weight: string;
  gender: string;
  hours_of_drinking: string;
  minutes_of_drinking: string;
  number_of_standard_drinks: string;
  method: string;
}

export interface USCustomarySystemBfcI {
  neck: string;
  neck_unit: string;
  height_unit: string;
  height: string;
  abdomen: string;
  gender: string;
  hip: string;
  hip_unit: string;
  waist: string;
  waist_unit: string;
  method: string;
}

export interface InternationalSystemBfcI {
  height: string;
  neck: string;
  gender: string;
  hip: string;
  waist: string;
  method: string;
}

export interface BodyFatPercentageBmiI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  age: string;
  method: string;
}

export interface DueDateNaegeleRuleI {
  first_date_of_last_period: string;
  days: string;
  method: string;
}

export interface PeroidCalculatorI {
  start_date_of_last_cycle: string;
  cycle_length: string;
  last_period_days: string;
  method: string;
}

export interface DueDateMittendorfWilliamI {
  first_date_of_last_period: string;
  type: string;
  method: string;
}

// Done 10 from top
//Call these in your forms.
//Type Your payload using its respective type

export interface DuBoisBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

//note: endpoint spelt with all I assume it should be whole
export interface WholeBodyMassFormulaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface MostellerBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface HaycockBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface GehanAndGeorgeSurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface BoydFormulaSurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface TakahiraBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface TakaSchlichBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  method: string;
}

//note: endpoint called if 1 point and the slope are known
export interface SinglePointWithKnownSlopeI {
  y_1: string;
  distance: string;
  x_1: string;
  slope: string;
  method: string;
}

export interface ProbabilityOfASeriesOfIndpendentEventsI {
  event_a: string;
  event_b: string;
  a_repeat_times: string;
  b_repeat_times: string;
  method: string;
}

// start
export interface FujimotoFormulaSurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  method: string;
}

export interface DueDateParikhsRuleI {
  first_date_of_last_period: string;
  days: string;
  method: string;
}

export interface DueDateWoodsRuleI {
  first_date_of_last_period: string;
  days: string;
  type: string;
  method: string;
}

export interface BmrMifflinJeorEquationI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  age: number;
  method: string;
}

export interface BmrMifflinHarrisBenedictI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  age: number;
  method: string;
}
// end 11/04/2021

export type AllHealthCalculators =
  | BodyMassIndexI
  | LeanBodyMassI
  | RegularCycleOvulationI
  | LeanBodyMassPeterFormulaI
  | BodyMassIndexMethodTwoI
  | BMRKatchMcArdleI
  | BloodAlcoholContentI
  | USCustomarySystemBfcI
  | InternationalSystemBfcI
  | DueDateNaegeleRuleI
  | PeroidCalculatorI
  | DueDateMittendorfWilliamI
  | DuBoisBodySurfaceAreaI
  | WholeBodyMassFormulaI
  | MostellerBodySurfaceAreaI
  | HaycockBodySurfaceAreaI
  | GehanAndGeorgeSurfaceAreaI
  | BoydFormulaSurfaceAreaI
  | TakahiraBodySurfaceAreaI
  | TakaSchlichBodySurfaceAreaI
  | SinglePointWithKnownSlopeI
  | ProbabilityOfASeriesOfIndpendentEventsI
  | FujimotoFormulaSurfaceAreaI
  | DueDateParikhsRuleI
  | DueDateWoodsRuleI
  | BmrMifflinJeorEquationI
  | BmrMifflinHarrisBenedictI;

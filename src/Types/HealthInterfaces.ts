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
}

export interface BodyMassIndexMethodTwoI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

export interface BMRKatchMcArdleI {
  fat: string;
  weight: string;
  weight_unit: string;
}

export interface BloodAlcoholContentI {
  weight_unit: string;
  weight: string;
  gender: string;
  hours_of_drinking: string;
  minutes_of_drinking: string;
  number_of_standard_drinks: string;
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
}

export interface InternationalSystemBfcI {
  height: string;
  neck: string;
  gender: string;
  hip: string;
  waist: string;
}

export interface BodyFatPercentageBmiI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  age: string;
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
}

export interface DueDateMittendorfWilliamI {
  first_date_of_last_period: string;
  type: string;
}

// Done 10 from top
//Call these in your forms.
//Type Your payload using its respective type

export interface DuBoisBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

//note: endpoint spelt with all I assume it should be whole
export interface WholeBodyMassFormulaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

export interface MostellerBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

export interface HaycockBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

export interface GehanAndGeorgeSurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

export interface BoydFormulaSurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

export interface TakahiraBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

export interface TakaSchlichBodySurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
}

//note: endpoint called if 1 point and the slope are known
export interface SinglePointWithKnownSlopeI {
  y_1: string;
  distance: string;
  x_1: string;
  slope: string;
}

export interface ProbabilityOfASeriesOfIndpendentEventsI {
  event_a: string;
  event_b: string;
  a_repeat_times: string;
  b_repeat_times: string;
}

// start
export interface FujimotoFormulaSurfaceAreaI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
}

export interface DueDateParikhsRuleI {
  first_date_of_last_period: string;
  days: string;
}

export interface DueDateWoodsRuleI {
  first_date_of_last_period: string;
  days: string;
  type: string;
}

export interface BmrMifflinJeorEquationI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  age: number;
}

export interface BmrMifflinHarrisBenedictI {
  height: string;
  height_unit: string;
  weight: string;
  weight_unit: string;
  gender: string;
  age: number;
}
// end 11/04/2021

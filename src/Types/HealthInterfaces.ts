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

export interface  BMRKatchMcArdleI{
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

export interface InternationSytemBfcI {
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

export interface DueDateNaegeleRule {
  first_date_of_last_period: string;
  days: string;
  method: string;
}

export interface PeroidCalculator {
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
//Type Your payload using it respective type
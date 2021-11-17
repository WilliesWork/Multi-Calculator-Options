export interface ConcreteSquareFootingI {
  length: string;
  length_unit: string;
  width: string;
  width_unit: string;
  breadth: string;
  breadth_unit: string;
  quantity: string;
  method: string;
}

export interface CircularSlapI {
  length: string;
  length_unit: string;
  outer_diameter: string;
  outer_diameter_unit: string;
  inner_diameter: string;
  inner_diameter_unit: string;
  quantity: string;
  method: string;
}

export interface CurbAndGutterBarrierI {
  curb_depth: string;
  curb_depth_unit: string;
  curb_height: string;
  curb_height_unit: string;
  flag_thickness: string;
  flag_thickness_unit: string;
  gutter_width: string;
  gutter_width_unit: string;
  length: string;
  length_unit: string;
  quantity: string;
  method: string;
}

export interface StairsConcreateI {
  run: string;
  run_unit: string;
  rise: string;
  rise_unit: string;
  width: string;
  width_unit: string;
  platform_depth: string;
  platform_depth_unit: string;
  steps: string;
  method: string;
}

export interface HoleColumnI {
  diameter: string;
  diameter_unit: string;
  height_unit: string;
  height: string;
  quantity: string;
  method: string;
}

// new
export interface SlopeCalculatorForTwoKnownPointsI {
  y_1: string;
  y_2: string;
  x_1: string;
  x_2: string;
  method: string;
}

export interface ElapsedTimeMethodI {
  weight: string;
  weight_unit: string;
  time: string;
  time_unit: string;
  method: string;
}

export interface TrapSpeedMethodI {
  weight: string;
  weight_unit: string;
  speed: string;
  speed_unit: string;
  method: string;
}

export interface ParrallelResitorI {
  resistance_values: string;
  method: string;
}

export interface SeriesResistorI {
  resistance_values: string;
  method: string;
}

export interface ConductorResitorI {
  length: string;
  length_unit: string;
  diameter: string;
  diameter_unit: string;
  conductivity: string;
  method: string;
}

export interface HorsepowerCalculationI {
  force: string;
  force_unit: string;
  distance: string;
  distance_unit: string;
  time: string;
  time_unit: string;
  method: string;
}

export interface WebsiteBandwidthI {
  page_views: string;
  page_views_unit: string;
  page_size: string;
  page_size_unit: string;
  redundancy_factor: string;
  method: string;
}

export interface HostingBandwidthI {
  monthly_usage: string;
  monthly_usage_unit: string;
  method: string;
}
// end 11/04/2021

//note: endpoint called if 1 point and the slope are known
export interface SinglePointWithKnownSlopeI {
  y_1: string;
  distance: string;
  x_1: string;
  slope: string;
  method: string;
}

export type AllOtherCalculators =
  | ConcreteSquareFootingI
  | CircularSlapI
  | CurbAndGutterBarrierI
  | StairsConcreateI
  | HoleColumnI
  | SlopeCalculatorForTwoKnownPointsI
  | ElapsedTimeMethodI
  | TrapSpeedMethodI
  | ParrallelResitorI
  | SeriesResistorI
  | ConductorResitorI
  | HorsepowerCalculationI
  | WebsiteBandwidthI
  | HostingBandwidthI
  | SinglePointWithKnownSlopeI;

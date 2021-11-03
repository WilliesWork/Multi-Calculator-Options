export interface ConcreteSquareFootingI {
    length: string;
    length_unit: string;
    width: string;
    width_unit: string;
    breadth: string;
    breadth_unit: string;
    quantity: string;
  }
  
  export interface CircularSlapI {
    length: string;
    length_unit: string;
    outer_diameter: string;
    outer_diameter_unit: string;
    inner_diameter: string;
    inner_diameter_unit: string;
    quantity: string;
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
}

export interface HoleColumnI {
    diameter: string;
    diameter_unit: string;
    height_unit: string;
    height: string;
    quantity: string;
}
  
/* eslint-disable camelcase */

// MATH INTERFACES

// Surface Area
export interface BallSurfaceArea {
  statusCode: number;
  statusDescription: string;
  surfaceArea: number;
  area: number;
}
export interface SurfaceAreaI {
  radius: string;
  radius_unit: string;
  method: string;
}

export interface CubeAreaI {
  edge_length: string;
  edge_unit: string;
  method: string;
}

export interface ConeAreaI {
  radius: string;
  radius_unit: string;
  height: string;
  height_unit: string;
  method: string;
}

export interface RectangularAreaI {
  length: string;
  length_unit: string;
  width: string;
  width_unit: string;
  height: string;
  height_unit: string;
  method: string;
}

export interface CylindricalTankAreaI {
  radius: string;
  radius_unit: string;
  height: string;
  height_unit: string;
  method: string;
}

export interface SquarePyramidSurfaceAreaI {
  base_edge: string;
  base_edge_unit: string;
  height: string;
  height_unit: string;
  method: string;
}

export interface CapsuleSurfaceAreaI {
  base_radius: string;
  base_radius_unit: string;
  height: string;
  height_unit: string;
  method: string;
}

export interface ConicalFrustrumSurfaceAreaI {
  top_radius: string;
  top_radius_unit: string;
  bottom_radius: string;
  bottom_radius_unit: string;
  height: string;
  height_unit: string;
  method: string;
}

export interface EllipsoidSurfaceAreaI {
  axis1: string;
  axis1_unit: string;
  axis2: string;
  axis2_unit: string;
  axis3: string;
  axis3_unit: string;
  method: string;
}

export interface SphericalCapSurfaceAreaI {
  radius: string;
  radius_unit: string;
  height: string;
  height_unit: string;
  method: string;
}

export interface RectangleAreaI {
  length: string;
  length_unit: string;
  width: string;
  width_unit: string;
}

// start here
export interface ParallelogramAreaI {
  breadth: string;
  breadth_unit: string;
  height: string;
  height_unit: string;
}

export interface EllipseAreaI {
  semi_major_axes_a: string;
  semi_major_axes_a_unit: string;
  semi_major_axes_b: string;
  semi_major_axes_b_unit: string;
}

export interface TrapezoidAreaI {
  base1: string;
  base1_unit: string;
  base2: string;
  base2_unit: string;
  height: string;
  height_unit: string;
}

export interface TriangleAreaI {
  sideA: string;
  sideA_unit: string;
  sideB: string;
  sideB_unit: string;
  sideC: string;
  sideC_unit: string;
}

export interface CircleAreaI {
  radius: string;
  radius_unit: string;
}

export interface SectorAreaI {
  radius: string;
  radius_unit: string;
  angle: string;
  angle_unit: string;
}

// Volume
export interface SphereVolumeCalculatorI {
  radius: string;
  radius_unit: string;
}

export interface ConeVolumeCalculatorI {
  radius: string;
  radius_unit: string;
  height: string;
  height_unit: string;
}

export interface CubeVolumeCalculatorI {
  edge_length: string;
  edge_length_unit: string;
}

export interface CylinderVolumeCalculatorI {
  radius: string;
  radius_unit: string;
  height_unit: string;
  height: string;
}

export interface RectangularTankVolumeI {
  length: string;
  length_unit: string;
  width: string;
  width_unit: string;
  height: string;
  height_unit: string;
}

export interface CapsuleVolumeCalculatorI {
  radius: string;
  radius_unit: string;
  height: string;
  height_unit: string;
}

export interface SphericalCapVolumeI {
  radius: string;
  radius_unit: string;
  height_unit: string;
  height: string;
}

export interface SquarePyramidVolumeI {
  base: string;
  base_unit: string;
  height_unit: string;
  height: string;
}

export interface EllipsoidVolumeCalculatorI {
  axis1: string;
  axis1_unit: string;
  axis2: string;
  axis2_unit: string;
  axis3: string;
  axis3_unit: string;
}

export interface TubeVolumeCalculatorI {
  outer_diameter: string;
  outer_diameter_unit: string;
  inner_diameter: string;
  inner_diameter_unit: string;
  length: string;
  length_unit: string;
}

export interface ConicalFrustumVolumeI {
  top_radius: string;
  top_radius_unit: string;
  bottom_radius: string;
  bottom_radius_unit: string;
  height_unit: string;
  height: string;
}

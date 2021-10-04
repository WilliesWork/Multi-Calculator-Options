/* eslint-disable camelcase */

// MATH INTERFACES
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
  // eslint-disable-next-line camelcase
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

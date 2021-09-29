/* eslint-disable camelcase */
export interface BallSurfaceArea {
    statusCode: number;
    statusDescription: string;
    surfaceArea: number;
    area: number;

}
export interface surfaceAreaI {
    radius: string;
    radius_unit: string
    method: string;
}

export interface cubeAreaI {
    // eslint-disable-next-line camelcase
    edge_length: string;
    edge_unit: string;
    method: string;
}

export interface ConeAreaI {
<<<<<<< HEAD
    radius: string;
    radius_unit: string;
    height: string;
    height_unit: string;
    method: string;
=======
  radius: string;
  height: string;
  method: string;

>>>>>>> c91563b2b8f115502e0954a0a28bcc0046ee9ab2
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
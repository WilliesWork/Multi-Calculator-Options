/* eslint-disable camelcase */
export interface BallSurfaceArea {
    statusCode: number;
    statusDescription: string;
    surfaceArea: number;
    area: number;

}
export interface surfaceAreaI {
    radius: string;
    method: string;
}

export interface cubeAreaI {
    // eslint-disable-next-line camelcase
    edge_length: string;
    method: string;
}

export interface ConeAreaI {
  radius: string;
  height: string;
  method: string;

}

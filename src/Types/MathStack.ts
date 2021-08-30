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
    base_surface_area: number;
    lateral_surface_area: number;
    coneSurfaceArea: number

}

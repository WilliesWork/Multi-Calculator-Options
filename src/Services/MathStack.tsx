/* eslint-disable camelcase */
import axios from 'axios'
import { ConeAreaI, cubeAreaI, surfaceAreaI } from '../Types/MathStack'

export const CalculateSurfaceArea = async (calculateArea: surfaceAreaI) => {
  try {
    const { data } = await axios.post('http://165.56.32.222/api/calculator/surface-areas', calculateArea)

    const { statusCode, statusDescription, surfaceArea, area } = data
    const message = {
      surfaceAreas: surfaceArea,
      Area: area
    }
    console.log(surfaceArea, 'and', area)
    if (statusCode === 100) {
      return { success: statusDescription, payload: message }
    }
    throw new Error('Responded with unexpected Error')
  } catch (err) {
    const { data: { statusCode } } = err.respose

    if (statusCode === 102) {
      return { success: false, payload: 'Server Error' }
    }
    return {
      success: false,
      payload: 'Unexpected Error'
    }
  }
}

export const CalculateCubeSurfaceArea = async (calculateCubeArea: cubeAreaI) => {
  try {
    const { data } = await axios.post('http://165.56.32.222/api/calculator/surface-areas', calculateCubeArea)

    const { statusCode, statusDescription, area, cubeSurfaceArea, errors } = data
    const message = {
      CubeSurfaceArea: cubeSurfaceArea,
      Area: area
    }
    console.log(errors)
    if (statusCode === 100 && statusDescription === 'success') {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: statusDescription, payload: errors.edge_length }
    }
    throw new Error('===> Responded with unexpected error')
  } catch (err) {
    return { success: false, payload: 'SERVER ERROR' }
  }
}

export const calculateConeSurfaceArea = async (calculateConeArea: ConeAreaI) => {
  try {
    const { data } = await axios.post('http://165.56.32.222/api/calculator/surface-areas', calculateConeArea)

    const { statusCode, statusDescription, base_surface_area, lateral_surface_area, coneSurfaceArea, errors } = data

    const message = {
      baseSurfaceArea: Number(base_surface_area),
      lateralSurefaceArea: Number(lateral_surface_area),
      coneSurfaceArea: Number(coneSurfaceArea)
    }

    if (statusCode === 100 && statusDescription === 'success') {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: statusDescription, payload: errors }
    }
    throw new Error('====> Unexpected Response')
  } catch (err) {
    return { success: false, payload: 'SERVER ERROR' }
  }
}

export const calculateCylindricalTank = async (calculateCylindricalArea: ConeAreaI) => {
  try {
    const { data } = await axios.post('http://165.56.32.222/api/calculator/surface-areas', calculateCylindricalArea)

    const { base_surface_area, cylindricalTankSurfaceArea, lateral_surface_area, statusDescription, statusCode, errors } = data

    const message = {
      baseSurfaceArea: Number(base_surface_area),
      lateralSurefaceArea: Number(lateral_surface_area),
      cylindricalTank: Number(cylindricalTankSurfaceArea)
    }

    if (statusCode === 100 && statusDescription === 'success') {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: statusDescription, payload: errors }
    }
    throw new Error('====> Unexpected Response')
  } catch (err) {
    return { success: false, payload: 'SERVER ERROR' }
  }
}

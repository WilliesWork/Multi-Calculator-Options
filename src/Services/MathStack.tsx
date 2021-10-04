/* eslint-disable camelcase */
import axios from 'axios'
import { BASE_URL } from '../Common/AppUrl'
import { ConeAreaI, CubeAreaI, RectangularAreaI, SurfaceAreaI } from '../Types'

export const CalculateSurfaceArea = async (calculateArea: SurfaceAreaI | CubeAreaI | RectangularAreaI | ConeAreaI) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/math`, calculateArea)

    const { statusCode, statusDescription, message, error } = data
    console.log(message, error)
    if (statusCode === 100) {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: false, payload: 'Server Error' }
    }

    throw new Error('Responded with unexpected Error')
  } catch (err) {
    return {
      success: false,
      payload: 'Unexpected Error'
    }
  }
}

export const CalculateCubeSurfaceArea = async (calculateCubeArea: CubeAreaI) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/math`, calculateCubeArea)

    const { statusCode, statusDescription, message, error } = data

    console.log(error)
    if (statusCode === 100 && statusDescription === 'success') {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: statusDescription, payload: message }
    }
    throw new Error('===> Responded with unexpected error')
  } catch (err) {
    return { success: false, payload: 'SERVER ERROR' }
  }
}

export const calculateConeSurfaceArea = async (calculateConeArea: ConeAreaI) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/math`, calculateConeArea)

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

export const calculateRectangularArea = async (rectangularArea: RectangularAreaI) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/calculator/math`, rectangularArea)

    const { statusCode, statusDescription, message, error } = data

    if (statusCode === 100 && statusDescription === 'success') {
      return { success: statusDescription, payload: message }
    }
    if (statusCode === 102) {
      return { success: statusDescription, payload: message }
    }
    throw new Error('===> Responded with unexpected error')
  } catch (err) {
    return { success: false, payload: 'SERVER ERROR' }
  }
}
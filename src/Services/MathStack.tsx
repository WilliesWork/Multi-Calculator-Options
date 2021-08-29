import axios from 'axios'
import { surfaceAreaI } from '../Types/MathStack'

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

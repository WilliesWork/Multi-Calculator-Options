import axios from 'axios'
import { BallSurfaceArea } from '../Types/MathStack'

export const calculateSurfaceArea = async () => {
  try {
    const { data } = await axios.post<BallSurfaceArea>('165.56.32.222/api/calculator/surface-areas')

    const { statusCode, statusDescription, surfaceArea, area } = data
    console.log(surfaceArea)
    if (statusCode === 100) {
      return { success: statusDescription, payload: surfaceArea && area }
    }
    if (statusCode === 102) {
      return { success: statusDescription, payload: 'Server Error' }
    }
  } catch (err) {
    return {
      success: false,
      payload: 'Unexpected Error'
    }
  }
}

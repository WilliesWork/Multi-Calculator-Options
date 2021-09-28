import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUnits } from '../../Services/GetUnits'
import { RootState } from '../store'

interface GetUnitsSliceI {
    units: any[];
}

const initialState: GetUnitsSliceI = { units: [] }

export const fetchGetUnits = createAsyncThunk('getUnits/fetchGetUnits', async () => {
    const { success, payload } = await getUnits();

    if (success) {
        return {
            units: payload
        }
    }

    return {
        units: [],
    }
})

export const getUnitsSlice = createSlice({
    name: 'getUnits',
    initialState,
    reducers: {
        setGetUnits: (state, action: PayloadAction<any[]>) => {
            state.units = action.payload
        }
    },
    extraReducers: {
        [fetchGetUnits.fulfilled.toString()]: (state, action: PayloadAction<any>) => {
            const { units } = action.payload
            state.units = units
        }
    }
})

export default getUnitsSlice.reducer
export const {setGetUnits} = getUnitsSlice.actions
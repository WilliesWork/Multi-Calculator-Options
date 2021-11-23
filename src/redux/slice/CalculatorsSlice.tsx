import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store'

interface CalculatorState {
  result: {},
  isCalculating: boolean
}

// Initial states
const initialState: CalculatorState = {
  result: {},
  isCalculating: false,
};

export const calcsSlice = createSlice({
  name: "calcSlice",
  initialState,
  reducers: {
    calculateData: (state, action: PayloadAction<any[]>) => {
      state.isCalculating = true;
      state.result = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculateData } = calcsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCalculators = (state: RootState) => state.calcsSlice;

export default calcsSlice.reducer;

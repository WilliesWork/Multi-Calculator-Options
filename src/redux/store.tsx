import { configureStore } from "@reduxjs/toolkit";
import getUnitMeasure from './slice/GetUnits'

export const store = configureStore({
    reducer: {
        unitMeasures: getUnitMeasure
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
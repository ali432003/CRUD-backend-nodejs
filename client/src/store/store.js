import { configureStore } from '@reduxjs/toolkit'
import DarkModeSlice from './slices/DarkModeSlice'

export const store = configureStore({
  reducer: {
    darkMode : DarkModeSlice
  },
})
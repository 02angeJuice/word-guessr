import { configureStore } from '@reduxjs/toolkit'
import wordSlice from './slices/wordSlice'

export const store = configureStore({
  reducer: {
    word: wordSlice,
  },
})

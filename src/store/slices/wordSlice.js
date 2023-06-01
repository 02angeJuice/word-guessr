import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  words: [],
  shuffle: [],
  selecting: {},
}

export const wordSlice = createSlice({
  name: 'wordSlice',
  initialState: initialState,
  reducers: {
    addWord: (state, action) => {
      state.words = [...state.words, { ...action.payload }]
    },
  },
})

export const { test } = wordSlice.actions
export default wordSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
      user: ''
  },
  reducers: {
    login: (state) => {
      state.user = 'abc';
    },
    logout: (state) => {
      state.user = '';
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = counterSlice.actions

export default counterSlice.reducer
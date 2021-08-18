//importo para crear mi slice
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  //defino el state a utilizar
  initialState: {
    listas:[] 
  },
  //defino las funciones para modificar los states
  reducers: {
    guardarLista: (state, action) => {
      state.listas =[...state.listas, action.payload]
    },
    /* decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }, */
  },
})

// exporto las "acciones" o funciones a usar
export const counterActions = counterSlice.actions;

//exporto el slice
export default counterSlice;
//importo mi slice y también para configurar mi store
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./Slice"

//Configuro y conecto mi slice
const store = configureStore({
  reducer: {
    //la propiedad que defina aquí la utilizaré en el componente
    counterdata: counterSlice.reducer
  },
});

//exporto el store
export default store;
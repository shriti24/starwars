import { configureStore } from '@reduxjs/toolkit'
import  addReducer  from '../components/reducer/addReducer'
// ...

const appStore = configureStore({
  reducer: {
    favourite: addReducer,
  },
})
export default appStore
import { configureStore } from '@reduxjs/toolkit';
import cookie from './cookie';


let store = configureStore({
  reducer: {
    
    cookie: cookie
  }

})


export default store;
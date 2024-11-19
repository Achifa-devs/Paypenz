import { configureStore } from '@reduxjs/toolkit';
import cookie from './cookie';
import user from './user';


let store = configureStore({
  reducer: {
    
    cookie: cookie,
    user: user
  }

})


export default store;
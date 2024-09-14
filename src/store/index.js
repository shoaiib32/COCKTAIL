import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktailSlice";
import bagSlice from "./bag";


const store = configureStore({
  reducer: {
    app: cocktailSlice,
    bag: bagSlice,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import fruitReducer from './redux/fruitSlice';

const store = configureStore({
  reducer: {
    fruit: fruitReducer,
  },
});

export default store;

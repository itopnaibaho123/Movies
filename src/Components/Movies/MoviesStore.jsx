import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import MoviesReducer from './MoviesReducers';

const store = configureStore({
  reducer: {
    movie: MoviesReducer,
  },
});

export default store;

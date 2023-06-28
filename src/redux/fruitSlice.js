import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ApiId = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=25513038880416a870400d19e9f6c4f7';

export const fetchFruits = createAsyncThunk('fruit/fetchFruits', async () => {
  const response = await axios.get(ApiId);
  return response.data;
});

const fruitSlice = createSlice({
  name: 'fruit',
  initialState: {
    fruits: [],
    filteredFruits: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterByYear(state, action) {
      const year = action.payload;
      state.filteredFruits = state.fruits.filter((fruit) => {
        const fruitYear = new Date(fruit.date).getFullYear().toString();
        return fruitYear === year;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFruits.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFruits.fulfilled, (state, action) => {
        state.loading = false;
        state.fruits = action.payload;
      })
      .addCase(fetchFruits.rejected, (state, action) => {
        state.loading = false;
        state.fruits = [];
        state.error = action.error.message;
      });
  },
});

export const { filterByYear } = fruitSlice.actions;
export default fruitSlice.reducer;

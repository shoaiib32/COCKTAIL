import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Fetching all cocktails
export const fetchCocktail = createAsyncThunk(
  "cocktail/fetchCocktail",
  async () => {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    return response.json(); 
  }
);

// Fetching single cocktail details
export const fetchSingleCocktail = createAsyncThunk( // Corrected name
  "cocktail/fetchSingleCocktail",
  async ({ productDetailsId }) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productDetailsId}`);
    return response.json(); // Corrected JSON call
  }
);

export const fetchSearchCocktail = createAsyncThunk(
  "cocktail/fetchSearchCocktail",
  async ({searchText }) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`);
    return response.json();
  }
);

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    loading: false,
    cocktails: [],
    cocktail: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktail.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks;
      })
      .addCase(fetchCocktail.rejected, (state, action) => {
        state.loading = false;
  
      })
      .addCase(fetchSingleCocktail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCocktail.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktail = action.payload.drinks;
      })
      .addCase(fetchSingleCocktail.rejected, (state, action) => {
        state.loading = false;
      
      })
      

      .addCase(fetchSearchCocktail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchCocktail.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks;
      })
      .addCase(fetchSearchCocktail.rejected, (state, action) => {
        state.loading = false;
   
      })
  },
});

export default cocktailSlice.reducer;

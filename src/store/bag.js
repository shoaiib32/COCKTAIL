import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag", // Ensure this name matches how it's referenced in the store configuration
  initialState: {}, // State is an object where keys are item IDs and values are quantities
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload.id;
      // Convert itemId to a number if necessary
      const numericItemId = Number(itemId);
      if (state[numericItemId]) {
        state[numericItemId] += 1;
      } else {
        state[numericItemId] = 1;
      }
      console.log(numericItemId);
    },
    removeFromBag: (state, action) => {
      const itemId = action.payload.id;
      // Convert itemId to a number if necessary
      const numericItemId = Number(itemId);
      if (state[numericItemId]) {
        if (state[numericItemId] > 1) {
          state[numericItemId] -= 1;
        } else {
          delete state[numericItemId];
        }
      }
    },
  },
});

// Exporting actions for dispatching in components
export const bagAction = bagSlice.actions;
// Export the reducer, not the entire slice object
export default bagSlice.reducer;

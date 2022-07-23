import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    value: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.value.unshift(action.payload);
    },
    addAllPost: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const selectPost = state => state.post.value;
export const { addPost, addAllPost } = postSlice.actions;
export default postSlice.reducer;

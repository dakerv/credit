import { configureStore, createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDarkMode: false },
  reducers: {
    toggleTheme: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ImageState {
  images: string[];
  generating: boolean;
  error: string | null;
}

const initialState: ImageState = {
  images: [],
  generating: false,
  error: null,
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage: (state, action: PayloadAction<string>) => {
      state.images.push(action.payload);
    },
    setGenerating: (state, action: PayloadAction<boolean>) => {
      state.generating = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addImage, setGenerating, setError } = imagesSlice.actions;
export default imagesSlice.reducer;

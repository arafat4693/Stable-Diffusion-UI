import { ImgData } from '@/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ImageState {
  images: string[];
  generating: boolean;
  error: string | null;
  generationHistory: ImgData | null;
}

const initialState: ImageState = {
  images: [],
  generating: false,
  error: null,
  generationHistory: null,
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
    setHistory: (state, action: PayloadAction<ImgData | null>) => {
      state.generationHistory = action.payload;
    },
  },
});

export const { addImage, setGenerating, setError, setHistory } =
  imagesSlice.actions;
export default imagesSlice.reducer;

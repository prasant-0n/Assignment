// src/features/formSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  name: string;
  phone: string;
  email: string;
  area: string;
  city: string;
  state: string;
  postCode: string;
}

interface FormState {
  formData: FormData;
}

const initialState: FormState = {
  formData: {
    name: '',
    phone: '',
    email: '',
    area: '',
    city: '',
    state: '',
    postCode: ''
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData(state, action: PayloadAction<FormData>) {
      state.formData = action.payload;
    }
  }
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;

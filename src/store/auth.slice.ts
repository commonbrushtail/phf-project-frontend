import { createSlice } from "@reduxjs/toolkit";

interface LoginRequest {
    type: "google" | "facebook" | "email" | null;
    email: string;
    password: string;
    isLoading: boolean;
    error: string | null;
}

interface initialState {
    loginRequest: LoginRequest;
}

const initialState: initialState = {
    loginRequest: {
        type: null,
        email: "",
        password: "",
        isLoading: false,
        error: null,
    },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, action) {
      state.loginRequest.isLoading = true;
    },
    loginSuccess(state, action) {
      state.loginRequest.isLoading = false;
    },
    loginFailure(state, action) {
      state.loginRequest.isLoading = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;

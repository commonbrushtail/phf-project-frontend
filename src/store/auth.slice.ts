// Import necessary dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../services/axios';
// Define the initial state
interface AuthState {
    user: any;
    isLoading: boolean;
    error: string | null;
}

export const checkUserLogin = async ()=>{
    try{
        const response = await api.get('auth/check-user-login');
        return response.data;
    }catch(error){
        return error
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        error: null,
    } as AuthState,
    reducers: {
       checkLoginStart: (state) => {

       }
    },
});

// Export the actions and reducer
export const { checkLoginStart } = authSlice.actions;
export default authSlice.reducer;

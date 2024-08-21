import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        AuthLogin: (authState, action) => {
            const { token, user } = action.payload;
            authState.token = token;
            authState.user = user;
        },
        AuthLogout: (authState) => {
            authState.user = initialState.user;
            authState.token = initialState.token;
        }
    }
});


export const { AuthLogin, AuthLogout } = authSlice.actions;

export default authSlice.reducer;
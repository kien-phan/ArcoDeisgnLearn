import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/Domain/Model/User";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: {} as User,
    },

    reducers: {
        loginUser: (state, action: PayloadAction<User>) => {
            return {
                ...state,
                user: action?.payload
            };
        },
        logoutUser: (state) => {
            return {
                ...state,
                user: state.user.isSavePassword ? {
                    user_name: state?.user?.user_name,
                    pass_word: state?.user?.pass_word,
                    isSavePassword: state?.user?.isSavePassword
                } as User : {} as User
            };
        },
    },
});

export const { loginUser, logoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;

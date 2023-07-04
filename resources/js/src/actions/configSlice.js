import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig from "../config/AxiosConfig";

export const getConfig = createAsyncThunk("config", async () => {
    const response = await AxiosConfig.get("/home");
    return response;
});

export const configSlice = createSlice({
    name: "config",
    initialState: {
        data: [],
        success: false,
        status: 402,
    },
    reducers: {},
    extraReducers: {
        [getConfig.fulfilled]: (state, { payload }) => {
            state.data = payload.data.data;
            state.status = payload.data.status;
            state.success = payload.data.success;
        },
        [getConfig.pending]: (state) => {
            state.status = 202;
        },
        [getConfig.rejected]: (state) => {
            state.success = 500;
        },
    },
});

export default configSlice.reducer;

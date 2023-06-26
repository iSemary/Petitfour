import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig from "../config/AxiosConfig";

export const getBlogs = createAsyncThunk("blogs", async () => {
    const response = await AxiosConfig.get("/blogs");
    return response;
});

export const blogsSlice = createSlice({
    name: "blogs",
    initialState: {
        data: [],
        success: false,
        status: 402,
    },
    reducers: {},
    extraReducers: {
        [getBlogs.fulfilled]: (state, { payload }) => {
            state.data = payload.data.data;
            state.status = payload.data.status;
            state.success = payload.data.success;
        },
        [getBlogs.pending]: (state) => {
            state.status = 202;
        },
        [getBlogs.rejected]: (state) => {
            state.success = 500;
        },
    },
});

export default blogsSlice.reducer;

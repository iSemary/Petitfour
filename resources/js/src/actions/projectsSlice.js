import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig from "../config/AxiosConfig";

export const getProjects = createAsyncThunk("projects", async () => {
    const response = await AxiosConfig.get("/projects");
    return response;
});

export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        data: [],
        success: false,
        status: 402,
    },
    reducers: {},
    extraReducers: {
        [getProjects.fulfilled]: (state, { payload }) => {
            state.data = payload.data.data;
            state.status = payload.data.status;
            state.success = payload.data.success;
        },
        [getProjects.pending]: (state) => {
            state.status = 202;
        },
        [getProjects.rejected]: (state) => {
            state.success = 500;
        },
    },
});

export default projectsSlice.reducer;

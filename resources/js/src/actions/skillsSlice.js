import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSkills = createAsyncThunk("skills", async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL + "skills");
    return response;
});

export const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        data: [],
        success: false,
        status: 402,
    },
    reducers: {},
    extraReducers: {
        [getSkills.fulfilled]: (state, { payload }) => {
            state.data = payload.data.data;
            state.status = payload.data.status;
            state.success = payload.data.success;
        },
        [getSkills.pending]: (state) => {
            state.status = 202;
        },
        [getSkills.rejected]: (state) => {
            state.success = 500;
        },
    },
});

export default skillsSlice.reducer;

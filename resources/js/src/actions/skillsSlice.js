import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSkills = createAsyncThunk("skills", async () => {
    const response = await axios.get(process.env.REACT_API_APP_URL + "skills");
    console.log(response)
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
            state.data = payload;
            state.status = payload;
            state.success = payload;
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

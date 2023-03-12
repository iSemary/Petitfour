import { configureStore } from "@reduxjs/toolkit";
import { getSkills } from "./skillsSlice";

export default configureStore({
    reducer: {
        skills: getSkills,
    },
});

import { configureStore } from "@reduxjs/toolkit";
import getSkills from "./skillsSlice";
import getBlogs from "./blogsSlice";
import getProjects from "./projectsSlice";
import getConfig  from "./configSlice";

export default configureStore({
    reducer: {
        skills: getSkills,
        config: getConfig,
        blogs: getBlogs,
        projects: getProjects,
    },
});
